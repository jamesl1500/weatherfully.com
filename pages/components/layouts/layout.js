import Head from "next/head";
import Link from "next/link";

import Header from '../templates/Header';
import Footer from '../templates/Footer';

import Sidebar from '../templates/Sidebar';

export default function Layout({ children })
{
    return (
    <>
        <Head>
            <title>Weatherfully</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Weatherfully" />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        </Head>
        <div className="website">
            <Header />

            {children}

            <Footer />
        </div>
    </>
    );
}