import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';

import { editPost } from '../actions';

const EditPost = ({ match, title, body, editPost, history }) => {
  const [state, setState] = useState({ title, body });

  const handleEditSubmit = e => {
    e.preventDefault();
    console.log(match.params.id);
    editPost(match.params.id, { ...state });
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
          type='text'
          name={field}
          placeholder={`Post ${field}`}
          onChange={handleChange}
          value={state[field]}
        />
      ))}
    </form>
  );
};

export default connect(
  null,
  {
    editPost
  }
)(EditPost);
