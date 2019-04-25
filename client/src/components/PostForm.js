import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addNewPost } from '../actions';

const PostForm = ({ addNewPost }) => {
  // Using an object with old state syntax for easier updating

  const [formState, setFormState] = useState({
    title: '',
    author: '',
    category: '',
    body: ''
  });

  const handleSubmit = e => {
    e.preventDefault();

    if (
      Object.keys(formState)
        .map(key => formState[key])
        .reduce((acc, cur) => acc && cur)
    ) {
      console.log(formState);
      addNewPost(formState);
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const { title, body, author, category } = formState;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='title'
          placeholder='Title'
          value={title}
          onChange={handleChange}
        />

        <input
          type='text'
          name='author'
          placeholder='Author'
          value={author}
          onChange={handleChange}
        />

        <textarea
          type='text'
          name='body'
          placeholder='Body'
          value={body}
          onChange={handleChange}
          rows='4'
          cols='12'
        />

        <select name='category' value={category} onChange={handleChange}>
          <option disabled value=''>
            Category:{' '}
          </option>
          <option value='react'>React</option>
          <option value='redux'>Redux</option>
          <option value='udacity'>Udacity</option>
        </select>

        <button type='submit'>Add Post</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {
    addNewPost
  }
)(PostForm);
