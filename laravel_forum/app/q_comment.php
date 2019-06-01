<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class q_comment extends Model
{
    protected $guarded=['id', 'q_id', 'user_id'];
}
