<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Show the main page.
     */
    public function index()
    {
        $startDate = '2022-01-17T00:00:00';

        $story = [
            'title' => 'Cerita Kami',
            'date' => '17 Januari 2022',
            'image' => asset('assets/images/about.jpg'),
            'paragraphs' => [
                'Saya bernama Febrian Rezki Hemeto, mempunyai pertemuan dengan seorang wanita bernama Nurdela Putri Otaha. Kami bertemu di SMAN 1 Tibawa. Awalnya kami hanya sahabat, tapi lama-lama timbul rasa suka. Kami berkomitmen untuk bersama sejak tanggal 17 Januari 2022 pada awal semester 2 kelas 12.',
                'Banyak hal yang membuat kami sadar bahwa cinta yang baik adalah cinta yang saling menghargai, memahami, dan mentoleransi pasangan dari segi apapun.',
            ],
        ];

        $febrian = [
            'name' => 'Febrian Rezki Hemeto',
            'nickname' => 'Febrian',
            'image' => asset('assets/images/Febrian.jpg'),
            'foods' => ['Ayam Goreng Kecap', 'Mie Kari', 'Jus Alpukat', 'Fruit Tea Blackcurrant'],
            'hobbies' => ['Main Game', 'Baca Komik', 'Nonton Miawaug Horror Game'],
            'social' => [
                'instagram' => 'https://instagram.com/kikihemeto?igshid=NGVhN2U2NjQ0Yg==',
                'facebook' => 'https://www.facebook.com/febrian.rezki.56?mibextid=ZbWKwL',
                'whatsapp' => 'https://wa.me/qr/DES5QZTQCL3BF1',
            ],
        ];

        $dela = [
            'name' => 'Nurdela Putri Otaha',
            'nickname' => 'Nurdela',
            'image' => asset('assets/images/Dela.jpg'),
            'foods' => ['Bakso', 'Mie Seblak', 'Jus Alpukat', 'Fruit Tea Blackcurrant'],
            'hobbies' => ['Menggambar', 'Membaca', 'Nonton Film Thriller'],
            'social' => [
                'instagram' => 'https://instagram.com/delaotaha?igshid=YTQwZjQ0NmI0OA==',
                'facebook' => 'https://www.facebook.com/della.otaha?mibextid=ZbWKwL',
                'whatsapp' => 'https://wa.me/qr/DES5QZTQCL3BF1',
            ],
        ];

        $gallery = [
            ['img' => asset('assets/images/1.jpg'), 'title' => 'Idul Adha 2023'],
            ['img' => asset('assets/images/2.jpg'), 'title' => 'Idul Fitri 2023'],
            ['img' => asset('assets/images/3.jpg'), 'title' => 'Malam Tahun Baru 2023'],
            ['img' => asset('assets/images/4.jpg'), 'title' => 'Idul Adha 2022'],
            ['img' => asset('assets/images/5.jpg'), 'title' => 'After Covid'],
            ['img' => asset('assets/images/6.jpg'), 'title' => 'After Covid'],
            ['img' => asset('assets/images/7.jpg'), 'title' => 'Ultah Aan'],
            ['img' => asset('assets/images/8.jpg'), 'title' => 'Cosplay Sugar Daddy'],
            ['img' => asset('assets/images/9.jpg'), 'title' => 'Ultah Ayang'],
        ];

        $music = [
            'title' => 'Risk It All - Bruno Mars',
            'artist' => 'Our Song ♥',
            'src' => asset('assets/music/bruno mars - risk it all.mp3'),
        ];

        return view('home', compact('startDate', 'story', 'febrian', 'dela', 'gallery', 'music'));
    }
}

