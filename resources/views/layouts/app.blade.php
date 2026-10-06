<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title', 'ReDo Family - Kisah & Galeri Kami')</title>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=Poppins:wght@100;200;300;400;500;600&display=swap" rel="stylesheet">

    <!-- Feather Icons -->
    <script src="https://unpkg.com/feather-icons"></script>
    <style>svg { display: inline-block; vertical-align: middle; }</style>

    <!-- Vite Assets (Tailwind & JS) -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-[#0a0a0f] text-[#f0ece6] overflow-x-hidden antialiased select-none md:select-auto">

    <!-- Scroll Progress Bar -->
    <div class="scroll-progress" id="scrollProgress"></div>

    <!-- Navbar -->
    @include('partials.navbar')

    <!-- Main Content -->
    <main>
        @yield('content')
    </main>

    <!-- Footer -->
    @include('partials.footer')

    <!-- Music Player -->
    @include('partials.music-player')

    <!-- Back to Top Button -->
    <button class="back-to-top" id="backToTop" aria-label="Kembali ke atas">
        <i data-feather="chevron-up"></i>
    </button>

    @stack('scripts')
</body>
</html>

