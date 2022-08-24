import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { toggleFavorite } from '../../store/characters';
import { RootState } from '../../store';

interface Props {
  name: string;
  alive: boolean;
  favorite?: boolean;
  staff?: boolean;
  student?: boolean;
}

const Main = ({ name, alive, student, staff }: Props) => {
  const dispatch = useDispatch();
  const { favoritos } = useSelector(
    (state: RootState) => state.charactersReducer
  );
  const [isFav, setIsFav] = useState(false);
  const toggleFav = () => {
    const isFavValue = !isFav;
    setIsFav(isFavValue);
    dispatch(toggleFavorite({ personaje: name, isFav: isFavValue }));
  };

  const showLevel = () => {
    if (student) {
      return <span className="text-uppercase p-1 text-start">Estudiante</span>;
    }

    if (staff) {
      return <span className="text-uppercase p-1 text-start">STAFF</span>;
    }

    return null;
  };
  return (
    <div className="d-flex flex-column flex-md-column-reverse align-items-start">
      <div className="fw-bold ">
        {name}
      </div>
      <div className="d-flex flex-row align-items-center w-100">
        <div className="d-flex flex-column flex-md-row align-items-md-center flex-grow-1">
          <span className="text-uppercase p-1 align-items-sm-start text-start">
            {alive ? 'VIVO' : 'FINADO'}
          </span>
          <span className="d-none d-md-block">/</span>
          {showLevel()}
        </div>
        <i
          className={clsx(
            `fa-${favoritos.includes(name) ? 'solid' : 'regular'}`,
            'fa-bookmark',
            'd-none',
            'd-md-block'
          )}
          onClick={() => toggleFav()}
        />
      </div>
    </div>
  );
};

export default Main;