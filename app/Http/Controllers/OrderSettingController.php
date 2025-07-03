<?php

namespace App\Http\Controllers;

use App\Models\OrderSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class OrderSettingController extends Controller
{
    public function updateSetting(){
        $validator = Validator::make(request()->all(), [
            "deliveryFee" => ["nullable", "numeric"],
            "minOrder" => ["nullable"],
            "type" => ["nullable"],
            "allow" => ["nullable", "boolean"],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()->messages()
            ], 422);
        }

        // Only one record is allowed
        $setting = OrderSetting::first();

        if (!$setting) {
            $setting = new OrderSetting(); // create new record if not exists
        }

        $setting->fill([
            'deliveryFee' => request('deliveryFee'),
            'minOrder' => request('minOrder'),
            'type' => request('type'),
            'allow' => request('allow'),
        ])->save();

        return response()->json([
            'message' => 'Order Setting updated successfully.',
            'setting' => $setting
        ]);
    }

    public function getSetting(){
        $setting = OrderSetting::first();

        return response()->json([
            'setting' => $setting
        ]);
    }
}
