import * as React from 'react';

interface IProps {
  text?: string
}

const BorderButton: React.FC<IProps> = (props: IProps) => (
  <button className='border-button bg-transparent focus:outline-none'>
    {props.text}
  </button>
);

BorderButton.defaultProps = {
};

export default BorderButton;