import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from "./Nav";
import Main from "./Main";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import NotFound from "./NotFound";
import ContactPL from "./ContactPL";
import ContactDE from "./ContactDE";
import ContactUS from "./ContactUS";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Nav></Nav>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/about" element={<About />}>
                    </Route>
                    <Route path="/services" element={<Services />}>
                    </Route>
                    <Route path="/contact" element={<Contact />}>
                    </Route>
                    <Route path="/contact/pl" element={<ContactPL />}>
                    </Route>
                    <Route path="/contact/de" element={<ContactDE />}>
                    </Route>
                    <Route path="/contact/us" element={<ContactUS />}>
                    </Route>
                    <Route path="*" element={<NotFound />}>
                    </Route>
                </Routes>
            </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
