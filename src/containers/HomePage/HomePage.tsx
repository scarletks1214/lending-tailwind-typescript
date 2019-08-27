import React, { FC, Fragment, useEffect, useState } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BoxComponent from './BoxComponent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getRates } from '../../services/rates';
import { setWaitlist } from '../../services/waitlists';
import { showErrorToast, showInfoToast } from '../../utils/utilities';

import playButton from '../../assets/images/play-button.png';
import dotsRectGroup from '../../assets/images/dots-rect.svg';
import dotsGroup from '../../assets/images/dots.svg';
import compoundImg from '../../assets/images/compound.svg';
import dydxImg from '../../assets/images/dydx-black.svg';

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
          <div className='text-center mt-2xl mb-xl relative'>
            <img className='absolute right-0 pr-xl' src={dotsGroup} />
            <h5>
              Be Savvy
            </h5>
            <h1 className='max-w-md mx-auto mt-xl mb-md px-md'>
              Start earning 15% in 155 seconds
            </h1>
            <div className='py-lg sf-text-pro'>
              Helis makes it easy to enter the world of decentralised finance.
            </div>
          </div>
          <div className='pb-lg'>
            <form onSubmit={submitHandler}>
              <div className='flex justify-between max-w-md mx-auto px-md'>
                <input
                  className='text-field flex-grow mr-sm'
                  placeholder='Enter email address'
                  value={email}
                  type='email'
                  onChange={emailChangeHandler} />
                <button
                  className='btn-blue ml-0 tablet:ml-lg p-0 tablet:px-lg focus:outline-none'
                  disabled={loading}
                  type='submit'>
                  Get Early Access
                </button>
              </div>
            </form>
          </div>
          <div className='play-rect mt-2xl p-lg tablet:p-2xl'>
            <img src={playButton} />
            <p className='pl-lg'>
              Learn how it works
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className='container mx-auto px-md flex-none tablet:flex pt-4xl'>
          <div className='w-full tablet:w-1/2 pb-2xl p-lg'>
            <h5>
              INTEREST CALCULATOR
            </h5>
            <h2 className='pt-md'>
              How much could I earn?
            </h2>
            <h6 className='pt-xl'>
              I would like to lend :
            </h6>
            <div className='text-6xl font-bold pt-lg leading-tight bg-customGradient custom-gradient-color'>
              $1000
            </div>
            <input className='text-6xl font-bold pt-lg leading-tight bg-customGradient custom-gradient-color' value='1000' />
            <div className='border border-gray-200 h-0 bg-gray-200 max-w-md' />
            <div className='text-xs pt-xl sf-text-pro max-w-md'>
              Lending rates are not reliant on duration and it is used to only show past performance.
            </div>
          </div>
          <div className='w-full tablet:w-1/2 pb-3xl relative'>
            <img className='absolute left-0 pr-xl -mt-2xl' src={dotsRectGroup} />
            <div className='shadow-lg flex justify-center mx-auto rounded-lg w-80'>
              <BoxComponent
                isLeft
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
          <h5>Overview</h5>
          <h2 className='mb-md'>Why use Helis?</h2>
          <h6 className='text-md text-gray-700'>
            Helis makes it easy to enter the world of decentralised finance. Helis makes it easy to enter the world of decentralised finance. Helis makes it easy to enter the world of decentralised finance.
          </h6>

          <div className='pt-20 flex-none tablet:flex justify-between'>
            <div className='py-lg'>
              <h1 className='text-gray-500'>01</h1>
              <h3 className='mb-md'>Best interest rates</h3>
              <p className='sf-pro-text text-gray-500 text-xs'>
                Compare and select the best rates
              </p>
            </div>
            <div className='py-md'>
              <h1 className='text-gray-500'>02</h1>
              <h3 className='mb-md'>No extra downloads</h3>
              <p className='sf-pro-text text-gray-500 text-xs'>
                Simply use a username and password
              </p>
            </div>
            <div className='py-md'>
              <h1 className='text-gray-500'>03</h1>
              <h3 className='mb-md'>No term lock-in</h3>
              <p className='sf-pro-text text-gray-500 text-xs'>
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