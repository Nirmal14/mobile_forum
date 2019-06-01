<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });
Route::get('/showAppName','MobileController@showAppName');
Route::post('/saveUser','MobileController@saveUser');
Route::get('/showAllQuestions','MobileController@showAllQuestions');
Route::post('/q_details','MobileController@q_details');
Route::post('/verifyUser','MobileController@verifyUser');