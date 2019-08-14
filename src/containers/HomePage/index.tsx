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
    <div className='bg-customGradient'>
      <div className='container mx-auto px-2'>
        <Header />
        <div className='text-center text-white mt-2xl relative'>
          <img className='absolute right-0 pr-xl' src={dotsGroup} />
          <div className='text-sm tracking-widest'>
            Be Savvy
          </div>
          <div className='text-3xl tablet:text-5xl font-semibold max-w-md mx-auto px-md'>
            Start earning 15% in 155 seconds
          </div>
          <div className='text-base'>
            Helis makes it easy to enter the world of decentralised finance.
          </div>
        </div>
        <div className='flex justify-between max-w-md mx-auto px-md mt-2xl'>
          <input className='border p-md rounded-lg text-sm w-56' placeholder='Enter email address' />
          <button className='text-sm bg-blue-100 text-white rounded-lg px-lg py-md'>
            Get Early Access
          </button>
        </div>
        <div className='mt-2xl p-2xl flex justify-center bg-purple-100 mt-3xl rounded-lg'>
          <img src={playButton} />
          <div className='text-white pl-lg'>
            Learn how it works
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className='container mx-auto px-md flex-none tablet:flex pt-2xl'>
        <div className='w-full tablet:w-1/2 pb-2xl p-lg'>
          <div className='text-xs tracking-widest text-gray-600'>
            INTEREST CALCULATOR
          </div>
          <div className='text-4xl text-black font-bold'>
            How much could I earn?
          </div>
          <div className='font-normal tracking-wide py-lg'>
            I would like to lend :
          </div>
          <h1 className='text-5xl font-bold bg-customGradient custom-gradient-color'>
            $1000
          </h1>
          <p className='text-xs pt-lg'>
            Lending rates are not reliant on duration and it is used to only show past performance.
          </p>
        </div>
        <div className='w-full tablet:w-1/2 pb-2xl'>
          <div className='flex justify-center relative'>
            <img className='absolute left-0 pr-xl opacity-25' src={dotsRectGroup} />
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
              currentRate={9}
              weekly={0.9}
              monthly={9}
              yearly={90}
            />
          </div>
        </div>
      </div>
    </div>
  
    <div className='bg-gray-100'>
      <div className='container mx-auto px-md py-2xl'>
        <div className='text-gray-600 text-sm'>Overview</div>
        <div className='text-3xl font-bold'>Why use Helis?</div>
        <div className='text-md text-gray-700'>
          Helis makes it easy to enter the world of decentralised finance. Helis makes it easy to enter the world of decentralised finance. Helis makes it easy to enter the world of decentralised finance.
        </div>

        <div className='pt-8 flex tablet:flex-none justify-between'>
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