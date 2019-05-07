import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';

import { editPost } from '../actions';

const EditPost = ({ match, editPost, history, items }) => {
  const { title, body } = items[match.params.id];
  const [state, setState] = useState({
    title,
    body
  });

  const handleEditSubmit = e => {
    e.preventDefault();
    editPost(match.params.id, state);
    formRef.current.reset();
    history.push('/');
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const formRef = useRef(null);

  return (
    <form onSubmit={handleEditSubmit} ref={formRef}>
      {Object.keys(state).map(field => (
        <input
          key={field}
          type='text'
          name={field}
          placeholder={`Post ${field}`}
          onChange={handleChange}
          value={state[field]}
        />
      ))}
      <button>Edit Post</button>
    </form>
  );
};

const mapStateToProps = ({ posts }) => ({
  items: posts.items
});

export default connect(
  mapStateToProps,
  {
    editPost
  }
)(EditPost);
