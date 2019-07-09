import React, { PureComponent } from 'react';
import './Button.scss';

class Button extends PureComponent {
  render() {
    const { text, size = 'large' } = this.props;
    return(
      <button className="qt-btn">
        { text }
      </button>
    )
  } 
}

export default Button;
