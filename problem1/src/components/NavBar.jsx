import logo from '../assets/logo.svg'

const NavBar = () => {
    return (
        <nav className='header__frame'>
            <div className="content_wrapper nav__display">
                <a href='/'>
                    <img src={logo} alt="logo" />
                </a>
                <div className="links">
                    <a className='link' href="/">HOME</a>
                    <a className='link' href="/">LINK 1</a>
                    <a className='link' href="/">LINK 2</a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar