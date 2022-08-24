import React from 'react';

interface Props {
  name: string;
  alive: boolean;
  favorite?: boolean;
  staff?: boolean;
  student?: boolean;
}

const Main = ({ name, alive, student, staff }: Props) => {
  const showLevel = () => {
    if (student) {
      return <span className="text-uppercase p-1 text-start">Estudiante</span>;
    }

    if (staff) {
      return <span className="text-uppercase p-1 text-start">STAFF</span>;
    }

    return null;
  };
  return (
    <div className="d-flex flex-column flex-md-column-reverse align-items-start">
      <div className="fs-3 fw-bold ">
        {name}
      </div>
      <div className="d-flex flex-row align-items-center w-100">
        <div className="d-flex flex-column flex-md-row align-items-md-center flex-grow-1">
          <span className="text-uppercase p-1 align-items-sm-start text-start">
            {alive ? 'VIVO' : 'FINADO'}
          </span>
          <span className="d-none d-md-block">/</span>
          {showLevel()}
        </div>
        <i className="fa-regular fa-bookmark d-none d-md-block" />
      </div>
    </div>
  );
};

export default Main;
