import React from 'react';

const SinglePost = ({ match }) => {
  console.log(match.params.postId);
  return <div>SinglePost</div>;
};

export default SinglePost;
