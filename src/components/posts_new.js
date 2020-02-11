import React , {Component} from 'react';
import PropTypes from 'prop-types';
import {reduxForm} from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
    static contextTypes = {
        router : PropTypes.object
    };

    onSubmit(props) {
        this.props.createPost(props)
        .then(() => {
            //포스트가 성공적으로 생성되고, 유저는 index페이지로 네비게이팅해준다.
            // 우리는 this.context.router.push를 이용해서 새로운 패스로 네비게이팅해준다.
            this.context.router.push('/');
        });
    }

    render(){

        const {fields : { title, categories, content }  , handleSubmit} = this.props;
        // == const handelSubmit = this.props.handleSubmit;
        // == const title = this.props.fields.title;

        return(
           <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
               <h3>새 포스트를 만드세요!</h3>
               <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''} `}>
                    <label>제목</label>
                    <input type="text" className="form-control" {...title} />
                    <div className="text-help">
                        {title.touched ? title.error : ''}
                    </div>
               </div>

               <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''} `}>
                    <label>카테고리</label>
                    <input type="text" className="form-control" {...categories} />
                    <div className="text-help">
                        {categories.touched ? categories.error : ''}
                    </div>
               </div>

               <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''} `}>
                    <label>내용</label>
                    <textarea className="form-control" {...content} />
                    <div className="text-help">
                        {content.touched ? content.error : ''}
                    </div>
               </div>

               <button type="submit" className="btn btn-primary" >만들기</button>
               <Link to ="/" className = "btn btn-danger">돌아가기</Link>
           </form>
        );
    }
}

function validate(values){
    const errors = {};

    if (!values.title) {
        errors.title = '제목을 입력해주세요';
    }

    if (!values.categories) {
        errors.categories = '카테고리를 입력해주세요';
    }

    if (!values.content) {
        errors.content = '내용을 입력해주세요';
    }

    return errors;
}

// connect : 첫번째 인자는 mapStateToProps , 두번째 인자는 mapDispatchToProps
// reduxForm : 첫번째는 form의 구성요소 , 두번째는 mapStateToProps , 세번쨰는 mapDispatchToProps

export default reduxForm({
    form : 'PostsNewForm',
    fields : ['title' , 'categories', 'content'],
    validate
} , null , {createPost} )(PostsNew);