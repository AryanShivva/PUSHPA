import React from 'react'
import Navbar from './components/Navbar'
import First from './components/First'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'
import Extra from './components/Extra'
import Footer from './components/Footer'
import { useLocomotiveScroll } from 'react-locomotive-scroll';

document.title = "ARYAN SHIVVA ";
const App = () => {
  const scrollLocomotive = useLocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true,
    multiplier: 1.5,
    class: 'is-scrolling',
  });

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden" data-scroll-speed data-scroll-container>
      <Navbar/>
      <First/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Extra/>
      <Footer/>
    </main>
  )
}

export default App