import React from 'react'
import './experience.css'
import {AiFillCheckCircle} from 'react-icons/ai'
import {Pagination, EffectCards} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards'


const data = [
  {
    name: 'Product Experience',
    s1: 'Jira',
    s2: 'Agile Development',
    s3: 'SQL',
    s4: 'Python',
    s5: 'Java',
    s6: 'Stakeholder Managment'
  },
  { 
    name: 'Sales Experience',
    s1: 'Outreach',
    s2: 'Qualifying Leads',
    s3: 'B2B Marketing',
    s4: 'GSuite & Office',
    s5: 'Salesforce',
    s6: 'Pipeline Management'
  }
]

const experience = () => {
  return (
    <section id='Experience'> 
      <h5>-2-</h5>
      <h2>Some Skills I've Picked Up</h2>

      <Swiper className="counter experience_container"
        
        modules={[Pagination, EffectCards]}
        effect='cards'
        spaceBetween={40}
        slidesPerView={1}

        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}>
      
      
      {
        data.map(({name,s1,s2,s3,s4,s5,s6},index)=> {
          return (
            
            
            <SwiperSlide key={index} className='experience_card'>

              <div className="experience_product">
                <h3>{name}</h3>
                <div className="experience_content">

              <article className = 'experience_details'>
                  <AiFillCheckCircle className = "experience_details-icon"  />
                  <div>
                    <h4>{s1}</h4>
                  </div>
                </article>

                <article className = 'experience_details'>
                  <AiFillCheckCircle className = "experience_details-icon"  />
                  <div>
                    <h4>{s2}</h4>
                  </div>
                </article>

                <article className = 'experience_details'>
                  <AiFillCheckCircle className = "experience_details-icon"  />
                  <div>
                    <h4>{s3}</h4>
                  </div>
                </article>

                <article className = 'experience_details'>
                  <AiFillCheckCircle className = "experience_details-icon"  />
                  <div>
                    <h4>{s4}</h4>
                  </div>
                </article>

                <article className = 'experience_details'>
                  <AiFillCheckCircle className = "experience_details-icon"  />
                  <div>
                    <h4>{s5}</h4>
                  </div>
                </article>
                
                <article className = 'experience_details'>
                  <AiFillCheckCircle className = "experience_details-icon" />
                  <div>
                    <h4>{s6}</h4>
                  </div>
                </article>
               </div> 
        </div>
            </SwiperSlide>
          )
        })
      }
        
      </Swiper>
    </section>
  )
}

export default experience