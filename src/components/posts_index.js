import React , {Component} from 'react';

import {connect} from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
    componentWillMount(){
        this.props.fetchPosts();
    }

    render() {
        return(
            <div>
                <div>This is PostsIndex!!</div>
            </div>
        );
    }
}

function mapStateToProps(posts){
    return { posts : posts }
}



// connect (첫번째는 mapStateToProps인데 없어서 null)()
export default connect(mapStateToProps, {fetchPosts})(PostsIndex);