<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Catservice;
use App\Models\User;

class Category extends Model
{
    use HasFactory;
    public $fillable = ['name', 'parent_id','description','keywords'];
    public function subcategories()
    {
        return $this->hasMany(Subcategory::class, 'category_id');
    }
<<<<<<< HEAD
   
    public function services()
    {
        return $this->hasMany(Catservice::class,'category_id');
    }
=======
    public function parentCategory(){
        return $this->belongsTo(Category::class,'parent_id')->with('category:id,name,parent_id');
    }
 
>>>>>>> develop
    
    
}
