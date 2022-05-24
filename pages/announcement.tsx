import React, { ReactElement } from 'react';
import HomeLayout from '../layouts/HomeLayout';
import { NextPageWithLayout } from './_app';

const Announcement: NextPageWithLayout = () => {
    return (
		<div className='bg-soft'>
			<div className='w-full md:w-[1100px] mx-auto px-5 py-10 flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0'>
                <div className='bg-[url(/images/separator-light.png)] bg-repeat-x bg-left-bottom pb-4 w-full'>
                    <h1 className='font-oswald uppercase text-3xl md:text-4xl'>Pengumuman</h1>
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