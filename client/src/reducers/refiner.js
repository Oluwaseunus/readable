const uuidv4 = require('uuid/v4');

export const createNewPost = (title, body, author, category) => ({
  id: uuidv4(),
  timestamp: Date.now(),
  title,
  body,
  author,
  category
});
