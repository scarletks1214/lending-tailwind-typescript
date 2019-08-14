import * as React from 'react';
import logo from '../../assets/images/Logo.png';

interface IProps {
}

const Logo: React.FC<IProps> = () => (
  <img src={logo} />
);

Logo.defaultProps = {
};

export default Logo;