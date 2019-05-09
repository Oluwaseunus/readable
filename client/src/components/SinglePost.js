import React from 'react';
import { connect } from 'react-redux';

import CommentForm from './CommentForm';

import { handleVote, addNewComment } from '../actions';
import { timeValue } from '../helpers';

const SinglePost = props => {
  const [showComments, setShowComments] = React.useState(false);

  const handleDelete = () => {
    props.deletePost(props.id);
  };

  const sendVote = type => {
    props.handleVote(type, 'posts', props.id);
  };

  const comments = props.allComments[props.id];

  return (
    <div key={props.id}>
      <div>
        <h3>{props.title}</h3>
        <h4>By {props.author}</h4>
      </div>

      <div>
        <p>{props.body}</p>
        <p>Category: {props.category}</p>
        <p>{timeValue(props.timestamp)}</p>
        <div>
          <button onClick={() => sendVote('upVote')}>&uarr;</button>
          <p>{props.voteScore} votes</p>
          <button onClick={() => sendVote('downVote')}>&darr;</button>
        </div>
        <p onClick={() => setShowComments(!showComments)}>
          {props.commentCount} comments
        </p>
        <div>
          {showComments &&
            comments.map(comment => (
              <div key={comment.id}>
                {`${comment.author}:`} {comment.body}
              </div>
            ))}
        </div>
        <button onClick={handleDelete}>Delete Post</button>
        <button onClick={() => props.history.push(`/editPost/${props.id}`)}>
          Edit Post
        </button>
        <CommentForm addNewComment={props.addNewComment} id={props.id} />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  allComments: state.comments
});

export default connect(
  mapStateToProps,
  { addNewComment, handleVote }
)(SinglePost);
