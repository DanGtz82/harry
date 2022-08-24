import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Controls from './controls';
import Layout from './layout';

const Main = () => {
  const personajes = useSelector(
    (state: RootState) => state.charactersReducer.personajes
  );

  return (
    <div className="container">
      <Controls />
      <Layout personajes={personajes} />
    </div>
  );
};

export default Main;
