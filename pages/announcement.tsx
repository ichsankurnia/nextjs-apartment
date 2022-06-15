import Link from 'next/link';
import React, { ReactElement } from 'react';
import HomeLayout from '../layouts/HomeLayout';
import { NextPageWithLayout } from './_app';

const listPengumuman = [
	{ date: 'Senin, 30 Mei 2022', title: 'Hasil Pembukaan Dokumen Penawaran Peserta Lelang Barang Bekas Engineering Apartemen Taman Rasuna Nomor : 01/LELANG-GA-BPATR/IV/2022' },
	{ date: 'Senin, 30 Mei 2022', title: 'Hasil Pembukaan Dokumen Penawaran Peserta Lelang Barang Bekas Engineering Apartemen Taman Rasuna Nomor : 01/LELANG-GA-BPATR/IV/2022' },
	{ date: 'Senin, 30 Mei 2022', title: 'Hasil Pembukaan Dokumen Penawaran Peserta Lelang Barang Bekas Engineering Apartemen Taman Rasuna Nomor : 01/LELANG-GA-BPATR/IV/2022' },
	{ date: 'Senin, 30 Mei 2022', title: 'Hasil Pembukaan Dokumen Penawaran Peserta Lelang Barang Bekas Engineering Apartemen Taman Rasuna Nomor : 01/LELANG-GA-BPATR/IV/2022' },
	{ date: 'Senin, 30 Mei 2022', title: 'Hasil Pembukaan Dokumen Penawaran Peserta Lelang Barang Bekas Engineering Apartemen Taman Rasuna Nomor : 01/LELANG-GA-BPATR/IV/2022' },
	{ date: 'Senin, 30 Mei 2022', title: 'Hasil Pembukaan Dokumen Penawaran Peserta Lelang Barang Bekas Engineering Apartemen Taman Rasuna Nomor : 01/LELANG-GA-BPATR/IV/2022' },
	{ date: 'Senin, 30 Mei 2022', title: 'Hasil Pembukaan Dokumen Penawaran Peserta Lelang Barang Bekas Engineering Apartemen Taman Rasuna Nomor : 01/LELANG-GA-BPATR/IV/2022' },
	{ date: 'Senin, 30 Mei 2022', title: 'Hasil Pembukaan Dokumen Penawaran Peserta Lelang Barang Bekas Engineering Apartemen Taman Rasuna Nomor : 01/LELANG-GA-BPATR/IV/2022' },
	{ date: 'Senin, 30 Mei 2022', title: 'Hasil Pembukaan Dokumen Penawaran Peserta Lelang Barang Bekas Engineering Apartemen Taman Rasuna Nomor : 01/LELANG-GA-BPATR/IV/2022' },
	{ date: 'Senin, 30 Mei 2022', title: 'Hasil Pembukaan Dokumen Penawaran Peserta Lelang Barang Bekas Engineering Apartemen Taman Rasuna Nomor : 01/LELANG-GA-BPATR/IV/2022' },
	{ date: 'Senin, 30 Mei 2022', title: 'Hasil Pembukaan Dokumen Penawaran Peserta Lelang Barang Bekas Engineering Apartemen Taman Rasuna Nomor : 01/LELANG-GA-BPATR/IV/2022' },
	{ date: 'Senin, 30 Mei 2022', title: 'Hasil Pembukaan Dokumen Penawaran Peserta Lelang Barang Bekas Engineering Apartemen Taman Rasuna Nomor : 01/LELANG-GA-BPATR/IV/2022' },
	{ date: 'Senin, 30 Mei 2022', title: 'Hasil Pembukaan Dokumen Penawaran Peserta Lelang Barang Bekas Engineering Apartemen Taman Rasuna Nomor : 01/LELANG-GA-BPATR/IV/2022' },
	{ date: 'Senin, 30 Mei 2022', title: 'Hasil Pembukaan Dokumen Penawaran Peserta Lelang Barang Bekas Engineering Apartemen Taman Rasuna Nomor : 01/LELANG-GA-BPATR/IV/2022' },
	{ date: 'Senin, 30 Mei 2022', title: 'Hasil Pembukaan Dokumen Penawaran Peserta Lelang Barang Bekas Engineering Apartemen Taman Rasuna Nomor : 01/LELANG-GA-BPATR/IV/2022' },
]

const Announcement: NextPageWithLayout = () => {
	return (
		<div className='bg-soft'>
			<div className='w-full md:w-[1100px] mx-auto px-5 py-10 flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0'>
				<div className='bg-[url(/images/separator-light.png)] bg-repeat-x bg-left-bottom pb-4 w-full'>
					<h1 className='font-oswald uppercase text-3xl md:text-4xl'>Pengumuman</h1>
				</div>
			</div>
			<div className='w-full md:w-[1100px] mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-3'>
				{listPengumuman.map((item, key) =>
					<div key={key}>
						<div className='bg-gray-300 px-4 py-1 flex items-center justify-between rounded-t-md'>
							<p className='font-oswald text-sm'>{item.date}</p>
							<i className="fa-solid fa-bullhorn flex justify-center items-center bg-chocolate-300 text-white rounded-full p-2"></i>
						</div>
						<div className='bg-gray-200 flex flex-col p-4 rounded-b-md text-chocolate-300'>
							<p className='text-gray-500'>Pengumuman</p>
							<Link href={`/pengumuman`}>
								<h3 className='hover:text-chocolate-100 cursor-pointer'>{item.title.length > 140 ? item.title.substring(0, 140) + '...' : item.title}</h3>
							</Link>
						</div>
					</div>
				)}
			</div>
			<div className="w-full md:w-[1100px] mx-auto px-5 py-3 flex items-center justify-between">
				<div className="flex-1 flex justify-between sm:hidden">
					<a
						href="#"
						className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
					>
						Previous
					</a>
					<a
						href="#"
						className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
					>
						Next
					</a>
				</div>
				<div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between mt-5">
					<div>
						<p className="text-sm text-gray-700">
							Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
							<span className="font-medium">97</span> results
						</p>
					</div>
					<div>
						<nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
							<a href="#"
								className="relative inline-flex items-center px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
							>
								<span className="sr-only">Previous</span>
								<i className="fa-solid fa-chevron-left"></i>
							</a>
							<a href="#"
								aria-current="page"
								className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
							>
								1
							</a>
							<a href="#"
								className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
							>
								2
							</a>
							<a href="#"
								className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
							>
								3
							</a>
							<span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
								...
							</span>
							<a href="#"
								className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
							>
								8
							</a>
							<a href="#"
								className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
							>
								9
							</a>
							<a href="#"
								className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
							>
								10
							</a>
							<a href="#"
								className="relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
							>
								<span className="sr-only">Next</span>
								<i className="fa-solid fa-chevron-right"></i>
							</a>
						</nav>
					</div>
				</div>
			</div>
		</div>
	);
}

Announcement.getLayout = function getLayout(page: ReactElement) {
	return (
		<HomeLayout title='Announcement'>
			{page}
		</HomeLayout>
	)
}

export default Announcement;