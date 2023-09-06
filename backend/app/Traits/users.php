<?php
namespace App\Traits;

use Illuminate\Validation\Rule;


 trait users{
    public function commonRules(){
        return [
        'first_name'=>['required','string'],
        'last_name'=>['required','string'],

        'password'=>['required','min:3','confirmed'],

        'is_active'=>['required','Boolean'],
        ];

        
    }
 
 }
