import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Mini from '../components/mini';
import Controls from './controls';
import Layout from './layout';
import Form from './form/index'

const Main = () => {
  const personajes = useSelector(
    (state: RootState) => state.charactersReducer.personajes
  );

  return (
    <div className="container">
      <Mini />
      <Controls />
      <Layout personajes={personajes} />
      <Form />
    </div>
  );
};

export default Main;
