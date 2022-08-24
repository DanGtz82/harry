import Button from "../../components/button";
import './index.css'
import harryp from '../../assets/harry_text.png'

const Controls = () => {
  return (
    <div className="filter d-flex align-items-center flex-column p-3">
       <img src={harryp} alt="harry" />
        <p className="text-filter">Selecciona tu filtro</p>
        <div className="buttons-filter">
            <Button text="Estudiante" />
            <Button text="Staff" />
        </div>
    </div>
  );
};

export default Controls;
