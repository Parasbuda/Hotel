import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import {Link} from "react-router-dom"
const Home = () => {
    return (
        <div>
            <Hero hero="defaultHero">
                <Banner title="luxurious rooms" subtitle="deluxe rooms starting at Rs.299">
                  <Link to="/rooms" className="btn-primary">Our rooms </Link>
                </Banner>
           </Hero>
        </div>
    )
}

export default Home
