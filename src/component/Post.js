import React, { Component } from 'react';
import {connect } from 'react-redux';

export class Post extends Component {
    render() {
        return (
            <div>
                <h2> Title :{this.props.post.title}</h2>
                <h2> Post  :{this.props.post.message}</h2>
                <button onClick={
                    () => this.props.dispatch({ type: 'EDIT_POST' ,id: this.props.post.id})
                }>Edit Post</button>

                <button onClick={
                    () => this.props.dispatch({ type:'DELETE_POST' ,id: this.props.post.id})
                }>Delete Post</button>
            </div>
        )
    }
}

export default connect()(Post);
