import logo from '../assets/logo-inv.svg'

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="content_wrapper top_wrapper">
        <div className="footer__line--1">
          <div>
            <a href='/'>
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="footer-links">
            <a className='footer-link' href="/">Lorem Ipsum Link
            </a>
            <a className='footer-link' href="/">Lorem Ipsum Link 2
            </a>
            <a className='footer-link' href="/">Lipsum Link 3
            </a>
          </div>
        </div>
        <div className='footer__line--2'>
        </div>
        <div className='footer__line--3'>
          <div className='brand'>
            <div className='copyright-symbol'>
              <p>©</p>
            </div>
            <div className='brand-name'>
              <p>Brand name,2022</p>
            </div>
          </div>
          <div className='socials'>
            <a href='/'><img src="/src/assets/twitter.svg" alt="twitter" /></a>
            <a href='/'><img src="/src/assets/instagram.svg" alt="instagram" /></a>
            <a href='/'><img src="/src/assets/linkedin.svg" alt="linkedin" /></a>
            <a href='/'><img src="/src/assets/reddit.svg" alt="reddit" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer