import React from 'react'
import Link from './Link.jsx';
import './styles/footer.css';

export default function FooterText() {
  return (
    <div className = 'footer'>
    <div className = 'down-footer'>
        <Link para = {'About'}/>
        <Link  para = {'Advertising'}/>
        <Link  para = {'Bussiness'}/>
        <Link  para = {'How Search Works'}/>
    </div>
    <div className = 'down-footer'>
        <Link para= {'Carbon neutral since 2007'}/>
    </div>
    <div className = 'down-footer'>
        <Link para = {'Privacy'}/>
        <Link para = {'Terms'}/>
        <Link para = {'Settings'}/>
    </div>
</div>
  )
}
