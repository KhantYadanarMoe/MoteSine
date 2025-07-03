<?php

namespace App\Http\Controllers;

use App\Models\HeroSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class HeroSettingController extends Controller
{
    public function updateSetting(){
        $validator = Validator::make(request()->all(), [
            "header" => ["nullable"],
            "body" => ["nullable"],
            "heroImg" => ["nullable", "array", "max:3"], // max 3 files
            "heroImg.*" => ["mimes:jpeg,png,jpg,gif,svg", "max:2048"],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()->messages()
            ], 422);
        }

        // Only one record is allowed
        $setting = HeroSetting::first();

        if (!$setting) {
            $setting = new HeroSetting(); // create new record if not exists
        }

        $heroImgPaths = [];

        if (request()->hasFile('heroImg')) {
            foreach (request()->file('heroImg') as $file) {
                $name = time() . '_' . $file->getClientOriginalName();
                $path = $file->storeAs('hero', $name, 'public');
                $heroImgPaths[] = $path;
            }
        } else {
            $heroImgPaths = $setting->heroImg ? json_decode($setting->heroImg, true) : [];
        }

        $setting->fill([
            'header' => request('header'),
            'body' => request('body'),
            'heroImg' => json_encode($heroImgPaths),
        ])->save();

        return response()->json([
            'message' => 'Hero Setting updated successfully.',
            'setting' => $setting
        ]);
    }

    public function getSetting(){
        $setting = HeroSetting::first();

        return response()->json([
            'setting' => $setting
        ]);
    }
}
