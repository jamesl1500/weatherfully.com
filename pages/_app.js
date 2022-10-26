import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'
import '../styles/components/Header.module.css'

import Head from "next/head";
import Layout from "./components/layouts/layout"

import Header from './components/templates/Header'
import Footer from './components/templates/Footer'

import {useEffect} from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
  },[])

  return (
    <Layout>
      <Head>
        <title>Weatherfully</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Weatherfully" />
      </Head>
  
      <Header />
        <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}

export default MyApp
