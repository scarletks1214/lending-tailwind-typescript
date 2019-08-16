import * as React from 'react';

interface IProps {
  text?: string
}

const BorderButton: React.FC<IProps> = (props: IProps) => (
  <button className='text-white bg-transparent rounded-lg border-white border text-sm px-lg py-sm'>
    {props.text}
  </button>
);

BorderButton.defaultProps = {
};

export default BorderButton;