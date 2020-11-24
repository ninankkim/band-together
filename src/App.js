import React from 'react';
import './App.css';
import AboutUsScreen from './screens/AboutUsScreen';
import { BrowserRouter, Route} from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route path="/" component={AboutUsScreen} ></Route>
    </div>
    </BrowserRouter>
  );
}

export default App;
