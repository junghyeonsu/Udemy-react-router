import React , {Component} from 'react';

import {connect} from 'react-redux';
import { fetchPosts } from '../actions/index';
// import { bindActionCreators } from 'redux';
import {Link} from 'react-router';

class PostsIndex extends Component {
    componentDidMount(){
        this.props.fetchPosts();
    }

    render() {
        return(
            <div>
                <div>
                    {this.props.posts.map((post) => {
                        const id = post.id;
                        const title = post.title;
                        const categories = post.categories;
                        const content = post.content;

                        return (
                            <div>
                                <ul>
                                    <li>{id}</li>
                                    <li>{title}</li>
                                    <li>{categories}</li>
                                    <li>{content}</li>
                                </ul>
                            </div>
                        );

                        
                    })}
                </div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        새 포스트 만들기
                    </Link>
                </div>
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