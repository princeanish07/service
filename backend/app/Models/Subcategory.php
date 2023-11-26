<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subcategory extends Model
{
    // protected $table='subcategories';
    use HasFactory;
    public $fillable = ['name', 'category_id','description','keywords'];

    public function category(){
        $this->belongsTo(Category::class,'category_id');
    }

    public function services()
    {
        return $this->hasMany(Service::class,'subcategory_id');
    }

}
