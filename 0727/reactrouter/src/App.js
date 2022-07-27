import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Header';
import Homepage from './Hompage';
import Contact from './Contact';

function App() {
  return (
    
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about'/>
        <Route path='/page/:id'/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
