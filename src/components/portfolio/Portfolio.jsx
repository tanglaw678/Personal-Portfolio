import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/bookss.png'
import IMG2 from '../../assets/WebsiteSS.png'
import IMG3 from '../../assets/SizzleSS.png'
import book from '../../assets/Book.pdf'


// Change Images
// Fix borders for mobile




const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>-4-</h5>
      <h2>My Recent Projects</h2>
    

      <div className="container main_container">
        <article className='main_item'>
          <div className="main_item-img">
            <img src={IMG3} />
          </div>
          <h3>Sizzle</h3>
          <div className="main_item-cta">
            <a href="https://github.com" className='btn'>Github (Currently Unavailable)</a>
            <a href='' className='btn btn-primary' target=''>Live Demo (Currently Unavailable)</a>
          </div>
        </article>
      </div>




          
      <div className="container portfolio_container">
        <article className='portfolio_item'>
              <div className="portfolio_item-image">
                  <img src={IMG1} alt='' />
                </div>
                <h3>Poetry Book: Scraps for the Soul</h3>
                <div className="portfolio_item-cta">
                <a href={book} className='btn btn-primary'>Download Book</a>
              </div>
        </article>
        <article className='portfolio_item'>
              <div className="portfolio_item-image">
                  <img src={IMG2} alt='' />
                </div>
                <h3>Personal Website</h3>
                <div className="portfolio_item-cta">
                <a href='https://github.com' className='btn'>Github (Currently Unavailable)</a>
                <a href='' className='btn btn-primary' target='_blank'>Live Demo (Currently Unavailable)</a>
              </div>
        </article>
      </div>
    </section>
  )
}

export default portfolio