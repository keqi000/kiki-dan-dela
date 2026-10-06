<?php

// Set up serverless storage paths for Vercel
$storagePath = '/tmp/storage';
$subDirs = [
    $storagePath,
    $storagePath . '/framework',
    $storagePath . '/framework/views',
    $storagePath . '/framework/cache',
    $storagePath . '/framework/cache/data',
    $storagePath . '/framework/sessions',
    $storagePath . '/logs',
];

foreach ($subDirs as $dir) {
    if (!is_dir($dir)) {
        @mkdir($dir, 0755, true);
    }
}

$_ENV['VERCEL'] = '1';
$_ENV['LARAVEL_STORAGE_PATH'] = $storagePath;
$_ENV['VIEW_COMPILED_PATH'] = $storagePath . '/framework/views';

require __DIR__ . '/../public/index.php';

