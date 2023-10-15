<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProfileResource extends JsonResource
{
 
    public function toArray(Request $request): array
    {
      
        return [
            'photo'=>$this->photo,
            'bio'=>$this->bio,
            'phone_number'=>$this->phone_number,
            'address'=>$this->address,
        ];
    }
}
