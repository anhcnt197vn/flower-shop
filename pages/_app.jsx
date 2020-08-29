import React, { useEffect } from 'react'
import App from 'next/app'
import Head from 'next/head'
import "./assets/css/carousel.min.css"
import { LoginStore } from '../src/hooks/useLogin'

function MyApp({ Component, pageProps }) {
  const listenToScroll = () => {
    const sticky_id = document.getElementById('sticky-header-with-topbar')  
    const height = document.documentElement.scrollTop
    if (height < 150 && sticky_id && sticky_id.classList) {
      sticky_id.classList.remove("scroll-header");
    } else if (sticky_id && sticky_id.classList) {
      sticky_id.classList.add("scroll-header");
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll)

    return () => {
      window.removeEventListener('scroll', listenToScroll)
    }
  }, [])

  return (
    <React.Fragment>
      <Head>
        <link rel="shortcut icon" type="image/x-icon" href="/static/images/favicon.ico" />
        <link rel="apple-touch-icon" href="static/apple-touch-icon.png" />
        <link rel="stylesheet" href='/static/css/bootstrap.min.css' />
        <link rel="stylesheet" href='/static/css/owl.carousel.min.css' />
        <link rel="stylesheet" href='/static/css/owl.theme.default.min.css' />
        <link rel="stylesheet" href='/static/css/core.css' />
        <link rel="stylesheet" href='/static/css/shortcode/shortcodes.css' />
        <link rel="stylesheet" href='/static/style.css' />
        <link rel="stylesheet" href='/static/css/responsive.css' />
        <link rel="stylesheet" href='/static/css/custom.css' />
        <script src="/static/js/vendor/modernizr-3.5.0.min.js"></script>
      </Head>
      <LoginStore>
        <Component {...pageProps} />
      </LoginStore>
    </React.Fragment>
  )
}

export default MyApp