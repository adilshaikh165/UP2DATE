import './App.css';
import React, { useState } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize = 5;
  

  const[progress, setProgress] = useState(0);

  return (
      
      <div>
        <Router>
          <NavBar/>
          <LoadingBar
            color='#f11946'
            progress={progress}
          />
          
          <Routes>
          <Route exact path="/" element={<News setProgress = {setProgress}   key="general" pageSize={pageSize} country="in"/>}></Route>
            <Route exact path="/business" element={<News setProgress = {setProgress}  key="business" pageSize={pageSize} category ="business" country="in"/>}></Route>
            <Route exact path="/entertainment" element={<News setProgress = {setProgress}  key="entertainment" pageSize={pageSize} category ="entertainment" country="in"/>}></Route>
            <Route exact path="/health" element={<News setProgress = {setProgress}  key="health" pageSize={pageSize} category ="health" country="in"/>}></Route>
            <Route exact path="/science" element={<News setProgress = {setProgress}  key="science" pageSize={pageSize} category ="science" country="in"/>}></Route>
            <Route exact path="/sports" element={<News setProgress = {setProgress}  key="sports" pageSize={pageSize} category ="sports" country="in"/>}></Route>
            <Route exact path="/technology" element={<News setProgress = {setProgress}  key="technology" pageSize={pageSize} category ="technology" country="in"/>}></Route>
          </Routes>
        </Router>
        
      </div>
    )
  
  
}

export default App;


