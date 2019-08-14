import React, { FC } from 'react';
import Logo from '../Logo';
import BorderButton from '../BorderButton';

interface IProps {
}

const Header: FC<IProps> = () => (
  <div className='flex justify-between items-center py-3'>
    <Logo />
    <BorderButton text='Contact' />
  </div>
);

Header.defaultProps = {
};

export default Header;