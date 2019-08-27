import { FC } from 'react';
import mediumLogo from '@image/medium-logo.svg';
import React from 'react';
import telegramLogo from '@image/telegram-logo.svg';
import twitterLogo from '@image/twitter-logo.svg';

interface IProps {
}

const Footer: FC<IProps> = () => (
  <div className='py-8 bg-blue-300'>
    <div className='container mx-auto px-md flex justify-between items-center text-gray-400 text-sm'>
      <div className='w-1/2 sf-pro-text'>
        <div className='text-white text-base pb-md'>Company</div>
        <div className='footer-item'>About</div>
        <div className='footer-item'>Careers</div>
        <div className='footer-item'>Contact</div>
      </div>
      <div className='w-1/2'>
        <p className='text-white text-base pb-md'>Follow us</p>
        <div className='footer-item'>
          <img src={mediumLogo} alt='medium' />
          <p className='pl-md'>Medium</p>
        </div>
        <div className='footer-item'>
          <img src={telegramLogo} alt='telegram' />
          <p className='pl-md'>Telegram</p>
        </div>
        <div className='footer-item'>
          <img src={twitterLogo} alt='twitterLogo' />
          <p className='pl-md'>Twitter</p>
        </div>
      </div>
    </div>
  </div>
);

Footer.defaultProps = {
};

export default Footer;