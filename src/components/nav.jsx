import { StyledNav } from './styles/Nav.styled.js';
import {BsDoorOpenFill} from 'react-icons/bs';
import {BsFileEarmarkPdfFill} from 'react-icons/bs';
import {SiYoutube} from 'react-icons/si';
import {GiSwordman} from 'react-icons/gi';
import {FaMailBulk} from 'react-icons/fa';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (

  <StyledNav>
      <ul id='nav-list' data-testid='nav-list'>
        <a href='https://www.shiwookcho.com/#' onClick={() => setActiveNav('#')} ><BsDoorOpenFill className={activeNav === '#' ? 'logo-bundle-active' : 'logo-bundle'}/></a>
        <a href='#About' onClick={() => setActiveNav('#About')}><BsFileEarmarkPdfFill className={activeNav === '#About' ? 'logo-bundle-active' : 'logo-bundle'}/></a>
        <a href="#Works" onClick={() => setActiveNav('#Works')}><SiYoutube className={activeNav === '#Works' ? 'logo-bundle-active' : 'logo-bundle'}/></a>
        <a href='#Experience' onClick={() => setActiveNav('#Experience')}><GiSwordman className={activeNav === '#Experience' ? 'logo-bundle-active' : 'logo-bundle'}/></a>
        <a href='#Contact' onClick={() => setActiveNav('#Contact')}><FaMailBulk className={activeNav === '#Contact' ? 'logo-bundle-active' : 'logo-bundle'}/></a>
      </ul>
    </StyledNav>
  )
}

export default Nav