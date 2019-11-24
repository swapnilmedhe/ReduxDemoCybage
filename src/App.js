import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostForm from './component/PostForm';
import AllPost from './component/AllPost';
import UpdatePost from './component/EditPost';
function App() {
  return (
    <div className="App">
      <PostForm/>
        <AllPost/>
      
    </div>
  );
}

export default App;
