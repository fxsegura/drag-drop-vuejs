<?php
use App\Http\Controllers\LandingPageController;
use Illuminate\Support\Facades\Route;

Route::get('/landing-pages/{id}', [LandingPageController::class, 'show']);
Route::get('/landing-pages', [LandingPageController::class, 'index']);
Route::post('/landing-pages', [LandingPageController::class, 'store']);
Route::delete('/landing-pages/{id}', [LandingPageController::class, 'destroy']);

Route::options('{any}', function () {
    return response()->json([], 200);
})->where('any', '.*');
