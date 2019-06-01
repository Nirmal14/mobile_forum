<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class sol_comment extends Model
{
    protected $guarded=['id', 'sol_id', 'user_id'];
}
