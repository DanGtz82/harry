import './avatar.css';

interface Props {
  image: string;
}

const Avatar = ({ image }: Props) => {
  return (
    <div className="rounded-circle mx-auto my-4 avatar" />
  );
};

export default Avatar;
