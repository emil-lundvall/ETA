import React, {useState, useEffect} from 'react';
import './../src/index.css';
import './css/component.css';
import './css/point.css';
import './css/sticky-header.css';
import Loading from './components/loading';
import Homepage from './pages/home-page'
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  })
  return (
    <div className="App">
      {isLoading==true?
        <Loading />:
        <Homepage />
      }
    </div>
  );
}

export default App;
