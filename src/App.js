import Content from './component/Content';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './css/Utils.css'
import './css/App.css'
import './css/contact.css'
import './css/blogpost.css'
import './css/responsive.css'
import Contact from './component/Contact';
import Blogpost from './component/Blogpost';
import Search from './component/Search';
function App() {
  return (
    <div>
       <Router>
       <Navbar/>
      <Routes>
          <Route exact path="/"  element={<Content topic='Featured article'/>}/>
          <Route exact path="/about" element= ""/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/blogpost" element={<Blogpost/>}/>
          <Route exact path="/search" element={<Search/>}/>
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
