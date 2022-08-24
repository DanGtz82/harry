import { RadioOption } from '../../models/components/radio';
import Option from './option';

interface Props {
  lbl:string;
  name:string;
  options: RadioOption[];
}

const RadioGroup = ({ name, lbl, options }: Props) => {
  return (
    <>
    <div className="mb-2 text-uppercase text-start">
        {lbl}
      </div>
    <div className="d-flex flex-row justify-content-start align-items-center">
      {options.map(option => <Option {...{ ...option, name, lbl }} />)}
    </div>
    </>
  );
};

export default RadioGroup;
