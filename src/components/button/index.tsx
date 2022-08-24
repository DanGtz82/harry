import clsx from 'clsx';
import './index.css';

interface Props {
  text: string;
}

const Button = ({ text }: Props) => {
  return (
    <button type="button" className={clsx('btn', 'btn-control', 'mx-3')}>
      {text}
    </button>
  );
};

export default Button;
