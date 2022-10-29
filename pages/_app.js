import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.scss'
import '../styles/components/Header.module.css'

import Layout from "./components/layouts/layout"

import {useEffect} from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
  },[])

  // Check location
  

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
