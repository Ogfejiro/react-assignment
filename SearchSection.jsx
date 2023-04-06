import React from 'react'
import Ican from './images/google icon.png';
import SearchBar from './SearchBar';
import './styles/SearchSection.css';
import Button from './Button.jsx';
import Link from './Link.jsx';

const SearchSection = () => {
    return (
      <>
      <div className="search">
        <img className="google" src={Ican} alt="google-app"></img>
      </div>
      <SearchBar/>
      <div className='buttons'>
      <Button right="Google Search"/>
      <Button right="i am lucky"/>
      </div>

      <div className ='links'>
          <p>Google offered in:</p>
          <Link para= {'Hausa'}/>
          <Link para= {'Igbo'} />
          <Link para= {'EdeYoruba'} />
          <Link para= {'Hausa'} />
          <Link para= {'Nigerian Pidgin'} />
        </div>
       
      </>
    )
  }
  
  export default SearchSection;