import Navbar from './components/Navbar'
import Project from './components/Project'
import About from './components/About'
import Search from './components/Search'
import NewCourses from './components/NewCourses'
import Instructor from './components/Instructor'
import Courses from './components/Courses'
import Newsletter from './components/Newsletter'
import Topcourse from './components/Topcourse'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Project />
      <About />
      <Search />
      <NewCourses />
      <Instructor />
      <Courses />
      <Newsletter />
      <Topcourse />
      <Footer />
    </div>
  );
}
