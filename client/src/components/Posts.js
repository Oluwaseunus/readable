import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchAll, deletePost, fetchPostComments } from '../actions';
import SinglePost from './SinglePost';

const Posts = props => {
  const {
    posts,
    deletePost,
    fetchAll,
    fetchPostComments,
    match,
    history
  } = props;

  useEffect(() => {
    fetchAll('posts');
  }, [fetchAll]);

  const { items } = posts;
  console.log(items);

  Object.keys(items).map(fetchPostComments);

  return (
    <div>
      {Object.values(items)
        .filter(post => !post.deleted)
        .map(post => (
          <SinglePost
            key={post.id}
            deletePost={deletePost}
            match={match}
            history={history}
            {...post}
          />
        ))}

      <div className='addPost'>
        <button>
          <Link to='/addPost'>Add new post</Link>
        </button>
      </div>
    </div>
  );
};

function mapStateToProps({ posts }) {
  return {
    posts
  };
}

export default connect(
  mapStateToProps,
  {
    fetchAll,
    fetchPostComments,
    deletePost
  }
)(Posts);
