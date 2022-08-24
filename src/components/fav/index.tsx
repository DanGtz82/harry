import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../store/characters';
import './index.css';

interface Props {
  image: string;
  name: string;
  key: string;
}

const Fav = ({ image, name, key }: Props) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(toggleFavorite({ personaje: name, isFav: false }));
  };

  return (
    <li key={`${key}-${new Date()}`}>
      <div
        className="dropdown-item btn-mini d-flex flex-row justify-content-between align-items-center"
        onClick={() => onClick()}
      >
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