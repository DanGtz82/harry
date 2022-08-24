interface Props {
    label: string;
    type: string;
    name: string;
    id: string;
    value: any;
    onChange: Function;
  }
  
  const Input = ({ label, type, name, id, value, onChange }: Props) => {
    return (
      <div className="input-group row mb-2">
        <label htmlFor={id} className="form-label text-start text-uppercase">
          {label}
        </label>
        <div className="col-12">
          <input
            type={type}
            name={name}
            id={id}
            className="form-control form-control-lg"
            value={value}
            onChange={e => onChange(e)}
          />
        </div>
      </div>
    );
  };
  
  export default Input;
  