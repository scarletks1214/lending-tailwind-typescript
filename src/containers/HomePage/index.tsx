import React, { FC, Fragment } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BoxComponent from './BoxComponent';
import './index.css';
import playButton from '../../assets/images/Group-1.png';
import dotsRectGroup from '../../assets/images/Group.png';
import dotsGroup from '../../assets/images/dots.png';
import compoundImg from '../../assets/images/compound.png';
import dydxImg from '../../assets/images/dydx-black.png';

interface IProps {
}

const HomePage: FC<IProps> = () => (
  <Fragment>
    <div className='custom-bg'>
      <div className='mx-4 md:mx-40'>
        <Header />
        <div className='text-center text-white mt-12 relative'>
          <img className='absolute right-0 pr-8' src={dotsGroup} />
          <div className='text-sm tracking-widest'>
            Be Savvy
          </div>
          <div className='text-3xl md:text-5xl font-semibold max-w-md mx-auto px-1 md:px-4 '>
            Start earning 15% in 155 seconds
          </div>
          <div className='text-base'>
            Helis makes it easy to enter the world of decentralised finance.
          </div>
        </div>
        <div className='flex justify-between max-w-md mx-auto px-2 mt-12'>
          <input className='border p-2 rounded-lg text-sm w-56' placeholder='Enter email address' />
          <button className='text-sm btn-blue text-white rounded-lg px-4 py-2'>
            Get Early Access
          </button>
        </div>
        <div className='mt-12 p-16 flex justify-center playBox mt-20 rounded-lg'>
          <img src={playButton} />
          <div className='text-white pl-4'>
            Learn how it works
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className='mx-4 md:mx-40 flex-none md:flex pt-12'>
        <div className='w-full md:w-1/2 pb-12 p-4'>
          <div className='text-xs tracking-widest text-gray-600'>
            INTEREST CALCULATOR
          </div>
          <div className='text-4xl text-black font-bold'>
            How much could I earn?
          </div>
          <div className='font-normal tracking-wide py-4'>
            I would like to lend :
          </div>
          <h1 className='text-5xl font-bold custom-gradient-color'>
            $1000
          </h1>
          <p className='text-xs pt-4'>
            Lending rates are not reliant on duration and it is used to only show past performance.
          </p>
        </div>
        <div className='w-full md:w-1/2 pb-12'>
          <div className='flex justify-center relative'>
            <img className='absolute left-0 pr-8 opacity-25' src={dotsRectGroup} />
            <BoxComponent
              green
              logo={compoundImg}
              title='Compound'
              currentRate={10}
              weekly={2.5}
              monthly={10}
              yearly={100}
            />
            <BoxComponent
              logo={dydxImg}
              title='DyDx'
              currentRate={10}
              weekly={2.5}
              monthly={10}
              yearly={100}
            />
          </div>
        </div>
      </div>
    </div>
  
    <div className='bg-gray-100'>
      <div className='mx-4 md:mx-40 py-12'>
        <div className='text-gray-600 text-sm'>Overview</div>
        <div className='text-3xl font-bold'>Why use Helis?</div>
        <div className='text-md text-gray-700'>
          Helis makes it easy to enter the world of decentralised finance. Helis makes it easy to enter the world of decentralised finance. Helis makes it easy to enter the world of decentralised finance.
        </div>

        <div className='pt-8 flex md:flex-none justify-between'>
          <div>
            <div className='text-4xl font-bold text-gray-500'>01</div>
            <h2>Best interest rates</h2>
            <div className='text-gray-500 text-xs'>
              Compare and select the best rates
            </div>
          </div>
          <div>
            <div className='text-4xl font-bold text-gray-500'>02</div>
            <h2>No extra downloads</h2>
            <div className='text-gray-500 text-xs'>
              Simply use a username and password
            </div>
          </div>
          <div>
            <div className='text-4xl font-bold text-gray-500'>03</div>
            <h2>No term lock-in</h2>
            <div className='text-gray-500 text-xs'>
              Withdraw your money anytime
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />      
  </Fragment>
);

HomePage.defaultProps = {
};

export default HomePage;