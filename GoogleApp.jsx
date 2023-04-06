import React from 'react'
import Header from './Header';
import SearchSection from './SearchSection';
import FooterUp from './FooterUp';
import FooterText from './FooterText';



const GoogleApp = () => {
  return (
    <div class="app">
    <Header/>
    <SearchSection/>
    <div className='all-footer'>
    <FooterUp/>
    <FooterText/>
    </div>
    
    </div>
   
  )
}

export default GoogleApp;
