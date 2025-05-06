<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Laravel\Socialite\Facades\Socialite;

class AuthController extends Controller
{
    public function register(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed', // password confirmation field
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password), // Hash the password
        ]);

        Auth::login($user);

        return redirect('/'); 
    }

    public function login(Request $request){
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:8',
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            return redirect('/');
        }

        return back()->withErrors(['error' => 'Invalid credentials'])->withInput();
    }

    public function logout(){
        Auth::logout();
        return redirect()->route('login'); 
    }

    public function redirectToGoogle(){
        return Socialite::driver('google')->redirect();
    }

    public function handleGoogleCallback(){
        try {
            $googleUser = Socialite::driver('google')->user();

            $user = User::updateOrCreate([
                'email' => $googleUser->getEmail(),
            ], [
                'name' => $googleUser->getName(),
                'google_id' => $googleUser->getId(),
                'avatar' => $googleUser->getAvatar(),
            ]);

            Auth::login($user);
            return redirect('/');  
        } catch (\Exception $e) {
            dd($e->getMessage());  
        }
    }

    public function showUsers(){
        // take data from backend database
        $users = User::latest()->get();

        // send data to frontend
        return response()->json([
            'users' => $users
        ]);
    }

    public function updateUser(User $user){
        $validator = Validator::make(request()->all(), [
            "name" => ["required"],
            "email" => ["required"],
            "phone" => ["nullable", "numeric"],
            "address" => ["nullable"],
            "image" => ["nullable", "image", "mimes:jpeg,png,jpg,gif,svg", "max:2048"],
        ]);

        // condition for failed validation
        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()->messages()
            ], 422);
        }

        // store image
        $imagePath = null;
        if (request()->hasFile('image')) {
            $image = request()->file('image');
            $imageName = time() . '_' . $image->getClientOriginalName();
            $imagePath = $image->storeAs('users', $imageName, 'public'); 
        }else {
            // Retain the old image if no new image is provided
            $imagePath = $user->image;
        }

        Log::info(request()->all()); // Log all incoming data


        $user->update([
            'name' => request('name'),
            'email' => request('email'),
            'phone' => request('phone'),
            'address' => request('address'),
            'image' => $imagePath, // Save image path if any
        ]);
        return response()->json([
            'message' => 'User updated successfully.',
            'user' => $user
        ]);
    }

    public function delete(User $user){
        $user->delete();
        return response()->json([
            'message' => 'User deleted successful!'
        ]);
    }

}
