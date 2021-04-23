import './Header.css'
import {Link, withRouter} from 'react-router-dom'

const Header = () => {
    return (
        <header>  
          <ul className='nav'>
            <Link className='navBtn' to='/projects'>
                <li className='navBtnLi'>PROJECTS</li>
            </Link>
            <Link className='navBtn' to='/'>
                <li className='navBtnLi myName'>Lia Couch</li>
            </Link>
            <Link className='navBtn' to='/resume'>
                <li className='navBtnLi'>RESUME</li>
            </Link>
          </ul> 
        </header>
    )
}

export default withRouter(Header)
