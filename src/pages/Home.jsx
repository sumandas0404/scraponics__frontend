import Navbar from '../components/Navbar/Navbar';
import Homecard from '../components/Homecard/Homecard';
import Blog from '../components/Blog/Blog';
import CanvaImage from '../components/CanvaImage/CanvaImage';
import Faq from '../components/Faq/Faq';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Homecard />
      <CanvaImage />
      <Blog />
      <Faq />
    </div>
  )
}

export default Home