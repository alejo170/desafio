import Header from './components/Header/Header';
import ListProducts from './components/ListProducts/ListProducts';
import Footer from './components/Footer/Footer';
import imgLogo from './assets/logo.png';

function App() {
  return (
    <>
      <Header logo={imgLogo} alt='tech mall logo' />
      <ListProducts />
      <Footer />
    </>
  )
}

export default App
