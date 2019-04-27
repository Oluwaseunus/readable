import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchAll, deletePost } from '../actions';
import SinglePost from './SinglePost';

const Posts = ({ posts, deletePost, fetchAll, match, history }) => {
  useEffect(() => {
    fetchAll('posts');
  }, [fetchAll]);

  const { items } = posts;

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
    deletePost
  }
)(Posts);
