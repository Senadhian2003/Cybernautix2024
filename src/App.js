import './App.css';
import Home from './component/Home';
import { Particle } from './component/Particle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Events from './component/events';
import EventDetails from './component/event-details';
import Contact from './component/Contact';
import Aos from 'aos';
import {useEffect} from 'react';
import Travel from './component/travel';
import Mob from './component/Mob';
import Register from './component/Register';
import GetDoc from './component/GetDoc';
import Login from './component/Login';
import UserDetails from './UserDetails';
function App() {
  
  useEffect(() => {
    Aos.init({ duration: 200 });
  }, []);

  return (
    <div className="App">
     <>
     <Router>
                <Routes>
                    <Route path="/" element={<> <Home />

                    <Mob />
                    </>
                      
                      
                      
                     } />
                    <Route path="/events" element={<>
                    <Events />
                    <Mob />
                    
                  
                  </>} />
                    <Route path="/events/:id" element={
                    <>
                    
                    
                    <EventDetails />
                    <Mob />
                    </>
                    
                    
                    } />

                    <Route path="/register" element={<><Register/><Mob /></>}/>

                    <Route path="/login" element={<><Login/><Mob /></>}/>

                    <Route path="/getdoc" element={<><GetDoc/><Mob /></>}/>

                    <Route path="/userDetails/:userId" element={<><UserDetails /><Mob/></>} />

                    
                    <Route path="/contactus" element={<>
                    
                    
                    
                    <Contact/>
                    <Mob />
                    </>
                    
                    
                    
                    } />

<Route path="/bus" element={
  <>


<Travel/>
<Mob />
</>
} />
                </Routes>
            </Router>
            
     </>
    
    </div>
    
  );
}

export default App;
