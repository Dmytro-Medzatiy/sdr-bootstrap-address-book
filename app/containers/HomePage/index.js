/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Sample from 'components/Sample';
import CommentBox from 'components/CommentBox';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
        <div>
          <h1 style={{textAlign: "center", color: "#"}}>Chat</h1>
          <CommentBox />
        </div>
    );
  }
}

