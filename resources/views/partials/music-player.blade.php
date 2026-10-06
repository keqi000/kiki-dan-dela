<div class="music-player" id="musicPlayer" data-audio-src="{{ $music['src'] ?? asset('assets/music/bruno mars - risk it all.mp3') }}">
    <button class="music-toggle" id="musicToggle" aria-label="Buka Pemutar Musik">
        <i data-feather="music"></i>
    </button>
    <div class="music-info" id="musicInfo">
        <div class="music-disc" id="musicDisc">
            <i data-feather="music"></i>
        </div>
        <div class="music-text">
            <p class="music-title" id="musicTitle">{{ $music['title'] ?? 'Risk It All - Bruno Mars' }}</p>
            <p class="music-artist">{{ $music['artist'] ?? 'Our Song ♥' }}</p>
        </div>
        <button class="music-play" id="musicPlay" aria-label="Putar atau Jeda Musik">
            <i data-feather="play"></i>
        </button>
    </div>
    <!-- Notifikasi autoplay -->
    <div class="music-notif" id="musicNotif">🎵 Tap untuk putar lagu</div>
</div>

