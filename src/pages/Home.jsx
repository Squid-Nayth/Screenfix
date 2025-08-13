import NavBar from '@sections/NavBar'
import Hero from '@sections/Hero'
import Evaluation from '@sections/Evaluation'
import Course from '@sections/Course'
import About from '@sections/About'
import Satisfaction from '@sections/Satisfaction'
import MapLocation from '@sections/MapLocation'
import Footer from '@sections/Footer'


import Whatsapp from '@components/Whatsapp'

const Home = () => {
    return (
        <>
        <Whatsapp />
        <NavBar />
        <Hero />
        <Evaluation />
        <Course />
        <About />
        <Satisfaction />
        <MapLocation />
        <Footer />
        </>
    );
}

export default Home