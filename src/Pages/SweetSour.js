import React from 'react'
import Next from '../Components/NextButton/Next'
import NextGreen from '../Assets/next-green.png'
import NugPackage from '../Assets/nug-package.svg'
import './Pages.scss'

/**
* @author
* @function SweetSour
**/

const SweetSour = (props) => {
  return(
    <div className='Prizing sweetSourBg'>

      <div className='columns_holder'>

        <div className='shared_width left-content'>

          <div className='shared_width'>
            <div className='info_container'>
              <h1 className='blood_orange_h1'>SWEET &</h1>
              <h1 className='blood_orange_h1 Title2'>SOUR SATIVA</h1>
              <h5 className='blood_orange_h1 ROR'>¼ OUNCE READY TO ROLL</h5>
            </div>

            <div className='info_container'>
              <p className='margin_zero' style={{fontSize: '13px'}}>
                Our Sweet & Sour Sativa Ready to Roll is made with milled whole flower, never shake or trim, packed with a sour punch and fruity citrus aromas.
                <br/>
                This fresh Sativa-dominant Hybrid cultivar is a mix of Ghost Train Haze and Ultra Sour, with very strong THC potency potential.
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

        <div class="vape_container">
          <img id='vapePen' src={NugPackage} alt='' />
        </div>

      </div>
      <div className='next_btn_blood_orange'>
          <Next text="LET'S BEGIN" link='/quiz' color='#535938'/>
      </div>
    </div>
   )

 }

export default SweetSour