import React from 'react'
import './work.css'
import osc_logo from '../../assets/osc_logo.png'
import docusign_logo from '../../assets/docusign_logo.png'
import rise_logo from '../../assets/rise_logo.png'
import {Pagination, Autoplay} from 'swiper/modules';
import {BsArrowDownRight} from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'

const data = [
    {
        company_logo: osc_logo,
        company:'1.Open Source China',
        position:'Product Manager Intern (Most Recent)',
        duration: '05/2023 - 07/2023',
        company_experience1:"Developed a comprehensive roadmap for integrating Machine learning and AI products into our existing product suite, identifying key objectives and variables for future development.",
        company_experience2:"Translated upcoming product release’s whitepapers & website for international release, resulting in a 12.5% increase in efficiency.",
        company_experience3:"Translated negotiations between foreign distributors and company executives worth $96M USD.",

    },
    {
        company_logo: docusign_logo,
        company:'2.DocuSign',
        position:'Account Executive Intern',
        duration: '05/2022 - 08/2022',
        company_experience1:"Collaborated with team members to implement a client needs assessment process, identifying key attributes and user statistics improving client engagement by 8% via email marketing.",
        company_experience2:"Coordinated and executed a client seminar, reaching over 100 attendees from various market segments, increasing clients in product awareness and developing potential leads.",
        company_experience3:"Aided account executives in daily tasks and outreach to reach and exceed monthly quota.",

    },
    {
        company_logo: rise_logo,
        company:'3.RiseDesk',
        position:'Partnership Development Intern',
        duration: '05/2021 - 01/2022',
        company_experience1:'Designed and developed a service ChatBot to streamline Shopify ecommerce customer experience improving web conversion rate by 12% in the first month.',
        company_experience2:'Developed strategic partnerships with key influencers and industry experts, resulting in a 20% increase in website traffic and a 15% boost in sales revenue.',
        company_experience3:'Conducted B2B outreach, communicating with clients over calls and emails with 3.5% conversion.',
    }
]


const Work = () => {
  return (
    <section id='Work'>
        <h5>-3-</h5>
        <h2>Places I've Worked</h2>

        <Swiper className="container work_container"

            // install Swiper modules
            modules={[Pagination, Autoplay]}
            autoplay = {{
                delay: 5000,
                disableOnInteraction: false,
            }}
            loop = {true}

            spaceBetween={40}
            slidesPerView={1}
    
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}>


            {
                data.map(({company_logo,company,position,duration, company_experience1, company_experience2, company_experience3},index) => {
                    return (
                        <SwiperSlide key={index} className='work'>
                        <div className="work_logo">
                            <img src={company_logo}/>
                        </div>
                        <h5 className='company_name'>{company}</h5>
                        <h3 className='position'>{position}</h3>
                        <h4 className='duration'>{duration}</h4>

                        <article className='company_experiences'>
                            <BsArrowDownRight className='company_experience-icon'/> 
                                <div>
                                    <small className='company_experience'>{company_experience1}</small>
                                </div>
                        </article>
                        <article className='company_experiences'>
                            <BsArrowDownRight className='company_experience-icon'/> 
                                <div>
                                    <small className='company_experience'>{company_experience2}</small>
                                </div>
                        </article>
                        <article className='company_experiences'>
                            <BsArrowDownRight className='company_experience-icon'/> 
                            <div>
                                <small className='company_experience'>{company_experience3}</small>
                            </div>

                        </article>

                    </SwiperSlide>
                    )
                })

            }


        </Swiper>
    </section>
  )
}

export default Work