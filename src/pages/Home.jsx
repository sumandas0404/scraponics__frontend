import Navbar from '../components/Navbar/Navbar';
import Homecard from '../components/Homecard/Homecard';
import Blog from '../components/Blog/Blog';
import CanvaImage from '../components/CanvaImage/CanvaImage';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Homecard />
      <CanvaImage />
      <Blog />
    </div>
  )
}

export default Home