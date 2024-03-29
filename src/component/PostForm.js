import React, { Component } from 'react';
import {connect} from 'react-redux';

 class PostForm extends Component {
  handleSubmit = (e) =>
  {
    e.preventDefault();
    const title= this.getTitle.value;
    const message =  this.getMessage.value;
    const data = {
        id: new Date(),
        title,
        message 
    }
    this.props.dispatch({
        type:'ADD_POST',
        data});
        this.getTitle.value = '';
        this.getMessage.value = '';
   console.log('data ====== > ' , data);
   
  }

   
    render() {
        return (
            <div className="post-container" >
                <h3 style={{color: 'green' }}>Create Post </h3>
                <form className="form" onSubmit={this.handleSubmit}>
                 <input required type='text' placeholder='Enter post title  ' ref={(input)=>this.getTitle = input}  /> <br/><br/>
                 <textarea required rows="5" cols="28" placeholder="Enter Post" ref={(input)=>this.getMessage = input} /><br /><br />

                    <button className="edit"> Post</button>
                </form>
            </div>
        )
    }
}



export default connect()(PostForm);
