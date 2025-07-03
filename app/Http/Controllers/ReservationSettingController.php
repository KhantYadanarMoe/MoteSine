<?php

namespace App\Http\Controllers;

use App\Models\ReservationSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ReservationSettingController extends Controller
{
    public function updateSetting(){
        $validator = Validator::make(request()->all(), [
            "maxGuests" => ["nullable", "numeric"],
            "type" => ["nullable"],
            "allow" => ["nullable", "boolean"],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()->messages()
            ], 422);
        }

        // Only one record is allowed
        $setting = ReservationSetting::first();

        if (!$setting) {
            $setting = new ReservationSetting(); // create new record if not exists
        }

        $setting->fill([
            'maxGuests' => request('maxGuests'),
            'type' => request('type'),
            'allow' => request('allow'),
        ])->save();

        return response()->json([
            'message' => 'Reservationr Setting updated successfully.',
            'setting' => $setting
        ]);
    }

    public function getSetting(){
        $setting = ReservationSetting::first();

        return response()->json([
            'setting' => $setting
        ]);
    }
}
