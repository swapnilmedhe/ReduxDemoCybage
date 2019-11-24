import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostForm from './component/PostForm';
import AllPost from './component/AllPost';

function App() {
  return (
   
    <div className="App">
      <div className="navbar">
        <h2 className="center"> Post It  </h2>
      </div>
      <PostForm/>
        <AllPost/>
      
    </div>
  
  );
}

export default App;
