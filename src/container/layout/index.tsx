import Card from '../../components/card';
import { Character } from '../../models/characters';
import './index.css';
interface Props {
  personajes: Character[];
}

const Layout = ({ personajes }: Props) => {
  const students = personajes.filter(personaje => personaje.hogwartsStudent);
  const staffs = personajes.filter(personaje => personaje.hogwartsStaff);
  return (
    <div className="d-flex flex-row">
      <div className="col-6">
        {students.map(student =>
          <Card key={student.name} personaje={student} />
        )}
      </div>
      <div className="col-6">
        {staffs.map(staff => <Card key={staff.name} personaje={staff} />)}
      </div>
    </div>
  );
};

export default Layout;
