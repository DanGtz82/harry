interface Props {
    dateOfBirth: string;
    gender: string;
    eyeColour: string;
    hairColour: string;
  }
  
  interface rowProps {
    label: string;
    value: string;
  }
  
  const Detail = ({ dateOfBirth, gender, eyeColour, hairColour }: Props) => {
    const rows: rowProps[] = [
      { label: 'cumpleaños', value: dateOfBirth },
      { label: 'género', value: gender },
      { label: 'color de ojos', value: eyeColour },
      { label: 'color de pelo', value: hairColour }
    ];
  
    const row = ({ label, value }: rowProps) =>
      <div className="d-flex flex-row text-capitalize">
        <span className="fw-bold">{label}: </span>
        &nbsp;
        {value}
      </div>;
  
    return (
      <div className="d-none d-sm-block d-flex flex-column align-items-start">
        {rows.map(r => row(r))}
      </div>
    );
  };
  
  export default Detail;
  