<?php

namespace App\Traits;

use Illuminate\Validation\Rule;

trait profile
{
    public function commonRules()
    {
        return [
            'name' => ['required', 'string'],
            'email' => ['required', 'string'],
            'bio' => ['string', 'sometimes'],


            'address.district' => ['required'],
            'address.muncipility' => ['required'],

            'address.ward' => ['required'],

            'address.chowk' => ['sometimes'],



            // 'photo'=>['required','file'],

        ];
    }
}
