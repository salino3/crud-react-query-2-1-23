import React from 'react'
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {

  const navigate = useNavigate();

  return (
    <div className="divPNF">
      <h2 onClick={() => navigate(-1)}>
        <u>Go back</u>
      </h2>
      <h1>* Page Not Found *</h1>
    </div>
  );
}

export default PageNotFound