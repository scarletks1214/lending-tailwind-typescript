import { FC } from 'react';
import mediumLogo from '@image/medium-logo.png';
import React from 'react';
import telegramLogo from '@image/telegram-logo.png';
import twitterLogo from '@image/twitter-logo.png';

interface IProps {
}

const Footer: FC<IProps> = () => (
  <div className='py-8 bg-blue-200'>
    <div className='container mx-auto px-md flex justify-between items-center text-gray-600 text-sm'>
      <div className='w-1/2'>
        <p className='text-white text-base pb-md'>Company</p>
        <p className='pb-md'>About</p>
        <p className='pb-md'>Careers</p>
        <p className='pb-md'>Contact</p>
      </div>
      <div className='w-1/2'>
        <p className='text-white text-base pb-md'>Follow us</p>
        <div className='flex pb-md'>
          <img src={mediumLogo} alt='medium' />
          <p className='pl-md'>Medium</p>
        </div>
        <div className='flex pb-md'>
          <img src={telegramLogo} alt='telegram' />
          <p className='pl-md'>Telegram</p>
        </div>
        <div className='flex pb-md'>
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