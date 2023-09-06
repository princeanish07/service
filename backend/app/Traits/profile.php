<?php
namespace App\Traits;

use Illuminate\Validation\Rule;

trait profile{
    public function commonRules(){
        return [
                'gender'=>['required',Rule::in(['Male','Female','others'])],
                'date_of_birth'=>['required','date'],
                'address.district'=>['required'],
                'address.muncipility'=>['required'],

                'address.ward'=>['required'],

                'address.chowk'=>['sometimes'],

                'bio'=>['string','sometimes'],
                'photo'=>['required','file'],
        
        ];
    }

}