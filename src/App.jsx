import { useState } from 'react'
import loadingCark from '../public/loadingCark.gif'
import { BiLaptop } from "react-icons/bi";
import { BiPhone } from "react-icons/bi";
import { BiMailSend } from "react-icons/bi";
import { BiSolidDice3 } from "react-icons/bi";
import { BiSolidImage } from "react-icons/bi";
import './App.css'



function App() {
  function openUrlInNewTab(url) {
    window.open(url, '_blank');
  }
  return (
    <>
      <h2>Web sitem güncelleniyor..</h2>
      <a href="" target="_blank">
        <img src={loadingCark} className="logo react" alt="React logo" />
      </a>
      <p>
        İlgi ve anlayışınız için teşekkür ederim!
      </p>
      <h2>
        Caner Şahin
      </h2>
      <hr></hr>
      <div className='infoArea'>
        <div className='itemArea'>
          <BiLaptop size={30} className='iconSettings' />
          <span className="infoAreaItemSettings">
            Frontend Developer
          </span>
        </div>
        <div className='itemArea'>
          <BiPhone size={30} className='iconSettings' />
          <a href='tel:+905313277914' className="infoAreaItemSettings">
            +905313277914
          </a>
        </div>
        <div className='itemArea'>
          <BiMailSend size={30} className='iconSettings' />
          <a href='mailto:caneersahin77@gmail.com' className="infoAreaItemSettings">
            <span>caneersahin77@gmail.com</span>
          </a>
        </div>
      </div>
      <hr></hr>
      <div className='projectArea'>
        <div className='appItems' onClick={() => openUrlInNewTab('kura')}>
          <a className='appItemsButton'>
            <BiSolidDice3 size={30} className='iconSettings' />
          </a>
          <div></div>
          <span>Kura App</span>
        </div>
        <div className='appItems'onClick={() => openUrlInNewTab('gorselAramaApp')} >
          <a className='appItemsButton'>
            <BiSolidImage size={30} className='iconSettings' />
          </a>
          <div></div>
          <span>Görsel Arama App</span>
        </div>
      </div>
    </>
  )
}

export default App