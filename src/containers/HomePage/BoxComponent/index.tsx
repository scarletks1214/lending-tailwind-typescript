import React, { FC } from 'react';
import bestRate from '../../../assets/images/best-rate.png';
// TODO: backcolor handling    import classNames from 'classnames';

interface IProps {
  green?: boolean;
  logo?: any;
  title?: string;
  currentRate?: number;
  weekly?: number;
  monthly?: number;
  yearly?: number;
}

const BoxComponent: FC<IProps> = ({green, logo, title, currentRate, weekly, monthly, yearly}: IProps) => (
  <div className={`w-40 ${green && 'bg-green-100'} pl-8 pt-8`}>
    {/* TODO: decimal format */}
    <img src={logo} alt='icon' />
    <div>{title}</div>
    <img
      style={{visibility: green ? 'visible' : 'hidden'}}
      src={require('../../../assets/images/best-rate.png')}
      srcSet={`
        ${require('../../../assets/images/best-rate@2x.png')} 2x,
        ${require('../../../assets/images/best-rate@3x.png')} 3x
      `}
      alt='best-rate' />
    <div className='text-xs text-gray-400 pt-4'>Current Variable Rate</div>
    <div className='text-sm text-black font-bold pt-2'>{currentRate}%</div>
    <div className='text-xs text-gray-400 pt-4'>Weekly</div>
    <div className='text-sm text-black font-bold pt-2'>${weekly}</div>
    <div className='text-xs text-gray-400 pt-4'>Monthly</div>
    <div className='text-sm text-black font-bold pt-2'>${monthly}</div>
    <div className='text-xs text-gray-400 pt-4'>Yearly</div>
    <div className='text-sm text-black font-bold pt-2 pb-4'>${yearly}</div>
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