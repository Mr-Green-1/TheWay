import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {addPost, changeNewText, state} from './Redux/State';

test('renders learn react link', () => {
  render(<App state={state} addPost={addPost} changeNewPostMessage={changeNewText} newPostMessage={state.profilePage.newPostMessage}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
