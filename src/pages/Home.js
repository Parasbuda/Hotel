import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import { Link } from "react-router-dom"
import Services from "../Components/Services"
const Home = () => {
    return (
        <React.Fragment>
            <Hero hero="defaultHero">
                <Banner title="luxurious rooms" subtitle="deluxe rooms starting at Rs.299">
                  <Link to="/rooms" className="btn-primary">Our rooms </Link>
                </Banner>
            </Hero>
            <Services/>
        </React.Fragment>
    )
}

export default Home
