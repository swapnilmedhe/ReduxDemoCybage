import React, { Component } from 'react';
import {connect } from 'react-redux';
export class Post extends Component {
    render() {
        return (
            <div className='post'> 
                <h2 className="post_title"> Title :{this.props.post.title}</h2>
                <p className="post_message"> Message :{this.props.post.message}</p>
                <div className='control-buttons'>
                <button className="edit"  onClick={
                    () => this.props.dispatch({ type: 'EDIT_POST' ,id: this.props.post.id})
                }>Edit Post</button>
                 <div>
                <button className='delete' onClick={
                    () => this.props.dispatch({ type:'DELETE_POST' ,id: this.props.post.id})
                }>Delete Post</button>
            </div>
            </div>
            </div>
        )
    }
}

export default connect()(Post);
