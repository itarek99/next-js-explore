import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav className='navbar'>
        <div className='navbar__logo'>Next Explore</div>
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
    </header>
  );
};
export default Header;
