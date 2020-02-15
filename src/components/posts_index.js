import React , {Component} from 'react';

import {connect} from 'react-redux';
import { fetchPosts } from '../actions/index';
// import { bindActionCreators } from 'redux';
import {Link} from 'react-router';

class PostsIndex extends Component {
    componentDidMount(){
        this.props.fetchPosts();
    }

    renderPosts() {
        return this.props.posts.map((post) => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={"posts/" + post.id}>
                       <span className="pull-xs-right">{post.categories}</span>
                       <strong>{post.title}</strong>
                    </Link>
                </li>
            )
        })
    }

    render() {
        return(
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        새 포스트 만들기
                    </Link>
                </div>
                <h3>포스트들</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return { posts : state.posts.all }
}

// connect의 두번째 인자로 그냥 object를 넘겨줌으로써 
// mapDispatchToProps 함수를 쓰지 않아도 된다.
// function mapDispatchToProps(dispatch){
//     return bindActionCreators({fetchPosts} , dispatch);
// }



// connect (첫번째는 mapStateToProps인데 없어서 null)()
export default connect(mapStateToProps, {fetchPosts})(PostsIndex);