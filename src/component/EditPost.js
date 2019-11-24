import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditPost extends Component {

handleEdit = (e) =>{
    console.log('inside  Edit compo');
    
    e.preventDefault();
    const newTitle = this.getTitle.value;
    const newMessage = this.getMessage.value;
    const data={
        newTitle,
        newMessage
    }
    this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data:data})
}
    render() {
        return (
            <div>
                <form onSubmit={this.handleEdit}>
                    <input required type='text' placeholder='edit post here ....' ref={(input) => this.getTitle= input}
                    defaultValue ={this.props.post.title}/> <br/><br/>
                    <textarea required rows="5" ref={(input) => this.getMessage = input} placeholder='Enter Message'
                    defaultValue={this.props.post.message} cols='28' /><br/><br/>
 
                    <button>Update Post</button>>
                </form>
            </div>
        )
    }
}

export default connect()(EditPost);

