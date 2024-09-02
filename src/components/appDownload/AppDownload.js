import React from 'react'
import './appdownload.css'
import { assets } from '../../assets/assets'
export default function AppDownload() {
  return (
    <div className='app-download' id='app-download'>
            <p>For Experience Download <br /> Tomato App</p>
            <div className='app-download-platform'>
                <img src={assets.play_store} alt='' />
                <img src={assets.app_store} alt='' />
            </div>
    </div>
  )
}
