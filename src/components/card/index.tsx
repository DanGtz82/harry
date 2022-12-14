import Main from './main';
import Details from './detail';
import Avatar from './avatar';
import { Character } from '../../models/characters';
import './index.css';
import clsx from 'clsx';

interface Props {
  personaje: Character;
}

const Card = ({ personaje }: Props) => {
    const isMobile = window.innerWidth <= 640;
  return (
    <div className="card">
      <div className="row g-0">
      <div
          className={clsx(
            'col-md-6',
            personaje.house.toLowerCase(),
            'd-flex',
            'flex-column',
            'align-items-center',
            'justify-content-center',
            {
              'rounded-start': !isMobile,
              'rounded-top': isMobile
            }
          )}
        >

          <Avatar image={personaje.image} />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <Main
              name={personaje.name}
              alive={personaje.alive}
              student={personaje.hogwartsStudent}
              staff={personaje.hogwartsStaff}
            />
            <Details
              name={personaje.name}
              dateOfBirth={personaje.dateOfBirth}
              gender={personaje.gender}
              eyeColour={personaje.eyeColour}
              hairColour={personaje.hairColour}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
