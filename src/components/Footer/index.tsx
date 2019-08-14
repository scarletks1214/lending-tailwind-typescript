import React, { FC } from 'react';
import './index.css';
import mediumLogo from '../../assets/images/medium-logo.png';
import telegramLogo from '../../assets/images/telegram-logo.png';
import twitterLogo from '../../assets/images/twitter-logo.png';


interface IProps {
}

const Footer: FC<IProps> = () => (
  <div className='py-8 bg-footer'>
    <div className='flex justify-between items-center mx-4 md:mx-40 text-gray-600 text-sm'>
      <div className='w-1/2'>
        <div className='text-white text-base pb-2'>Company</div>
        <div className='pb-2'>About</div>
        <div className='pb-2'>Careers</div>
        <div className='pb-2'>Contact</div>
      </div>
      <div className='w-1/2'>
        <div className='text-white text-base pb-2'>Follow us</div>
        <div className='flex pb-2'>
          <img src={mediumLogo} alt='medium' />
          <div className='pl-2'>Medium</div>
        </div>
        <div className='flex pb-2'>
          <img src={telegramLogo} alt='telegram' />
          <div className='pl-2'>Telegram</div>
        </div>
        <div className='flex pb-2'>
          <img src={twitterLogo} alt='twitterLogo' />
          <div className='pl-2'>Twitter</div>
        </div>
      </div>
    </div>
  </div>
);

Footer.defaultProps = {
};

export default Footer;