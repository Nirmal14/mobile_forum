<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class q_com_reply extends Model
{
    protected $guarded=['id', 'com_id', 'user_id'];
}
