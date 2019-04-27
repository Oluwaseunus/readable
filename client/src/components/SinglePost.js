import React from 'react';
import { timeValue } from '../helpers';

const SinglePost = props => {
  const handleDelete = () => {
    props.deletePost(props.id);
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
        <p>{props.voteScore} votes</p>
        <p>{props.commentCount} comments</p>
        <button onClick={handleDelete}>Delete Post</button>
        <button onClick={() => props.history.push(`/editPost/${props.id}`)}>
          Edit Post
        </button>
      </div>
    </div>
  );
};

export default SinglePost;
