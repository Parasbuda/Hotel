import React, { Component } from 'react'
import  {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from "react-icons/fa"
import Title from "./Title"
export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "free cocktails",
                info:"free hotel services and transport from the hotel department"
            },
            {
                icon: <FaHiking />,
                title: "free Hiking",
                info:"free hotel services and transport from the hotel department"
            },
            {
                icon: <FaShuttleVan />,
                title: "free bus",
                info:"free hotel services and transport from the hotel department"
            
            },
            {
                icon: <FaBeer />,
                title: "free beer",
                info:"free hotel services and transport from the hotel department"
            
            }
            
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((service,i) => {
                        return (
                            <article key={i} className="service">
                                <span>{service.icon}</span>
                                <h6>{service.title}</h6>
                                <p>{service.info}</p>
                            </article>
                        )
                    })}
                </div>
                
            </section>
        )
    }
}
