import React, { FC, Fragment, useEffect, useState } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BoxComponent from './BoxComponent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getRates } from '../../services/rates';
import { setWaitlist } from '../../services/waitlists';
import { showErrorToast, showInfoToast } from '../../utils/utilities';

import './index.css';
import playButton from '../../assets/images/play-button.png';
import dotsRectGroup from '../../assets/images/dots-rect.png';
import dotsGroup from '../../assets/images/dots.png';
import compoundImg from '../../assets/images/compound.png';
import dydxImg from '../../assets/images/dydx-black.png';

interface IProps {
}

const HomePage: FC<IProps> = () => {
  const [compoundRateValue, setCompoundRateValue] = useState<number>(0);
  const [dydxRateValue, setDydxRateValue] = useState<number>(0);
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const investAmount = 1000

  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoading(true);
        const { data } = await getRates();
        setLoading(false);
        const rateList: Array<any> = data.data;
        if (rateList.length > 0) {
          const compound = rateList
                          .find(p => p.provider === 'Compound')
                          .supply
                          .find((s: { symbol: string; }) => s.symbol === 'DAI')
                          .rate * 100;
          const dydx = rateList
                          .find(p => p.provider === 'dYdX')
                          .supply
                          .find((s: { symbol: string; }) => s.symbol === 'DAI')
                          .rate * 100;
          setCompoundRateValue(compound);
          setDydxRateValue(dydx);
        }
      } catch (error) {
        console.log('[getRates] error =>', error);
      }
    };

    fetchRates();
  }, []);

  const emailChangeHandler = (event: any) => {
    setEmail(event.target.value);
  }

  const submitHandler = async (event: any) => {
    event.preventDefault();
    try {
      setLoading(true);
      const { data: response }: { data: any } = await setWaitlist(email);
      setLoading(false);

      if (response && response.status === 200) {
        showInfoToast(response.message);
      } else {
        showErrorToast(response.message);
      }
    } catch (error) {
      showErrorToast('Failed in adding email');
    }
  }

  return (
    <Fragment>
      <ToastContainer />
      <div className='bg-customGradient text-white'>
        <div className='container mx-auto px-2'>
          <Header />
          <div className='text-center mt-2xl relative'>
            <img className='absolute right-0 pr-xl' src={dotsGroup} />
            <p className='tracking-widest'>
              Be Savvy
            </p>
            <h1 className='text-3xl tablet:text-5xl font-semibold max-w-md mx-auto px-md'>
              Start earning 15% in 155 seconds
            </h1>
            <p>
              Helis makes it easy to enter the world of decentralised finance.
            </p>
          </div>
          <form onSubmit={submitHandler}>
            <div className='flex justify-between max-w-md mx-auto px-md mt-2xl'>
              <input
                className='border text-black p-md rounded-lg text-sm flex-grow'
                placeholder='Enter email address'
                value={email}
                type='email'
                onChange={emailChangeHandler} />
              <button
                className='text-sm bg-blue-100 rounded-lg px-lg tablet:py-md py-0 ml-lg'
                disabled={loading}
                type='submit'>
                Get Early Access
              </button>
            </div>
          </form>
          <div className='mt-2xl p-lg tablet:p-2xl flex justify-center items-center bg-purple-100 mt-3xl rounded-lg'>
            <img src={playButton} />
            <p className='pl-lg'>
              Learn how it works
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className='container mx-auto px-md flex-none tablet:flex pt-2xl'>
          <div className='w-full tablet:w-1/2 pb-2xl p-lg'>
            <p className='text-xs tracking-widest text-gray-600'>
              INTEREST CALCULATOR
            </p>
            <h1 className='leading-none tablet:leading-normal'>
              How much could I earn?
            </h1>
            <p className='font-normal tracking-wide py-lg'>
              I would like to lend :
            </p>
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
                green = {compoundRateValue > dydxRateValue}
                logo={compoundImg}
                title='Compound'
                currentRate={compoundRateValue}
                weekly={investAmount * compoundRateValue / (100 * 52)}
                monthly={investAmount * compoundRateValue / (100 * 12)}
                yearly={investAmount * compoundRateValue / 100}
              />
              <BoxComponent
                green = {dydxRateValue > compoundRateValue}
                logo={dydxImg}
                title='DyDx'
                currentRate={dydxRateValue}
                weekly={investAmount * dydxRateValue / (100 * 52)}
                monthly={investAmount * dydxRateValue / (100 * 12)}
                yearly={investAmount * dydxRateValue / 100}
              />
            </div>
          </div>
        </div>
      </div>

      <div className='bg-gray-100'>
        <div className='container mx-auto px-md py-2xl tablet:py-3xl'>
          <p className='text-gray-600 text-sm'>Overview</p>
          <h2 className='font-bold'>Why use Helis?</h2>
          <p className='text-md text-gray-700'>
            Helis makes it easy to enter the world of decentralised finance. Helis makes it easy to enter the world of decentralised finance. Helis makes it easy to enter the world of decentralised finance.
          </p>

          <div className='pt-xl flex-none tablet:flex justify-between'>
            <div className='py-md'>
              <h1 className='text-5xl font-bold text-gray-500'>01</h1>
              <h3 className='font-bold'>Best interest rates</h3>
              <p className='text-gray-500 text-xs'>
                Compare and select the best rates
              </p>
            </div>
            <div className='py-md'>
              <h1 className='text-5xl font-bold text-gray-500'>02</h1>
              <h3 className='font-bold'>No extra downloads</h3>
              <p className='text-gray-500 text-xs'>
                Simply use a username and password
              </p>
            </div>
            <div className='py-md'>
              <h1 className='text-5xl font-bold text-gray-500'>03</h1>
              <h3 className='font-bold'>No term lock-in</h3>
              <p className='text-gray-500 text-xs'>
                Withdraw your money anytime
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  )
};

HomePage.defaultProps = {
};

export default HomePage;