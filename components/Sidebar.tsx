import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import logo from './../assets/images/logo.png'

type Props = {};

const Sidebar: React.FC<Props> = ({ }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const trigger = useRef<any>(null);
    const sidebar = useRef<any>(null);

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }: any) => {
            if (!sidebar.current || !trigger.current) return;
            if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
            setSidebarOpen(false);
            console.log('TARGET', target)
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }: any) => {
            if (!sidebarOpen || keyCode !== 27) return;
            setSidebarOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    return (
        <>
            <div className={`z-20 w-full mt-3 md:mt-0 font-oswald`}>

                {/* SIDEBAR MOBILE */}
                <div className={`fixed inset-0 bg-black bg-opacity-60 z-40 md:hidden md:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden="true" onClick={() => setSidebarOpen(false)}></div>
                <div className='md:hidden sticky top-0 w-full h-12 py-8 px-5 flex items-center justify-between shadow z-30'>
                    <button onClick={() => setSidebarOpen(!sidebarOpen)}
                        className='bg-chocolate-500 inline-flex items-center justify-center p-2 rounded-md text-chocolate-100 hover:text-white hover:bg-chocolate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-200 focus:dark:ring-offset-gray-800 focus:ring-chocolate-500'
                    >
                        {sidebarOpen ?
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            :
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        }
                    </button>
                    {/* <LazyLoadImage src={logo} alt='' effect='blur' className='w-72' /> */}
                    <h5 className='text-oswald text-white'>MENU</h5>
                </div>


                <div id="sidebar" ref={sidebar}
                    className={`absolute md:hidden z-40 left-0 top-0 transform transition-all duration-700 ease-in-out
                    ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'} w-64 `}
                >
                    <div className={`overflow-x-hidden flex flex-col text-white text-left px-5`}>
                        <Link href='/'>
                            <div className='w-full px-4 mb-5 mt-6'>
                                <LazyLoadImage src={logo} alt='' effect='blur' />
                            </div>
                        </Link>

                        <ul className='flex flex-col text-gray-300'>
                            <li className='text-chocolate-100 inline-flex p-2.5 border-b-2 border-chocolate-100'>
                                <Link href='/'>Beranda</Link>
                            </li>
                            <li className='hover:text-white inline-flex p-2.5 border-b-2 border-transparent hover:border-white'>
                                <Link href='/about'>Tentang Kami</Link>
                            </li>
                            <li className='hover:text-white inline-flex p-2.5 border-b-2 border-transparent hover:border-white'>
                                <Link href='/gallery'>Pengumuman</Link>
                            </li>
                            <li className='hover:text-white inline-flex p-2.5 border-b-2 border-transparent hover:border-white'>
                                <Link href='/blog'>Kegiatan</Link>
                            </li>
                            <li className='hover:text-white inline-flex p-2.5 border-b-2 border-transparent hover:border-white'>
                                <Link href='/contact'>Informasi</Link>
                            </li>
                            <li className='hover:text-white inline-flex p-2.5 border-b-2 border-transparent hover:border-white'>
                                <Link href='/contact'>Rekanan</Link>
                            </li>
                            <li className='hover:text-white inline-flex p-2.5 border-b-2 border-transparent hover:border-white'>
                                <Link href='/contact'>Tender</Link>
                            </li>
                            <li className='hover:text-white inline-flex p-2.5 border-b-2 border-transparent hover:border-white'>
                                <Link href='/contact'>Karir</Link>
                            </li>
                            <li className='hover:text-white inline-flex p-2.5 border-b-2 border-transparent hover:border-white'>
                                <Link href='/contact'>FAQ</Link>
                            </li>
                            <li className='hover:text-white inline-flex p-2.5 border-b-2 border-transparent hover:border-white'>
                                <Link href='/contact'>Jual/sewa</Link>
                            </li>
                            <li className='hover:text-white inline-flex p-2.5 border-b-2 border-transparent hover:border-white'>
                                <Link href='/contact'>Kontak</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Sidebar;