import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import showRoom from "./../assets/images/show-room.png"
import logo from './../assets/images/logo.png'
import Slider from "react-slick";
import { LazyLoadImage } from "react-lazy-load-image-component"
import useMobileView from '../hooks/useMobileView'

import slide1 from './../assets/images/slideshow/1.jpg'
import slide2 from './../assets/images/slideshow/2.jpg'
import slide3 from './../assets/images/slideshow/3.jpg'
import slide4 from './../assets/images/slideshow/4.jpg'
import slide5 from './../assets/images/slideshow/5.jpg'
import slide6 from './../assets/images/slideshow/6.jpg'
import slide7 from './../assets/images/slideshow/7.jpg'

import announcImage from './../assets/images/pengumuman.jpg'
import jakone from './../assets/images/jakone.jpeg'
import ads1 from './../assets/images/ads1.jpg'
import ads2 from './../assets/images/ads2.jpeg'

const slideshow = [
  { href: '/', img: slide1 },
  { href: '/about', img: slide2 },
  { href: '/gallery', img: slide3 },
  { href: '/blog', img: slide4 },
  { href: '/contact', img: slide5 },
  { href: '/about', img: slide6 },
  { href: '/gallery', img: slide7 }
]

const pengumuman = [
  { slug: '/', title: 'Pembukaan Dokumen Administrasi Peserta Tender Alih Daya Jasa Kebersihan Apartemen Taman Rasuna Nomor : 01/TENDER-BPATR/IV/2022', date: 'Kamis, 19 Mei 2022', thumbnail: announcImage },
  { slug: '/', title: 'Pembukaan Dokumen Administrasi Peserta Tender Alih Daya Jasa Kebersihan Apartemen Taman Rasuna Nomor : 01/TENDER-BPATR/IV/2022', date: 'Kamis, 19 Mei 2022', thumbnail: announcImage },
  { slug: '/', title: 'Pembukaan Dokumen Administrasi Peserta Tender Alih Daya Jasa Kebersihan Apartemen Taman Rasuna Nomor : 01/TENDER-BPATR/IV/2022', date: 'Kamis, 19 Mei 2022', thumbnail: announcImage },
  { slug: '/', title: 'Pembukaan Dokumen Administrasi Peserta Tender Alih Daya Jasa Kebersihan Apartemen Taman Rasuna Nomor : 01/TENDER-BPATR/IV/2022', date: 'Kamis, 19 Mei 2022', thumbnail: announcImage },
  { slug: '/', title: 'Pembukaan Dokumen Administrasi Peserta Tender Alih Daya Jasa Kebersihan Apartemen Taman Rasuna Nomor : 01/TENDER-BPATR/IV/2022', date: 'Kamis, 19 Mei 2022', thumbnail: announcImage },
  { slug: '/', title: 'Pembukaan Dokumen Administrasi Peserta Tender Alih Daya Jasa Kebersihan Apartemen Taman Rasuna Nomor : 01/TENDER-BPATR/IV/2022', date: 'Kamis, 19 Mei 2022', thumbnail: announcImage },
  { slug: '/', title: 'Pembukaan Dokumen Administrasi Peserta Tender Alih Daya Jasa Kebersihan Apartemen Taman Rasuna Nomor : 01/TENDER-BPATR/IV/2022', date: 'Kamis, 19 Mei 2022', thumbnail: announcImage },
  { slug: '/', title: 'Pembukaan Dokumen Administrasi Peserta Tender Alih Daya Jasa Kebersihan Apartemen Taman Rasuna Nomor : 01/TENDER-BPATR/IV/2022', date: 'Kamis, 19 Mei 2022', thumbnail: announcImage },
]


const Home: NextPage = () => {
  const [navMobile, showNavMobile] = useState(false)

  const settings1 = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <></>,
    prevArrow: <></>
  };

  const settings2 = {
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const isMobile = useMobileView()
  const limitCharAnnounce = isMobile? 80: 100

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-[url(./../assets/images/bg.jpg)] bg-cover bg-fixed min-h-screen flex flex-col text-chocolate-900'>

        {/* HEADER */}
        <header className='p-5 sm:p-10 bg-chocolate-900 flex items-center justify-center'>

          <nav className='flex item-center justify-between w-full md:w-[1100px]'>
            <Link href="/">
              <div>
                <img src={logo} className='w-64 sm:w-80' />
              </div>
            </Link>
            <ul className='hidden md:flex justify-center items-center text-white font-oswald uppercase space-x-4'>
              <li className='text-chocolate-100 hover:text-chocolate-100'>
                <Link href='/'>Home</Link>
              </li>
              <li className='hover:text-chocolate-100'>
                <Link href='/about'>About</Link>
              </li>
              <li className='hover:text-chocolate-100'>
                <Link href='/gallery'>Gallery</Link>
              </li>
              <li className='hover:text-chocolate-100'>
                <Link href='/blog'>Blog</Link>
              </li>
              <li className='hover:text-chocolate-100'>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
          </nav>

          <div className='md:hidden -mr-1 flex'>
            <button onClick={() => showNavMobile(!navMobile)}
              className='bg-chocolate-500 inline-flex items-center justify-center p-2 rounded-md text-chocolate-100 hover:text-white hover:bg-chocolate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-200 focus:dark:ring-offset-gray-800 focus:ring-chocolate-500'
            >
              {navMobile ?
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                :
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              }
            </button>
          </div>
        </header>

        <div className=''>

          {/* SLIDER */}
          <div className='bg-soft'>
          <div className='border-b-4 border-t border-chocolate-900 p-0'>
            <Slider {...settings1}>
              {slideshow.map((item, key) =>
                <Link href={item.href} key={key}>
                  <div className='cursor-pointer'>
                    <LazyLoadImage src={item.img} alt='' effect='blur' />
                  </div>
                </Link>
              )}
            </Slider>
          </div>
          <div className='bg-chocolate-900 text-white mx-auto w-full lg:w-[1100px] flex flex-col justify-center items-center px-5 py-8'>
            <h3 className='font-oswald pb-2 px-2 border-b-2 border-white'>HIGHLIGHT</h3>
            <div className='w-full px-5 sm:px-8 mt-5 mb-8'>
              <Slider {...settings2}>
                <div className='text-center text-gray-300'>
                  <p>PENGUMUMAN</p>
                  <Link href='/'>
                    <div className='uppercase text-xl text-white text-center cursor-pointer hover:text-chocolate-300'>
                      HIMBAUAN UNTUK WARGA YANG AKAN MUDIK/MENINGGALKAN UNIT APARTEMEN NOMOR : TR-157/IV/2022
                    </div>
                  </Link>
                  <p>Senin, 22 April 2019</p>
                </div>
                <div className='text-center text-gray-300'>
                  <p>PENGUMUMAN</p>
                  <Link href='/'>
                    <div className='uppercase text-xl text-white text-center cursor-pointer hover:text-chocolate-300'>
                      LOGIN WEBSITE
                    </div>
                  </Link>
                  <p>Senin, 22 April 2019</p>
                </div>
              </Slider>
            </div>
            <button className='border border-white hover:bg-white hover:text-chocolate-900 py-1 px-3 rounded-md'>Lihat Semua</button>
          </div>
          </div>

          {/* Pengumuman */}
          <div className='py-10 px-5 sm:px-10 bg-soft'>
            <div className='flex flex-col items-center border-b border-chocolate-900'>
              <i className="fa-solid fa-bullhorn text-4xl bg-chocolate-100 text-white rounded-full w-16 h-16 flex justify-center items-center"></i>
              <h3 className='font-oswald my-3'>PENGUMUMAN</h3>
            </div>
            <div className='flex flex-col items-center w-full mt-3'>
              <div className={`mx-auto md:grid md:grid-cols-3 ${isMobile&&'space-y-5'}`}>
                {pengumuman.map((item, key) =>
                  <Link key={key} href={item.slug}>
                    <button className='m-2 h-32 bg-white hover:bg-gray-200 rounded-lg shadow-lg flex p-5'>
                      <LazyLoadImage src={item.thumbnail} className='w-28' alt='' effect='blur' />
                      <div className='flex flex-col items-start text-left ml-3'>
                        <p className='text-gray-500'>{item.date}</p>
                        <h5 className=' text-chocolate-300 '>{item.title.length > limitCharAnnounce? item.title.substring(0, limitCharAnnounce) + '...': item.title}</h5>
                      </div>
                    </button>
                  </Link>
                )}
              </div>
            <button className='border border-chocolate-100 text-chocolate-100 hover:bg-chocolate-100 hover:text-white py-1 px-3 rounded-md mt-5'>Lihat Semua</button>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center h-44 bg-soft bg-opacity-80'>
            <h3 className='font-oswald text-chocolate-500 text-xl text-center'>PANDUAN PEMBAYARAN TAGIHAN APARTEMEN TAMAN RASUNA</h3>
            <button className='border border-chocolate-500 text-chocolate-500 hover:bg-chocolate-500 hover:text-white py-1 px-8 rounded-md mt-5'>Lihat</button>
          </div>

          <div className='bg-red-800 p-5 py-7'>
              <div className='w-full sm:w-[1100px] mx-auto flex flex-col sm:flex-row justify-center items-center sm:items-end text-white space-x-0 sm:space-x-5 space-y-5 sm:space-y-0'>
                <LazyLoadImage src={jakone} alt='' effect='blur' className='sm:w-[32rem] w-full' />
                <div>
                  <h6 className='text-lg font-semibold'>Video Cara Pembayaran IPL & Token Listrik</h6>
                  <p>Berikut ini adalah video Tata Cara Pembayaran IPL & Token Listrik Apartemen Taman Rasuna melalui Aplikasi <span className='font-semibold'>JakOne Mobile</span></p>
                  <video className='w-full h-[18.5rem]' controls>
                    <source src="/video_dki.mp4" type='video/mp4' />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
          </div>
        </div>

        <div className='bg-soft p-5 py-12'>
            <div className='w-full sm:w-[1100px] mx-auto flex flex-col sm:flex-row justify-center items-center space-x-0 sm:space-x-7 space-y-5 sm:space-y-0'>
                <LazyLoadImage src={ads1} alt='' effect='blur' className='rounded-md' />
                <LazyLoadImage src={ads2} alt='' effect='blur' className='rounded-md' />
            </div>
        </div>


        {/* FOOTER */}
        <footer className='bg-chocolate-100 border-t border-white py-5 sm:p-10 flex justify-center items-center mt-auto'>
          <div className='w-full md:w-[1100px]'>

            <div className='flex md:flex-row flex-col space-y-5 md:space-y-0 bg-[url(./../assets/images/separator-dark.png)] bg-repeat-x bg-left-bottom text-chocolate-900 pb-5'>

              <div className="w-full pr-5 px-5 md:px-0">
                <h4 className='uppercase font-oswald mb-3'>Visit our Showroom</h4>
                <LazyLoadImage src={showRoom} />
                <p>
                  4885 Wilson Street<br /> Victorville, CA 92392<br /><br /> 760-962-9541<br /><br /> <a href="index.html">info@carvedcreations.com</a>
                </p>
              </div>

              <div className='w-full px-5 bg-[url(./../assets/images/separator-dark.png)] md:bg-[url(./../assets/images/separator-dark-vertical.png)] bg-repeat-x md:bg-repeat-y bg-left-top'>
                <h4 className='uppercase font-oswald mb-3 pt-5 md:pt-0'>Recent Blog Posts</h4>
                <ul className="posts space-y-2">
                  <li>
                    <span className="time">Apr 16</span>
                    <p>
                      <a href="blog.html">The Carving Master &amp; Owner</a> {"Maybe you’re looking for something diferent, something special."}
                    </p>
                  </li>
                  <li>
                    <span className="time">Apr 15</span>
                    <p>
                      <a href="blog.html">5 Star Hotels We Supply</a> And we love the challenge of doing something diferent and something special.
                    </p>
                  </li>
                  <li>
                    <span className="time">Apr 14</span>
                    <p>
                      <a href="blog.html">How To Pick The Right Furniture For You</a> {"What’s more, they’re absolutely free! You can do a lot with them."}
                    </p>
                  </li>
                </ul>
              </div>

              <div className='w-full pl-5 pr-5 md:pr-0 bg-[url(./../assets/images/separator-dark.png)] md:bg-[url(./../assets/images/separator-dark-vertical.png)] bg-repeat-x md:bg-repeat-y bg-left-top'>
                <form action="#" method="post" className='bg-[url(./../assets/images/separator-dark.png)] bg-repeat-x bg-left-bottom pb-8 mb-5 flex flex-col'>
                  <h4 className='uppercase font-oswald mb-3 pt-5 md:pt-0'>Join Our Newsletter</h4>
                  <input type="text" placeholder="Enter Email Address Here For Updates..." className='text-chocolate-500 px-2 py-0.5 outline-none border-[3px] rounded-md border-chocolate-300 mb-2 w-full' />
                  <input type="submit" value="Sign up" className="cursor-pointer bg-chocolate-500 hover:bg-chocolate-300 text-white w-20 py-1 rounded-md" />
                </form>
                <div id="connect">
                  <h4 className='mb-2'>Social Media</h4>
                  <a href="http://freewebsitetemplates.com/go/facebook/" target="_blank" className="facebook"></a>
                  <a href="http://freewebsitetemplates.com/go/googleplus/" target="_blank" className="googleplus"></a>
                  <a href="http://freewebsitetemplates.com/go/twitter/" target="_blank" className="twitter"></a>
                </div>
              </div>

            </div>

            <div className='flex justify-between items-center font-oswald text-chocolate-300 uppercase mt-5 px-2 text-[8px] md:text-xs'>
              <p>
                © Copyright 2023. All Rights Reserved.
              </p>

              <ul className="flex space-x-2">
                <li className='hover:text-chocolate-900'>
                  <Link href='/'>Home</Link>
                </li>
                <li className='hover:text-chocolate-900'>
                  <Link href='/about'>About</Link>
                </li>
                <li className='hover:text-chocolate-900'>
                  <Link href='/gallery'>Gallery</Link>
                </li>
                <li className='hover:text-chocolate-900'>
                  <Link href='/blog'>Blog</Link>
                </li>
                <li className='hover:text-chocolate-900'>
                  <Link href='/contact'>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>

      </main>
    </>
  )
}

export default Home
