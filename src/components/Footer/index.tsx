import React, { FC } from 'react';
import mediumLogo from '../../assets/images/medium-logo.png';
import telegramLogo from '../../assets/images/telegram-logo.png';
import twitterLogo from '../../assets/images/twitter-logo.png';


interface IProps {
}

const Footer: FC<IProps> = () => (
  <div className='py-8 bg-blue-200'>
    <div className='container mx-auto px-md flex justify-between items-center text-gray-600 text-sm'>
      <div className='w-1/2'>
        <div className='text-white text-base pb-md'>Company</div>
        <div className='pb-md'>About</div>
        <div className='pb-md'>Careers</div>
        <div className='pb-md'>Contact</div>
      </div>
      <div className='w-1/2'>
        <div className='text-white text-base pb-md'>Follow us</div>
        <div className='flex pb-md'>
          <img src={mediumLogo} alt='medium' />
          <div className='pl-md'>Medium</div>
        </div>
        <div className='flex pb-md'>
          <img src={telegramLogo} alt='telegram' />
          <div className='pl-md'>Telegram</div>
        </div>
        <div className='flex pb-md'>
          <img src={twitterLogo} alt='twitterLogo' />
          <div className='pl-md'>Twitter</div>
        </div>
      </div>
    </div>
  </div>
);

Footer.defaultProps = {
};

export default Footer;