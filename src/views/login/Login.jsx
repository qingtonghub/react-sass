
// http://demo.demohuo.top/modals/49/4919/demo/

import React, { Component, PureComponent } from 'react';
import '../../assets/css/login.scss';

import Button from '../../components/Button';

const imgs = {
  bg: require('../../assets/imgs/bg-01.jpg'),
}

/** 背景图 */
const Bg = (props) => (
  <div className="bg-wrap" style={{ backgroundImage: `url(${props.img})` }}>
    {props.children}
  </div>
);

class Login extends Component {
  render() {
    return(
      <Bg img={imgs.bg}>
        <div>aaammm</div>
        <Button text="text"/>
      </Bg>
    )
  }
}

export default Login;
