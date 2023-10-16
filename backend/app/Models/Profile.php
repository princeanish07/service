<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Profile extends Model
{
    use HasFactory;
    public $fillable=['user_id','phone_number','address','date_of_birth','gender','photo','bio'];

    protected $casts=[
        'address'=>'array'
    ];
    public function user(){
        return $this->belongsTo(User::class,'user_id');
    }
}
