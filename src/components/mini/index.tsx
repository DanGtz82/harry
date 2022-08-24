import { useSelector } from 'react-redux';
import clsx from 'clsx';
import Fav from '../fav';
import { RootState } from '../../store';
import './index.css';

const Mini = () => {
  const { favoritos, personajes } = useSelector((state: RootState) => {
    return state.charactersReducer;
  });

  const charactersDisplayed = () => {
    const top = favoritos.slice(0, 5);
    return personajes.filter(personaje => top.includes(personaje.name));
  };

  return (
    <div
      className={clsx(
        'd-flex ',
        'flex-row',
        'px-4',
        'justify-content-center',
        'justify-content-md-end',
        'sticky-md-top',
        'fixed-bottom'
      )}
    >
      <div className="btn-group-sm" role={'group'}>
        <button
          className={clsx('btn btn-small', 'btn-mini', 'dropdown-toggle')}
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favoritos <i className="fa-solid fa-bookmark" />
        </button>
        <ul className="dropdown-menu">
          {charactersDisplayed().map(fav =>
            <Fav name={fav.name} image={fav.image} key={fav.name} />
          )}
        </ul>
        <button
          className={clsx('btn', 'btn-small', 'btn-mini')}
          data-bs-toggle="modal"
          data-bs-target="#modalAdd"
        >
          Agregar <i className="fa-solid fa-user-plus" />
        </button>
      </div>
    </div>
  );
};

export default Mini;

