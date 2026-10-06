@extends('layouts.app')

@section('title', 'ReDo Family - Kisah & Galeri Kami')

@section('content')
    <!-- Section Home -->
    <section class="home" id="home" data-start-date="{{ $startDate }}">
        <div class="home-overlay"></div>
        <div class="floating-hearts">
            <span>♥</span><span>♥</span><span>♥</span>
            <span>♥</span><span>♥</span><span>♥</span>
        </div>
        <main class="content">
            <p class="home-subtitle">Kisah Cinta</p>
            <h1>Selamat Datang di<br />halaman <span id="typingText"></span></h1>
            <p class="home-desc">
                Disini anda dapat menemukan berbagai macam kisah dan kasih diantara kami ♥
            </p>
            <a href="#about" class="btn-cta">
                Lihat Kisah Kami <i data-feather="heart"></i>
            </a>

            <!-- Love Counter -->
            <div class="love-counter">
                <div class="counter-item">
                    <span id="countYears">00</span>
                    <p>Tahun</p>
                </div>
                <div class="counter-divider">♥</div>
                <div class="counter-item">
                    <span id="countMonths">00</span>
                    <p>Bulan</p>
                </div>
                <div class="counter-divider">♥</div>
                <div class="counter-item">
                    <span id="countDays">00</span>
                    <p>Hari</p>
                </div>
                <div class="counter-divider">♥</div>
                <div class="counter-item">
                    <span id="countHours">00</span>
                    <p>Jam</p>
                </div>
                <div class="counter-divider">♥</div>
                <div class="counter-item">
                    <span id="countSeconds">00</span>
                    <p>Detik</p>
                </div>
            </div>
        </main>
        <div class="scroll-indicator">
            <span></span>
        </div>
    </section>

    <!-- Section About -->
    <section class="about" id="about">
        <div class="section-header reveal">
            <p class="section-tag">Kenali Kami</p>
            <h2><span>Tentang</span> Kami</h2>
        </div>

        <div class="row">
            <!-- Cerita Kami -->
            <div class="content reveal">
                <div class="about-img">
                    <img src="{{ $story['image'] }}" alt="{{ $story['title'] }}" loading="lazy" />
                    <div class="img-overlay"></div>
                </div>
                <div class="text">
                    <h3>{{ $story['title'] }}</h3>
                    <div class="timeline-badge">{{ $story['date'] }}</div>
                    @foreach ($story['paragraphs'] as $p)
                        <p>{{ $p }}</p>
                    @endforeach
                </div>
            </div>

            <!-- Tentang Febrian -->
            <div class="content reverse reveal">
                <div class="text">
                    <h3>Tentang <span>{{ $febrian['nickname'] }}</span></h3>
                    <div class="info-grid">
                        <div class="info-card">
                            <i data-feather="coffee"></i>
                            <h4>Favorit Food & Drink</h4>
                            <ul>
                                @foreach ($febrian['foods'] as $food)
                                    <li>{{ $food }}</li>
                                @endforeach
                            </ul>
                        </div>
                        <div class="info-card">
                            <i data-feather="star"></i>
                            <h4>Hobby</h4>
                            <ul>
                                @foreach ($febrian['hobbies'] as $hobby)
                                    <li>{{ $hobby }}</li>
                                @endforeach
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="about-img profile-img">
                    <img src="{{ $febrian['image'] }}" alt="{{ $febrian['name'] }}" loading="lazy" />
                    <div class="img-overlay"></div>
                </div>
            </div>

            <!-- Tentang Nurdela -->
            <div class="content reveal">
                <div class="about-img profile-img">
                    <img src="{{ $dela['image'] }}" alt="{{ $dela['name'] }}" loading="lazy" />
                    <div class="img-overlay"></div>
                </div>
                <div class="text">
                    <h3>Tentang <span>{{ $dela['nickname'] }}</span></h3>
                    <div class="info-grid">
                        <div class="info-card">
                            <i data-feather="coffee"></i>
                            <h4>Favorit Food & Drink</h4>
                            <ul>
                                @foreach ($dela['foods'] as $food)
                                    <li>{{ $food }}</li>
                                @endforeach
                            </ul>
                        </div>
                        <div class="info-card">
                            <i data-feather="star"></i>
                            <h4>Hobby</h4>
                            <ul>
                                @foreach ($dela['hobbies'] as $hobby)
                                    <li>{{ $hobby }}</li>
                                @endforeach
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Section Galeri -->
    <section class="galeri" id="galeri">
        <div class="section-header reveal">
            <p class="section-tag">Momen Bersama</p>
            <h2><span>Galeri</span> Kami</h2>
        </div>

        <div class="galeri-grid">
            @foreach ($gallery as $index => $item)
                <div class="galeri-item reveal" data-index="{{ $index }}">
                    <img src="{{ $item['img'] }}" alt="{{ $item['title'] }}" loading="lazy" />
                    <div class="galeri-overlay">
                        <i data-feather="zoom-in"></i>
                        <h3>{{ $item['title'] }}</h3>
                    </div>
                </div>
            @endforeach
        </div>
    </section>

    <!-- Lightbox Modal -->
    @include('partials.lightbox')

    <!-- Section Kontak -->
    <section class="kontak" id="contact">
        <div class="section-header reveal">
            <p class="section-tag">Hubungi Kami</p>
            <h2><span>Kontak</span> Kami</h2>
            <p class="kontak-desc">Kontak kami yaa, Fb, Ig, Wa ada dibawah :)</p>
        </div>

        <div class="kontak-wrapper">
            <!-- Google Maps -->
            <div class="kontak-maps reveal">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1256.6321829359247!2d122.85165757555237!3d0.6539196925680569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1696302347873!5m2!1sid!2sid"
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Lokasi 1">
                </iframe>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d997.3972737246485!2d122.8802611394973!3d0.6141784319362571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1salfamart%20bongomeme!5e0!3m2!1sid!2sid!4v1696303181602!5m2!1sid!2sid"
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Lokasi 2">
                </iframe>
            </div>
            <!-- Media Sosial Cards -->
            <div class="kontak-medsos reveal">
                <!-- Febrian -->
                <div class="medsos-card">
                    <img src="{{ $febrian['image'] }}" alt="{{ $febrian['name'] }}" class="medsos-avatar" loading="lazy" />
                    <h3>Media Sosial <span>{{ $febrian['nickname'] }}</span></h3>
                    <div class="medsos-links">
                        <a href="{{ $febrian['social']['instagram'] }}" target="_blank" rel="noopener noreferrer" class="medsos-btn instagram">
                            <i data-feather="instagram"></i> Instagram
                        </a>
                        <a href="{{ $febrian['social']['facebook'] }}" target="_blank" rel="noopener noreferrer" class="medsos-btn facebook">
                            <i data-feather="facebook"></i> Facebook
                        </a>
                        <a href="{{ $febrian['social']['whatsapp'] }}" target="_blank" rel="noopener noreferrer" class="medsos-btn whatsapp">
                            <i data-feather="message-circle"></i> WhatsApp
                        </a>
                    </div>
                </div>

                <!-- Nurdela -->
                <div class="medsos-card">
                    <img src="{{ $dela['image'] }}" alt="{{ $dela['name'] }}" class="medsos-avatar" loading="lazy" />
                    <h3>Media Sosial <span>{{ $dela['nickname'] }}</span></h3>
                    <div class="medsos-links">
                        <a href="{{ $dela['social']['instagram'] }}" target="_blank" rel="noopener noreferrer" class="medsos-btn instagram">
                            <i data-feather="instagram"></i> Instagram
                        </a>
                        <a href="{{ $dela['social']['facebook'] }}" target="_blank" rel="noopener noreferrer" class="medsos-btn facebook">
                            <i data-feather="facebook"></i> Facebook
                        </a>
                        <a href="{{ $dela['social']['whatsapp'] }}" target="_blank" rel="noopener noreferrer" class="medsos-btn whatsapp">
                            <i data-feather="message-circle"></i> WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection

