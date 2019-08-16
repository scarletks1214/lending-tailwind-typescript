import * as React from 'react';
import logo from '@image/logo.png';

interface IProps {
}

const Logo: React.FC<IProps> = () => (
  <img src={logo} />
);

Logo.defaultProps = {
};

export default Logo;