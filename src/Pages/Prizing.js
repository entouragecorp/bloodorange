import React from 'react'
import Next from '../Components/NextButton/Next'
import NextGreen from '../Assets/next-green.png'
import Sour from '../Assets/sour.svg'
import './Pages.scss'

/**
* @author
* @function Prizing
**/

const Prizing = (props) => {
  return(
    <div className='Prizing'>
      <div className='titleContainer'>
        <h1 className='blood_orange_h1'>SWEET & <br/> SOUR SATIVA</h1>
        <h5 className='blood_orange_h1 ROR'>¼ OUNCE READY TO ROLL</h5>
      </div>

      <div id='next_btn_green'>
          <Next image={NextGreen} link='/instructions'/>
      </div>

      {/* Three StackedColumns */}

      <div className='columns_holder'>

      <div className='shared_width left-content'>

        <div className='shared_width'>
          <div className='info_container'>
            <h1 className='blood_orange_h1'>SWEET & <br/> SOUR SATIVA</h1>
            <h5 className='blood_orange_h1 ROR'>¼ OUNCE READY TO ROLL</h5>
          </div>

          <div className='info_container'>
            <p className='margin_zero' style={{fontSize: '13px'}}>
              Our Sweet & Sour Sativa Ready to Roll is made with milled whole flower, never shake or trim, packed with a sour punch and fruity citrus aromas.
              <br/>
              <br/>
              This fresh Sativa-dominant Hybrid cultivar is a mix of Ghost Train Haze and Ultra Sour, with very strong THC potency potential.
              <br/>
              <br/>
              Saturday Sweet & Sour Sativa Ready to Roll is where quality, convenience and value meet. A quarter ounce offering and  unbeatable bag appeal for $29.95 MSRP.</p>
          </div>

          <div className='info_container'>
            <p className='margin_zero'>HYBRID</p>
            <p className='margin_zero thin'>THC 18-24%</p>
            <p className='margin_zero thin'>CBD 0-2%</p>
          </div>
          <div className='info_container'>
            <p className='margin_zero'>AROMA & FLAVOURS</p>
            <p className='margin_zero thin'>Citrus, Sour, Fuel</p>
          </div>

          <div className='info_container'>
            <p className='margin_zero'>LICENSED PRODUCER</p>
            <p className='margin_zero thin'>WeedMD Rx Inc.</p>
          </div>
        </div>

        </div>
      </div>
    </div>
   )
 }

export default Prizing