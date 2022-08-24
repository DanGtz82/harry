import { RadioOption } from '../../models/components/radio';

export interface Props {
  name: string;
  onClick: Function;
}

const Option = ({ id, label, value, name, onClick }: RadioOption & Props) => {
  return (
    <div className="radio mx-auto">
      <input type="radio" name={name} id={id} onClick={() => onClick(value)} />
      <label htmlFor="id" className="form-label text-capitalize mx-1">
        {label}
      </label>
    </div>
  );
};

export default Option;
