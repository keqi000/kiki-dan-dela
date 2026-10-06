<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

$app = Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        //
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        //
    })->create();

// Support for serverless environments (e.g. Vercel)
if (isset($_ENV['VERCEL']) || env('VERCEL') || env('LARAVEL_STORAGE_PATH')) {
    $storagePath = env('LARAVEL_STORAGE_PATH', '/tmp/storage');
    $app->useStoragePath($storagePath);
}

return $app;
