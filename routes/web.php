<?php

use Illuminate\Support\Facades\Route;

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
Route::post('create', 'EmployeeController@create');
Route::get('index', 'EmployeeController@index');
Route::get('edit/getEmployee/{id}', 'EmployeeController@getEmployee');
Route::post('edit/update/{id}', 'EmployeeController@update');
Route::post('employee/delete/{id}', 'EmployeeController@delete');

Route::get('/{any?}', function () {
    return view('welcome');
})->where('any', '.*');

