import {assets} from '../assets/assets';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="flex items-center justify-between py-5 font-medium">
        <img src={assets.logo} className="w-36"  alt="logo" />
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            
            <NavLink to="/" className="flex flex-col items-center gap-1">
                <p>HOME</p>
                <hr className='hidden'/>
            </NavLink>
        
            <NavLink to="/collection" className="flex flex-col items-center gap-1">
                <p>COLLECTION</p>
                <hr className='hidden'/>
            </NavLink>

            <NavLink to="/about" className="flex flex-col items-center gap-1">
                <p>ABOUT</p>
                <hr className='hidden'/>
            </NavLink>

            <NavLink to="/contact" className="flex flex-col items-center gap-1">
                <p>CONTACT</p>
                <hr className='hidden'/>
            </NavLink>
        </ul>
    </div>
  )
}

export default NavBar