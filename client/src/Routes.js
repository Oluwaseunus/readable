import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Posts from './components/Posts';
import SinglePost from './components/SinglePost';
import Categories from './components/Categories';
import PostForm from './components/PostForm';

const Routes = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to='/'>Posts</Link>
          </li>
          <li>
            <Link to='/categories'>Categories</Link>
          </li>
        </ul>
      </nav>
      <Route exact path='/' component={Posts} />
      <Route path='/posts/:postId' component={SinglePost} />
      <Route path='/categories' component={Categories} />
      <Route path='/addPost' component={PostForm} />
    </BrowserRouter>
  );
};

export default Routes;
