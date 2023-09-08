import React from 'react'
import BannerImage from "../../assets/banner/banner-img.jpg"
import SubBannerImage from "../../assets/banner/banner.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Home.css'
import { faChartLine , faShieldHalved , faChartArea } from '@fortawesome/free-solid-svg-icons';

export default function Home() {

  const charLine = <FontAwesomeIcon icon={faChartLine} />

  const shield = <FontAwesomeIcon icon={faShieldHalved} />

  const chartArea = <FontAwesomeIcon icon={faChartArea} />
  return (
    <>
    <section id='home'>
        <div className='banner_image'>
        </div>
        <div className='container'>
          
            <div className='banner_outer'>
              <div className='col'>
                <h3 className='tilte'>WE PROMOTE YOUR <span>BUSSINESS</span></h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus qui provident, eum, mollitia suscipit earum ab laborum sapiente facilis eaque, optio ut perferendis accusamus dolorum assumenda odio dicta aliquam deleniti!</p>
                <div className='btn_wrapper'>
                    <a className='btn' href='/'>Get Started</a>
                </div>
              </div>
              <div className='col'>
                <div className='sub_banner_image'>
                  <img src={BannerImage} alt="Banner Image"/>
                </div>
                <div className='banner_style_1  banner_style_2'>
                  {chartArea}
                  <h4>Bussiness Analysis</h4>
                </div>
                <div className='banner_style_1 banner_style_3'>
                  {shield}
                  <h4>99.9 percent success</h4>
                </div>
                <div className='banner_style_1 banner_style_4'>
                  {chartArea}
                  <h4>Strategy</h4>
                </div>
              </div>

            </div>
        </div>
    </section>
    </>
  )
}
