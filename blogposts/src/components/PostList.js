import React from 'react'
import { connect } from 'react-redux'
import { fetchPostsAndUsers } from '../actions'
import UserHeader from './UserHeader'

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }

    renderedList() {
        return (
            this.props.posts.map(post => {
                return (
                    <div className="item" key={post.id}>
                        <i className="large middle aligned icon user"></i>
                        <div className="content">
                            <div className="description">
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                            </div>
                            <UserHeader userId={post.userId}></UserHeader>
                        </div>
                        
                    </div>
                )
            }
            )
        )
    }
    render() {
        return (
            <div>
                {this.renderedList()}
            </div>
        )
    }
}

//posts key was assigned to postReducer
//will hold all data that reducer has returned
const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}
//fetchPosts becomes props in the component
export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);