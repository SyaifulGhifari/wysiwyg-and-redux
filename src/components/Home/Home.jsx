import React from 'react';
import TextEditor from '../Texteditor/Index';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate('/text');
  };
  return (
    <>
      <div>Home</div>
      <div onClick={handleEdit}>edit</div>
    </>
  );
}

export default Home;
