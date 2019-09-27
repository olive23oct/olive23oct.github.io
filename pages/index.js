import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Intro from '../components/intro';

const Home = () => (
  <div>
    <Head>
      <title>유희진 portfolio</title>
    </Head>

    <Nav/>
    <Intro/>

  </div>
)

export default Home
