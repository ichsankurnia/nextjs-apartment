import { ReactElement } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import HomeLayout from '../layouts/HomeLayout';
import { NextPageWithLayout } from './_app';

const About: NextPageWithLayout = () => {
	return (
		<div className='bg-soft'>
			<div className='w-full md:w-[1100px] mx-auto px-5 py-10 flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0'>
				<div className='w-full'>
					<div className='bg-[url(/images/separator-light.png)] bg-repeat-x bg-left-bottom pb-4'>
						<h1 className='font-oswald uppercase text-3xl md:text-4xl'>Tentang Kami</h1>
					</div>
					<div className='pt-5'>
						<p>Apartemen Taman Rasuna adalah salah satu properti berkembang yang terkenal di area Kuningan, Jakarta Selatan. Adanya 13 tower yang dilengkapi dengan fasilitas yang sesuai dengan kebutuhan seperti taman-taman indah, jogging track, kolam renang, lapangan basket, lapangan tenis, dan taman bermain anak-anak membuat Apartemen Taman Rasuna mempunyai privasi maksimal, kenyamanan dan keamanan tinggi serta memiliki tingkat hunian hampir 100% dan ditambah lagi mudah diakses dari jalur utama area Kuningan.</p>
						<br />
						<p>Pengelolaan Apartemen Taman Rasuna bersifat Strata Title dengan luas Net Lettable Area (NLA) 266.477,17 m2. Dalam struktur organisasi pelaksanaan kinerja pengelolaan Apartemen Taman Rasuna dilakukan oleh P3SRS ATR (Perhimpunan Pemilik dan Penghuni Satuan Rumah Susun Apartemen Taman Rasuna) yang kemudian menunjuk BPATR (Badan Pengelola Apartemen Taman Rasuna) untuk melakukan pelaksanaan operasional harian dalam melakukan service dan maintenance Apartemen Taman Rasuna.</p>
					</div>
				</div>
				<div className='flex md:p-5 rounded-lg'>
					<LazyLoadImage effect='blur' alt='' src='/images/about.jpeg' className='shadow-lg rounded-lg' />
				</div>
			</div>
		</div>
	);
}

About.getLayout = function getLayout(page: ReactElement) {
	return (
		<HomeLayout title='About Us'>
			{page}
		</HomeLayout>
	)
}

export default About;