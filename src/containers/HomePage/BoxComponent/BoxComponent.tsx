import React, { FC } from 'react';

interface IProps {
  green?: boolean;
  logo?: any;
  title?: string;
  currentRate: number;
  weekly: number;
  monthly: number;
  yearly: number;
}

const BoxComponent: FC<IProps> = ({ green, logo, title, currentRate, weekly, monthly, yearly }: IProps) => (
  <div className={`w-40 ${green && 'bg-green-100'} pl-8 pt-8`}>
    <img src={logo} alt='icon' />
    <p>{title}</p>
    <img
      className='h-lg'
      style={{ visibility: green ? 'visible' : 'hidden' }}
      src={require('@image/best-rate.png')}
      srcSet={`
        ${require('@image/best-rate@2x.png')} 2x,
        ${require('@image/best-rate@3x.png')} 3x
      `}
      alt='best-rate' />
    <p className='text-xs text-gray-400 pt-lg'>Current Variable Rate</p>
    <p className='text-black font-bold pt-md'>{currentRate.toFixed(2)}%</p>
    <p className='text-xs text-gray-400 pt-lg'>Weekly</p>
    <p className='text-md text-black font-bold pt-md'>${weekly.toFixed(2)}</p>
    <p className='text-xs text-gray-400 pt-lg'>Monthly</p>
    <p className='text-md text-black font-bold pt-md'>${monthly.toFixed(2)}</p>
    <p className='text-xs text-gray-400 pt-lg'>Yearly</p>
    <p className='text-md text-black font-bold pt-md pb-lg'>${yearly.toFixed(2)}</p>
  </div>
);

BoxComponent.defaultProps = {
  green: false,
  logo: null,
  title: 'Compound',
  currentRate: 10,
  weekly: 2.5,
  monthly: 10,
  yearly: 100
};

export default BoxComponent;