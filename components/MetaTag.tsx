import Head from 'next/head';
import React from 'react';

type Props = {
    icon?: string,
    themeColor?: string,
    title?: string,
    description?: string,
    keywords?: string,
    appleTouchIcon?: string
};

const MetaTag: React.FC<Props> = ({ icon, themeColor, title, description, keywords, appleTouchIcon }) => {
    return (
        <Head>
            <meta charSet="utf-8" />
            <link rel="icon" href={icon || "/favicon.ico"} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content={themeColor || "#e2b241"} />
            <meta name="description" content={description || "Apartment Web Apps"} />
            <meta name='keywords' content={keywords || 'Apartment, RealEstate, Rent, Buy, NextJS, ReactJS'} />
            <meta name='author' content='yosangi' />
            <link rel="apple-touch-icon" href={appleTouchIcon || "/favicon.ico"} />

            <title>{'NextApp | ' + title || 'Create Next App'}</title>
        </Head>
    );
}

export default MetaTag;