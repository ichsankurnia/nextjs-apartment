import type { NextPage } from 'next'
import { ReactElement, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import showRoom from "./../public/images/show-room.png"
import logo from './../public/images/logo.png'
import Slider from "react-slick";
import { LazyLoadImage } from "react-lazy-load-image-component"
import useMobileView from '../hooks/useMobileView'

import slide1 from './../public/images/slideshow/1.jpg'
import slide2 from './../public/images/slideshow/2.jpg'
import slide3 from './../public/images/slideshow/3.jpg'
import slide4 from './../public/images/slideshow/4.jpg'
import slide5 from './../public/images/slideshow/5.jpg'
import slide6 from './../public/images/slideshow/6.jpg'
import slide7 from './../public/images/slideshow/7.jpg'

import announcImage from './../public/images/pengumuman.jpg'
import jakone from './../public/images/jakone.jpeg'
import ads1 from './../public/images/ads1.jpg'
import ads2 from './../public/images/ads2.jpeg'
import karir from './../public/images/karir.jpeg'
import kegiatan from './../public/images/kegiatan.jpeg'
import ppatr from './../public/images/ppatr.png'

import gallery1 from './../public/images/gallery/1.jpg'
import gallery2 from './../public/images/gallery/2.jpg'
import gallery3 from './../public/images/gallery/3.jpg'
import gallery4 from './../public/images/gallery/4.jpg'
import gallery5 from './../public/images/gallery/5.jpg'
import gallery6 from './../public/images/gallery/6.jpg'
import gallery7 from './../public/images/gallery/7.jpg'
import gallery8 from './../public/images/gallery/8.jpeg'
import gallery9 from './../public/images/gallery/9.jpeg'
import gallery10 from './../public/images/gallery/10.jpeg'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MetaTag from '../components/MetaTag'
import HomeLayout from '../layouts/HomeLayout'
import { NextPageWithLayout } from './_app'

const slideshow = [
  { href: '/', img: slide1, title: 'Lorem Ipsum', desc: 'Neque porro quisquam est qui dolorem ipsum' },
  { href: '/about', img: slide2, title: 'What is Lorem Ipsum?', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { href: '/gallery', img: slide3, title: 'Where does it come from?', desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text.' },
  { href: '/blog', img: slide4, title: 'Why do we use it?', desc: 'A reader will be distracted by the readable content of a page when looking at its layout' },
  { href: '/contact', img: slide5, title: 'Where can I get some?', desc: 'There are many variations of passages of Lorem Ipsum available' },
  { href: '/about', img: slide6, title: 'The standard Lorem Ipsum passage, used since the 1500s', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor' },
  { href: '/gallery', img: slide7, title: 'Lorem ipsum dolor sit amet', desc: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...' }
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

const karirs = [
  { thumbnail: karir, title: 'FrontEnd Developer', date: 'Selasa, 15 Februari 2022', description: 'Taman Rasuna Apartment, a company that engaged in Property, is currently seeking the best candidates to occupy the "FrontEnd Developer" position.' },
  { thumbnail: karir, title: 'BackEnd Developer', date: 'Selasa, 15 Februari 2022', description: 'Taman Rasuna Apartment, a company that engaged in Property, is currently seeking the best candidates to occupy the "BackEnd Developer" position.' },
  { thumbnail: karir, title: 'UI/UX Designer', date: 'Selasa, 15 Februari 2022', description: 'Taman Rasuna Apartment, a company that engaged in Property, is currently seeking the best candidates to occupy the "UI/UX Designer" position.' },
]

const kegiatans = [
  { thumbnail: kegiatan, title: 'Berbagi Kebahagiaan di Hari Raya Idul Fitri 1443 H Bersama Karyawan Badan Pengelola dan Rekanan Apartemen Taman Rasuna', date: 'Senin, 25 April 2022' },
  { thumbnail: kegiatan, title: 'Berbagi Kebahagiaan di Hari Raya Idul Fitri 1443 H Bersama Karyawan Badan Pengelola dan Rekanan Apartemen Taman Rasuna', date: 'Senin, 25 April 2022' },
  { thumbnail: kegiatan, title: 'Berbagi Kebahagiaan di Hari Raya Idul Fitri 1443 H Bersama Karyawan Badan Pengelola dan Rekanan Apartemen Taman Rasuna', date: 'Senin, 25 April 2022' },
  { thumbnail: kegiatan, title: 'Berbagi Kebahagiaan di Hari Raya Idul Fitri 1443 H Bersama Karyawan Badan Pengelola dan Rekanan Apartemen Taman Rasuna', date: 'Senin, 25 April 2022' },
]

const galleries = [
  { img: gallery1, title: 'APARTEMEN TAMAN RASUNA B' },
  { img: gallery2, title: 'APARTEMEN TAMAN RASUNA B' },
  { img: gallery3, title: 'APARTEMEN TAMAN RASUNA B' },
  { img: gallery4, title: 'APARTEMEN TAMAN RASUNA B' },
  { img: gallery5, title: 'APARTEMEN TAMAN RASUNA B' },
  { img: gallery6, title: 'APARTEMEN TAMAN RASUNA B' },
  { img: gallery7, title: 'APARTEMEN TAMAN RASUNA B' },
  { img: gallery8, title: 'APARTEMEN TAMAN RASUNA B' },
  { img: gallery9, title: 'APARTEMEN TAMAN RASUNA B' },
  { img: gallery10, title: 'APARTEMEN TAMAN RASUNA B' }
]

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: '20px' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: '20px', zIndex: 1 }}
      onClick={onClick}
    />
  );
}


const Home: NextPageWithLayout = () => {
  const [imageToView, setImageToView] = useState<any | null>(null)

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

  const { isMobile, windowWidth } = useMobileView()
  const limitCharAnnounce = isMobile ? 80 : 100

  return (
    <>
      <div className=''>

        {/* SLIDER */}
        <div className='bg-soft'>
          <div className=''>
            <Slider {...settings1}>
              {slideshow.map((item, key) =>
                <Link href={item.href} key={key}>
                  <div className='cursor-pointer relative'>
                    <img src={item.img} alt='' />
                    <div className='bg-black z-10 w-full h-full absolute inset-0 bg-opacity-20'></div>
                    <div className='absolute top-0 left-0 w-full h-full z-10'>
                      <div className='w-full md:w-[1100px] h-full mx-auto px-5 md:px-10 flex flex-col justify-center text-white'>
                        <h3 className='w-3/4 md:w-1/2 uppercase font-oswald md:text-4xl font-semibold'>{item.title}</h3>
                        <p className='w-3/4 md:w-1/2 mt-2 text-xs md:text-base'>{item.desc}</p>
                      </div>
                    </div>
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
            <div className={`mx-auto md:grid md:grid-cols-3 ${isMobile && 'space-y-5'}`}>
              {pengumuman.map((item, key) =>
                <Link key={key} href={item.slug}>
                  <button className='m-2 h-32 bg-white hover:bg-gray-200 rounded-lg shadow-lg flex p-5'>
                    <LazyLoadImage src={item.thumbnail} className='w-28' alt='' effect='blur' />
                    <div className='flex flex-col items-start text-left ml-3'>
                      <p className='text-gray-500'>{item.date}</p>
                      <h5 className=' text-chocolate-300 '>{item.title.length > limitCharAnnounce ? item.title.substring(0, limitCharAnnounce) + '...' : item.title}</h5>
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

        {/* JAKONE */}
        <div className='bg-red-800 p-5 py-8'>
          <div className='w-full md:w-[1100px] mx-auto flex flex-col md:flex-row justify-center items-center md:items-end text-white space-x-0 md:space-x-5 space-y-5 md:space-y-0'>
            <LazyLoadImage src={jakone} alt='' effect='blur' className='md:w-[34rem] w-full' />
            <div className='space-y-2'>
              <h6 className='text-lg font-semibold'>Video Cara Pembayaran IPL & Token Listrik</h6>
              <p>Berikut ini adalah video Tata Cara Pembayaran IPL & Token Listrik Apartemen Taman Rasuna melalui Aplikasi <span className='font-semibold'>JakOne Mobile</span></p>
              <video className='w-full h-[18.5rem]' controls>
                <source src="/video_dki.mp4" type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        <div className='bg-soft p-5 py-12'>
          <div className='w-full md:w-[1100px] mx-auto flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-7 space-y-5 md:space-y-0'>
            <LazyLoadImage src={ads1} alt='' effect='blur' className='rounded-md' />
            <LazyLoadImage src={ads2} alt='' effect='blur' className='rounded-md' />
          </div>
        </div>

        {/* KARIR */}
        <div className='bg-soft p-5 pb-10'>
          <div className='w-full md:w-[1100px] mx-auto space-y-5'>
            <h3 className='font-oswald mb-3 text-center'>KARIR TERBARU</h3>
            <div>
              {karirs.map((item, key) =>
                <div key={key} className='border-b py-3 border-chocolate-500 flex space-x-3 sm:space-x-5'>
                  <LazyLoadImage src={item.thumbnail} alt='' effect='blur' className='w-[7rem] cursor-pointer' />
                  <div>
                    <h5 className='font-oswald cursor-pointer hover:text-chocolate-100'>{item.title}</h5>
                    <p className='text-xs text-gray-400'>{item.date}</p>
                    <p>{item.description.substring(0, isMobile ? 50 : 150) + '... '}<span className='cursor-pointer text-chocolate-100 hover:text-chocolate-300'>Selengkapnya</span></p>
                  </div>
                </div>
              )}
            </div>
            <div className='flex justify-center'>
              <button className='border border-chocolate-100 text-chocolate-100 hover:bg-chocolate-100 hover:text-white py-1 px-3 rounded-md mt-3'>Lihat Semua</button>
            </div>
          </div>
        </div>

        {/* KEGIATAN */}
        <div className='p-5 pb-10 bg-black bg-opacity-40'>
          <div className='w-full md:w-[1100px] mx-auto space-y-5'>
            <h3 className='font-oswald mt-3 mb-5 text-center text-white'>KEGIATAN KAMI</h3>
            <div className='md:grid grid-cols-2 gap-5 space-y-6 md:space-y-0'>
              {kegiatans.map((item, key) =>
                <div key={key} className='w-full h-[23rem] md:h-[28rem] flex flex-col bg-soft rounded-2xl'>
                  <img src={item.thumbnail} alt='' className='w-full h-48 hover:opacity-70 md:h-64 cursor-pointer rounded-t-xl' />
                  <div className='text-xs text-gray-500 bg-gray-200 px-3 py-2'>{item.date}</div>
                  <div className='p-5'>
                    <h5>{item.title.substring(0, 120)}</h5>
                  </div>
                  <div className='bg-chocolate-500 text-white flex justify-end px-3 py-2.5 mt-auto cursor-pointer hover:bg-chocolate-100 rounded-b-xl'>
                    <p>Lihat Selengkapnya</p>
                  </div>
                </div>
              )}
            </div>
            <div className='flex justify-center'>
              <button className='border border-white text-white hover:bg-white hover:text-chocolate-500 py-1 px-3 rounded-md mt-3'>Lihat Semua</button>
            </div>
          </div>
        </div>

        {/* P3SRS-ATR */}
        <div className='bg-soft p-5 pt-10 pb-14'>
          <div className='w-full md:w-[1100px] mx-auto flex flex-col md:flex-row justify-center items-center md:items-end text-chocolate-900 space-x-0 md:space-x-5 space-y-5 md:space-y-0'>
            <LazyLoadImage src={ppatr} alt='' effect='blur' className='w-full' />
            <div className='flex flex-col text-left space-y-5 md:space-y-7 w-11/12'>
              <h6 className='text-xl font-oswald text-chocolate-100'>P3SRS-ATR ONLINE</h6>
              <p>P3SRS-ATR Online, sebuah portal website bagi Penghuni Apartemen Taman Rasuna. Sebagai sarana untuk mempermudah melakukan atau menyampaikan keluhan dan berbagai permohonan seperti renovasi, pemasukan dan pengeluaran barang, dan lain sebagainya, melalui berbagai device seperti Laptop, Desktop bahkan dapat dilakukan melalui Gadget Anda.</p>
              <p>Untuk mengunjungi halaman P3SRS-ATR Online, silahkan Anda klik tombol WILAYAH PENGHUNI di bawah ini.</p>
              <button className='bg-chocolate-500 hover:bg-chocolate-100 text-white px-5 py-2 rounded-md w-max'>Wilayah Penghuni</button>
            </div>
          </div>
        </div>

        {/* GALLERY */}
        <div className='bg-soft'>
          <div>
            <Slider {...{
              autoplay: true,
              autoplaySpeed: 2500,
              dots: false,
              infinite: true,
              speed: 700,
              slidesToShow: windowWidth > 1366 ? 5 : windowWidth > 768 ? 4 : 2,
              slidesToScroll: 1,
              nextArrow: <SampleNextArrow />,
              prevArrow: <SamplePrevArrow />
            }}>
              {galleries.map((item, key) =>
                <img src={item.img} alt='' key={key} className='cursor-pointer hover:opacity-70' onClick={() => setImageToView(item)} />
              )}
            </Slider>
          </div>
        </div>

        {/* MORE INFORMATION */}
        <div className='bg-chocolate-100 p-5'>
          <div className='w-full md:w-[1100px] mx-auto md:grid md:grid-cols-4 gap-x-4 px-5 md:px-0 space-y-5 md:space-y-0'>
            <div>
              <h5 className='font-oswald my-3'>P3SRS</h5>
              <ul className='list-disc list-inside'>
                <li className='cursor-pointer hover:text-chocolate-300'>Tentang Kami</li>
                <li className='cursor-pointer hover:text-chocolate-300'>Visi dan Misi</li>
                <li className='cursor-pointer hover:text-chocolate-300'>P3SRS ATR</li>
                <li className='cursor-pointer hover:text-chocolate-300'>BPATR</li>
                <li className='cursor-pointer hover:text-chocolate-300'>Anggaran Dasar dan Anggaran Rumah Tangga</li>
                <li className='cursor-pointer hover:text-chocolate-300'>Pengurus P3SRS</li>
              </ul>
            </div>
            <div>
              <h5 className='font-oswald my-3'>INFORMASI</h5>
              <ul className='list-disc list-inside'>
                <li className='cursor-pointer hover:text-chocolate-300'>Pengumuman</li>
                <li className='cursor-pointer hover:text-chocolate-300'>Kegiatan</li>
                <li className='cursor-pointer hover:text-chocolate-300'>Informasi Umum</li>
                <li className='cursor-pointer hover:text-chocolate-300'>Highlight</li>
                <li className='cursor-pointer hover:text-chocolate-300'>Galeri</li>
                <li className='cursor-pointer hover:text-chocolate-300'>Daftar Rekanan</li>
              </ul>
            </div>
            <div>
              <h5 className='font-oswald my-3'>BANTUAN</h5>
              <ul className='list-disc list-inside'>
                <li className='cursor-pointer hover:text-chocolate-300'>Cara Penggunaan Aplikasi Penghuni</li>
                <li className='cursor-pointer hover:text-chocolate-300'>Cara Mengajukan Permohonan</li>
                <li className='cursor-pointer hover:text-chocolate-300'>Informasi Umum</li>
                <li className='cursor-pointer hover:text-chocolate-300'>Cara Mengajukan Keluhan</li>
                <li className='cursor-pointer hover:text-chocolate-300'>Pusat Bantuan</li>
                <li className='cursor-pointer hover:text-chocolate-300'>FAQ</li>
              </ul>
            </div>
            <div>
              <h5 className='font-oswald my-3'>TATA TERTIB</h5>
              <ul className='list-disc list-inside'>
                <li className='cursor-pointer hover:text-chocolate-300'>Peraturan dan Tata Tertib Penghuni ATR</li>
                <li className='cursor-pointer hover:text-chocolate-300'>Pengguna Lobi dan Koridor</li>
                <li className='cursor-pointer hover:text-chocolate-300'>Ketentuan Renovasi</li>
                <li className='cursor-pointer hover:text-chocolate-300'>Fit Out</li>
                <li className='cursor-pointer hover:text-chocolate-300'>Tata Tertib Kolam Renang ATR</li>
                <li className='cursor-pointer hover:text-chocolate-300'>Peraturan Gubernur No.132/2018</li>
                <li className='cursor-pointer hover:text-chocolate-300'>Peraturan Gubernur No.133/2019</li>
                <li className='cursor-pointer hover:text-chocolate-300'>Peraturan Gubernur No.70/2021</li>
                <li className='cursor-pointer hover:text-chocolate-300'>Anggaran Dasar & Anggaran Rumah Tangga P3SRS ATR</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      {imageToView &&
        <div className='modal-form'>
          <div className='modal-form-outside' onClick={() => setImageToView(null)} />
          <div className='modal-form-content w-11/12 md:w-[70%] 2xl:w-6/12 flex flex-col items-center p-2 sm:p-5'>
            <LazyLoadImage src={imageToView.img} alt='' effect='blur' className='w-full mb-1 sm:mb-3' />
            <h6>{imageToView.title}</h6>
          </div>

        </div>
      }
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <HomeLayout title='Home'>
      {page}
    </HomeLayout>
  )
}

export default Home
