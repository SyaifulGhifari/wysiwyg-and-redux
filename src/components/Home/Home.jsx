import React from 'react';
import TextEditor from '../Texteditor/Index';
import { useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { useSelector } from 'react-redux';

function Home() {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate('/text');
  };
  const content = useSelector((state) => state.content.content);

  const render = DOMPurify.sanitize(content);

  return (
    <>
      <div>Home</div>
      <div onClick={handleEdit}>edit</div>

      <div className='ql-editor' dangerouslySetInnerHTML={{ __html: render }} />
    </>
  );
}

export default Home;
