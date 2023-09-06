<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Provider;
use App\Models\Category;
use App\Models\User;

class Catservice extends Model
{
    use HasFactory;
    public $fillable = ['name', 'description', 'image', 'category_id'];
    public function providers()
    {
        return $this->belongsToMany(Provider::class);
    }
    public function category()
    {
        return $this->belongsTo(Category::class,'category_id');
    }
    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}
