import Link from 'next/link';
import { Router, useRouter } from 'next/router';
import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Sidebar from './Sidebar';

type Props = {};

const Header: React.FC<Props> = ({ }) => {
	const [searchText, setSearchText] = useState('')

	const { asPath } = useRouter()

	return (
		<>
			{/* HEADER */}
			<header className='bg-chocolate-900 flex flex-col items-center justify-center pt-10'>

				<div className='flex flex-col md:flex-row item-center justify-between w-full md:w-[1100px] px-10'>
					<Link href="/">
						<div className='flex justify-center items-start cursor-pointer'>
							<LazyLoadImage effect='blur' alt='' src='/images/logo.png' className='w-72 sm:w-80' />
						</div>
					</Link>
					<div className='flex flex-col items-center md:items-end mt-5 md:mt-0'>
						<button className='border border-chocolate-100 text-chocolate-900 hover:text-chocolate-100 bg-chocolate-100 hover:bg-transparent py-1 px-3 rounded-md mb-3.5'>Wilayah Penghuni</button>
						<form className='w-full'>
							<label className="relative block w-full">
								<span className="sr-only">Search</span>
								<span className="absolute inset-y-0 left-3 flex items-center">
									{searchText ?
										<i className="fa-solid fa-xmark text-gray-400 text-lg cursor-pointer" onClick={() => setSearchText('')} />
										:
										<i className="fa-solid fa-magnifying-glass text-gray-400 text-lg" />
									}
								</span>
								<input className="placeholder-gray-400 text-white block bg-transparent rounded-lg border border-slate-400 py-1.5 pl-10 w-full md:w-max pr-3 shadow-sm focus:outline-none focus:border-chocolate-100"
									type="text" name="search" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder={"Search for anything..."}
								/>
							</label>
						</form>
					</div>
				</div>

				<ul className='hidden md:flex w-full md:w-[1100px] text-gray-400 font-oswald space-x-4 mt-5 px-10 border-b border-gray-700'>
					<li className={`${asPath==='/'? 'text-chocolate-100 border-chocolate-100' : 'border-transparent'} hover:text-white inline-flex p-2.5 border-b-2 hover:border-white`}>
						<Link href='/'>Beranda</Link>
					</li>
					<li className={`${asPath==='/about'? 'text-chocolate-100 border-chocolate-100' : 'border-transparent'} hover:text-white inline-flex p-2.5 border-b-2 hover:border-white`}>
						<Link href='/about'>Tentang Kami</Link>
					</li>
					<li className={`${asPath==='/announcement'? 'text-chocolate-100 border-chocolate-100' : 'border-transparent'} hover:text-white inline-flex p-2.5 border-b-2 hover:border-white`}>
						<Link href='/announcement'>Pengumuman</Link>
					</li>
					<li className={`${asPath==='/blog'? 'text-chocolate-100 border-chocolate-100' : 'border-transparent'} hover:text-white inline-flex p-2.5 border-b-2 hover:border-white`}>
						<Link href='/blog'>Kegiatan</Link>
					</li>
					<li className={`${asPath==='/information'? 'text-chocolate-100 border-chocolate-100' : 'border-transparent'} hover:text-white inline-flex p-2.5 border-b-2 hover:border-white`}>
						<Link href='/information'>Informasi</Link>
					</li>
					<li className={`${asPath==='/partner'? 'text-chocolate-100 border-chocolate-100' : 'border-transparent'} hover:text-white inline-flex p-2.5 border-b-2 hover:border-white`}>
						<Link href='/partner'>Rekanan</Link>
					</li>
					<li className={`${asPath==='/tender'? 'text-chocolate-100 border-chocolate-100' : 'border-transparent'} hover:text-white inline-flex p-2.5 border-b-2 hover:border-white`}>
						<Link href='/tender'>Tender</Link>
					</li>
					<li className={`${asPath==='/career'? 'text-chocolate-100 border-chocolate-100' : 'border-transparent'} hover:text-white inline-flex p-2.5 border-b-2 hover:border-white`}>
						<Link href='/career'>Karir</Link>
					</li>
					<li className={`${asPath==='/faq'? 'text-chocolate-100 border-chocolate-100' : 'border-transparent'} hover:text-white inline-flex p-2.5 border-b-2 hover:border-white`}>
						<Link href='/faq'>FAQ</Link>
					</li>
					<li className={`${asPath==='/sell-rent'? 'text-chocolate-100 border-chocolate-100' : 'border-transparent'} hover:text-white inline-flex p-2.5 border-b-2 hover:border-white`}>
						<Link href='/sell-rent'>Jual/sewa</Link>
					</li>
					<li className={`${asPath==='/contact'? 'text-chocolate-100 border-chocolate-100' : 'border-transparent'} hover:text-white inline-flex p-2.5 border-b-2 hover:border-white`}>
						<Link href='/contact'>Kontak</Link>
					</li>
				</ul>

				<Sidebar />

			</header>
		</>
	);
}

export default Header;