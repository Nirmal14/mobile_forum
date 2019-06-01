<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class q_tag extends Model
{
    protected $guarded=['id', 'q_id', 'tag_id'];
}
