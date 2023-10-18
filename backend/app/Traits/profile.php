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


            'district' => ['string','sometimes'],
            'muncipility' => ['string','sometimes'],

            'ward' => ['sometimes'],

            'chowk' => ['string','sometimes'],



            // 'photo'=>['required','file'],

        ];
    }
}
