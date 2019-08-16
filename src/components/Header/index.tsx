import BorderButton from '../BorderButton';
import Logo from '../Logo';
import { FC } from 'react';
import React from 'react';

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