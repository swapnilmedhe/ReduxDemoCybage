import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostForm from './component/PostForm';
import AllPost from './component/AllPost';
function App() {
  return (
    <div className="App">
      <PostForm/>
        <AllPost/>
    </div>
  );
}

export default App;
