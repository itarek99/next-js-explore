import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <div>Logo</div>
        <Link href='/'>Home</Link>
        <Link href='/events'>Events</Link>
        <Link href='/about-us'>About</Link>
      </nav>
    </header>
  );
};
export default Header;
