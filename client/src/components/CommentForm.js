import React from 'react';

const CommentForm = ({ addNewComment, id }) => {
  const [formState, setFormState] = React.useState({ author: '', body: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (formState.author && formState.body) {
      addNewComment(formState, id);
      setFormState({
        author: '',
        body: ''
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(formState).map(el => (
        <input
          key={el}
          type='text'
          name={el}
          placeholder={el}
          value={formState[el]}
          onChange={handleChange}
        />
      ))}
      <button>Add Comment</button>
    </form>
  );
};

export default CommentForm;
