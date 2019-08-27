import * as React from 'react';
import logo from '@image/logo.svg';

interface IProps {
}

const Logo: React.FC<IProps> = () => (
  <img src={logo} />
);

Logo.defaultProps = {
};

export default Logo;