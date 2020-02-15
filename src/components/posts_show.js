import React , {Component} from 'react';
import {connect} from 'react-redux';
import { fetchPost , deletePost } from '../actions/index';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

class PostsShow extends Component {
    static contextTypes = {
        router : PropTypes.object
    }

    componentDidMount(){
         this.props.fetchPost(this.props.params.id);
    }

    onDeleteClick(){
        this.props.deletePost(this.props.params.id)
        .then(() => {
            //포스트가 성공적으로 생성되고, 유저는 index페이지로 네비게이팅해준다.
            // 우리는 this.context.router.push를 이용해서 새로운 패스로 네비게이팅해준다.
            this.context.router.push('/');
        });
    }

    render() {
        const { post } = this.props;

        if(!post){
            return (
                <div>Loading...</div>
            );
        }

        return (
                 <div>
                     <Link to = "/" >홈으로</Link>
                     <button className="btn btn-danger pull-xs-right"
                     onClick={this.onDeleteClick.bind(this)}>
                         포스트 삭제
                     </button>
                     <h3>{post.title}</h3>
                     <h6>Categories : {post.categories}</h6>
                     <p> {post.content} </p>
                 </div>
        );
    }
}

function mapStateToProps(state){
    return { post : state.posts.post};
}

export default connect(mapStateToProps, { fetchPost , deletePost })(PostsShow);