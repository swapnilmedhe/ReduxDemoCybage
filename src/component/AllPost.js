import React, { Component } from 'react';
import {connect} from 'react-redux';
import Post from './Post';

class AllPost extends Component {
    render() {
        return (
            <div>
                <h4> All Post component ...</h4>
                {/* {console.log(this.props.posts)} */}
               { this.props.posts.map( (post) => <Post key={post.id} post={post}/>)}
                
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        posts :state            //Here posts is key  and available inside component 
    }
}
export default connect(mapStateToProps)(AllPost);