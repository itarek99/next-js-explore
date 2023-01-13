import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <nav className='navbar '>
          <Link className='navbar__logo' href='/'>
            Next Explore
          </Link>

          <div className='navbar__items'>
            <Link className='navbar__item' href='/'>
              Home
            </Link>
            <Link className='navbar__item' href='/events'>
              Events
            </Link>
            <Link className='navbar__item' href='/about-us'>
              About
            </Link>
          </div>
        </nav>
        <div>
          <h1 className='heading__main'>Upcoming Events On Your Town!</h1>
        </div>
      </div>
    </header>
  );
};
export default Header;
