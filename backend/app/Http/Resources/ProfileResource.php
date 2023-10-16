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
            'bio'=>$profile->bio,
            'photo'=>$profile->photo,
            'bio'=>$profile->bio,
            'phone_number'=>$profile->phone_number,
            'address'=>$profile->address,
        ];
    }
}
