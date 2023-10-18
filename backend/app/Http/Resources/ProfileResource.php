<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProfileResource extends JsonResource
{
 
    public function toArray(Request $request): array
    {
        $profile= $this->whenLoaded('profile');
       
        return [
            'name'=>$this->name,
            'email'=>$this->email,
            'bio'=> $profile? $profile->bio : null,
            'photo'=>$profile?$profile->photo : null,
            'phone_number'=>$profile?$profile->phone_number : null,
            'address'=>$profile && $profile->address?$profile->address : null,
        ];
    }
}
