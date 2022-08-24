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
  return (
    <div className="card">
      <div className="row g-0">
        <div className={clsx('col-md-6', personaje.house.toLowerCase())}>
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
