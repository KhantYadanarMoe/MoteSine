<?php

namespace App\Http\Controllers;

use App\Models\GeneralSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class GeneralSettingController extends Controller
{
    public function updateSetting(){
        $validator = Validator::make(request()->all(), [
            "name" => ["nullable"],
            "email" => ["nullable"],
            "phone" => ["nullable", "numeric"],
            "address" => ["nullable"],
            "from" => ["nullable"],
            "to" => ["nullable"],
            "logo" => ["nullable", "mimes:jpeg,png,jpg,gif,svg", "max:2048"],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()->messages()
            ], 422);
        }

        // Only one record is allowed
        $setting = GeneralSetting::first();

        if (!$setting) {
            $setting = new GeneralSetting(); // create new record if not exists
        }

        // store logo
        if (request()->hasFile('logo')) {
            $logo = request()->file('logo');
            $logoName = time() . '_' . $logo->getClientOriginalName();
            $logoPath = $logo->storeAs('settings', $logoName, 'public');
        } else {
            $logoPath = $setting->logo; // keep existing logo if no new one
        }

        $setting->fill([
            'name' => request('name'),
            'email' => request('email'),
            'phone' => request('phone'),
            'address' => request('address'),
            'from' => request('from'),
            'to' => request('to'),
            'logo' => $logoPath,
        ])->save();

        return response()->json([
            'message' => 'General Setting updated successfully.',
            'setting' => $setting
        ]);
    }

    public function getSetting(){
        $setting = GeneralSetting::first();

        return response()->json([
            'setting' => $setting
        ]);
    }


}
