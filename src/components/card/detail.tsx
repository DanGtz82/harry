interface Props {
    name: string;
    dateOfBirth: string;
    gender: string;
    eyeColour: string;
    hairColour: string;
  }
  
  interface rowProps {
    label: string;
    value: string;
    id: number;
  }
  
  const Detail = ({
    name,
    dateOfBirth,
    gender,
    eyeColour,
    hairColour
  }: Props) => {
    const rows: rowProps[] = [
      { label: 'cumpleaños', value: dateOfBirth, id: 1 },
      { label: 'género', value: gender, id: 2 },
      { label: 'color de ojos', value: eyeColour, id: 3 },
      { label: 'color de pelo', value: hairColour, id: 4 }
    ];
  
    const row = ({ label, value }: rowProps, key: string) =>
      <div className="d-flex flex-row text-capitalize" key={key}>
        <span className="fw-bold">{label}: </span>
        &nbsp;
        {value}
      </div>;
  
    return (
      <div className="d-none d-sm-block d-flex flex-column align-items-start">
        {rows.map(r => row(r, `${r.id}-${name}-${r.value}-${new Date()}`))}
      </div>
    );
  };
  
  export default Detail;
  