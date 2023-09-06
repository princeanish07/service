<?php
namespace App\Traits;
 trait catservice_provider{
public function commonRules(){
    return [
        'service.*.id' => 'required',
        'service.*.period' => 'required',
        'service.*.duration' => 'required',
        'service.*.price' => 'required|numeric',
        'service.*.location' => 'required|array',
        'service.*.location.province' => 'required',
        'service.*.location.district' => 'required',
        'service.*.location.muncipility' => 'required',
        'service.*.status' => 'required|boolean',
        'service.*.availabe_date' => 'required|date',
    ];
}

}