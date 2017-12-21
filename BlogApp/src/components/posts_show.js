import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPost, deletePost} from '../actions/index';

class PostsShow extends React.Component {
    componentDidMount() {
        const id = this.props.match.params.id
        this.props.fetchPost(id);
    }
    onDeleteClick() {
        this.props.deletePost(this.props.match.params.id, () => {
            this.props.history.push("/");
        });
    }
    render() {
        if (!this.props.post) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <Link to="/">Back</Link>
                <button onClick={this.onDeleteClick.bind(this)}>
                    Delete Post
                </button>

                <h3>{this.props.post.title}</h3>
                <h4>{this.props.post.categories}</h4>
                <h4>{this.props.post.content}</h4>
            </div>
        )
    }
}

function mapStateToProps({posts}, ownProps) {
    return { post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);
