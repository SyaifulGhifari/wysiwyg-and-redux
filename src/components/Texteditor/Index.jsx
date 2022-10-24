import React, { useState } from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';

function TextEditor() {
  const navigate = useNavigate();
  const { quill, quillRef } = useQuill();
  const [value, setValue] = useState();

  const render = DOMPurify.sanitize(value);

  React.useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        console.log(quillRef.current.firstChild.innerHTML);
        setValue(quillRef.current.firstChild.innerHTML);
      });
    }
  }, [quill]);

  console.log(value);

  const handleHome = () => {
    navigate('/');
  };

  return (
    <div>
      <div
        style={{
          width: 500,
          height: 300,
          marginLeft: '100px',
          marginTop: '100px',
        }}
      >
        <div ref={quillRef} />
      </div>
      <div
        style={{ marginLeft: '1em', marginTop: '100px' }}
        onClick={handleHome}
      >
        home
      </div>

      <div
        style={{
          marginLeft: '1em',
          marginTop: '100px',
          width: 500,
          height: 300,
          border: '2px',
          borderStyle: 'solid',
          borderColor: 'black',
        }}
        className='ql-editor'
      >
        <div dangerouslySetInnerHTML={{ __html: render }} />
      </div>
    </div>
  );
}

export default TextEditor;
