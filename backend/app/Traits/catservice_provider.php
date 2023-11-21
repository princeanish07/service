<?php
namespace App\Traits;
 trait catservice_provider{
public function commonRules(){
    return [
        'cid' => 'required',
        'description' => 'sometimes',
        'days' => 'required',
        'charge' => 'required',
        'time' => 'required',
        'offers' => 'sometimes',
        'experience' => 'sometimes',
        'image' => 'sometimes',
        'address' => 'required',
        // 'service.*.availabe_date' => 'required|date',
    ];
}

}