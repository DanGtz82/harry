import './index.css';

interface Props {
  image: string;
  name: string;
  key: string;
}

const Fav = ({ image, name, key }: Props) => {
  return (
    <li key={key}>
      <div className="dropdown-item btn-mini d-flex flex-row justify-content-between align-items-center">
        <div>
          <img
            src={image}
            alt={`${name} profile pic`}
            className="rounded-circle img-avatar-fav"
          />
        </div>
        <div className="flex-grow-1">
          {name}
        </div>
        <div>
          <i className="fa-solid fa-trash" />
        </div>
      </div>
    </li>
  );
};

export default Fav;
