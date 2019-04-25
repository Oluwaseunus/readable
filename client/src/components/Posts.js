import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchAll } from '../actions';
import { timeValue } from '../helpers';

const Posts = ({ posts, fetchAll }) => {
  useEffect(() => {
    fetchAll('posts');
  }, [fetchAll]);

  return (
    <div>
      {posts
        .filter(post => !post.deleted)
        .map(post => (
          <div key={post.id}>
            <div>
              <h3>{post.title}</h3>
              <h4>By {post.author}</h4>
            </div>

            <div>
              <p>{post.body}</p>
              <p>Category: {post.category}</p>
              <p>{timeValue(post.timestamp)}</p>
              <p>{post.voteScore} votes</p>
              <p>{post.commentCount} comments</p>
            </div>
          </div>
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
    fetchAll
  }
)(Posts);
