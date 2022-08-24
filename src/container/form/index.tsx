import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addOne } from '../../store/characters';
import Input from '../../components/input';
import RadioGroup from '../../components/radioGrp';
import { Character } from '../../models/characters';
import { Position } from '../../enums/position';
import { Genero } from '../../enums/genero';
import './index.css';

const defaultCharacter: Character = {
  name: '',
  species: '',
  gender: '',
  house: '',
  dateOfBirth: '',
  yearOfBirth: '',
  ancestry: 'pure-blood',
  eyeColour: '',
  hairColour: '',
  wand: { wood: '', core: '', length: '' },
  patronus: '',
  hogwartsStudent: false,
  hogwartsStaff: false,
  actor: '',
  alive: true,
  image: ''
};

const Form = () => {
  const dispatch = useDispatch();
  const [nombre, setNombre] = useState('');
  const [ojos, setOjos] = useState('');
  const [cumple, setCumple] = useState('');
  const [pelo, setPelo] = useState('');
  const [genero, setGenero] = useState<string | Genero>('');
  const [pos, setPos] = useState(Position.NONE);

  const resetForm = () => {
    setNombre('');
    setOjos('');
    setCumple('');
    setPelo('');
    setGenero('');
    setPos(Position.NONE);
  };

  const addNew = () => {
    dispatch(
      addOne({
        ...defaultCharacter,
        name: nombre,
        eyeColour: ojos,
        hairColour: pelo,
        dateOfBirth: cumple,
        gender: genero === Genero.Male ? 'Male' : 'Female',
        hogwartsStudent: pos === Position.STUDENT,
        hogwartsStaff: pos === Position.STAFF
      })
    );
    resetForm();
  };

  return (
    <div className="modal" tabIndex={-1} id="modalAdd">
      <div className="modal-dialog modal-fullscreen-md-down">
        <div className="modal-content">
          <div className="modal-header">
            <span className="fw-bold fs-3">Agregar un personaje</span>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body d-flex flex-column justify-content-start align-items-center">
            <div className="d-flex flex-row justify-content-evenly form-body">
              <div className="col-6">
                <Input
                  label="Nombre"
                  type="text"
                  id="txtName"
                  name="nombre"
                  value={nombre}
                  onChange={(e: any) => setNombre(e.currentTarget.value)}
                />
                <Input
                  label="COlor de ojOs"
                  name="ojos"
                  id="txtOjos"
                  type="text"
                  value={ojos}
                  onChange={(e: any) => setOjos(e.currentTarget.value)}
                />
                <RadioGroup
                  name="gender"
                  lbl="Género"
                  options={[
                    {
                      label: 'hombre',
                      id: 'rdoHombre',
                      value: Genero.Male,
                      onClick: (generoValue: Genero) => setGenero(generoValue)
                    },
                    {
                      label: 'mujer',
                      id: 'rdoMujer',
                      value: Genero.Female,
                      onClick: (generoValue: Genero) => setGenero(generoValue)
                    }
                  ]}
                />
              </div>
              <div className="col-6">
                <Input
                  label="Cumpleaños"
                  name="fecha"
                  id="txtFecha"
                  type="text"
                  value={cumple}
                  onChange={(e: any) => setCumple(e.currentTarget.value)}
                />
                <Input
                  label="Color de pelo"
                  name="pelo"
                  id="txtPelo"
                  type="text"
                  value={pelo}
                  onChange={(e: any) => setPelo(e.currentTarget.value)}
                />
                <RadioGroup
                  name="posicion"
                  lbl="Posición"
                  options={[
                    {
                      label: 'estudiante',
                      id: 'rdoEstudiante',
                      value: Position.STUDENT,
                      onClick: (posValue: Position) => setPos(posValue)
                    },
                    {
                      label: 'staff',
                      id: 'rdoStaff',
                      value: Position.STAFF,
                      onClick: (posValue: Position) => setPos(posValue)
                    }
                  ]}
                />
              </div>
            </div>
            <div className="d-flex flex-row justify-content-start imgFile">
              <input
                type="file"
                name="image"
                id="image"
                className="form-control my-2"
              />
            </div>
            <div className="d-flex flex-row">
              <button className="btn btn-lg btn-save" onClick={() => addNew()}>
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
