import Head from 'next/head';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

type Props = {
    icon?: string,
    themeColor?: string,
    description?: string,
    keywords?: string,
    appleTouchIcon?: string,
    title?: string,
};

const HomeLayout: React.FC<Props> = ({ icon, themeColor, title, description, keywords, appleTouchIcon, children }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <link rel="icon" href={icon || "/favicon.ico"} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="theme-color" content={themeColor || "#e2b241"} />
                <meta name="description" content={description || "Apartment Web Apps"} />
                <meta name='keywords' content={keywords || 'Apartment, RealEstate, Rent, Buy, NextJS, ReactJS, Typescript, TailwindCSS'} />
                <meta name='author' content='yosangi' />
                <link rel="apple-touch-icon" href={appleTouchIcon || "/favicon.ico"} />

                <title>{'NextApp | ' + title || 'Create Next App'}</title>
            </Head>

            <div className='bg-[url(/images/bg1.jpg)] bg-cover bg-fixed min-h-screen flex flex-col text-chocolate-900'>
                <Header />
                {children}
                <Footer />
            </div>
        </>
    );
}

export default HomeLayout;