import Footer from '../footer/Footer';
import Header from '../header/Header';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='container main-section'>{children}</main>
      <Footer />
    </>
  );
};
export default MainLayout;
