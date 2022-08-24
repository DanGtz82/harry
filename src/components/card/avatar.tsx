import clsx from 'clsx';
import './avatar.css';

interface Props {
  image: string;
}

const Avatar = ({ image }: Props) => {
  return (
    <div className="rounded-circle mx-auto avatar d-flex flex-column align-items-center justify-content-center">
      <img
        src={image}
        alt="profile"
        className={clsx('avatar-img', 'rounded-circle')}
      />
    </div>
  );
};

export default Avatar;

