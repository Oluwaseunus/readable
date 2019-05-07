import React from 'react';
import { connect } from 'react-redux';

import { handleVote } from '../actions';
import { timeValue } from '../helpers';

const SinglePost = props => {
  const handleDelete = () => {
    props.deletePost(props.id);
  };

  const sendVote = type => {
    props.handleVote(type, 'posts', props.id);
  };

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
        <p>{props.commentCount} comments</p>
        <button onClick={handleDelete}>Delete Post</button>
        <button onClick={() => props.history.push(`/editPost/${props.id}`)}>
          Edit Post
        </button>
      </div>
    </div>
  );
};

export default connect(
  null,
  { handleVote }
)(SinglePost);
