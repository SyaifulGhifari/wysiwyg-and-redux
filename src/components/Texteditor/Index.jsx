import { useState, useEffect } from 'react';
import { useQuill } from 'react-quilljs';
import { useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { useDispatch } from 'react-redux';
import { setContent } from '../../redux/content';
import { useSelector } from 'react-redux';

function TextEditor() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const content = useSelector((state) => state.content.content);

  const { quill, quillRef } = useQuill();
  const [value, setValue] = useState(content);

  const render = DOMPurify.sanitize(value);

  useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML(content);
      quill.on('text-change', () => {
        console.log(quillRef.current.firstChild.innerHTML);
        const content = quillRef.current.firstChild.innerHTML;
        setValue(content);
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
      <button
        onClick={() => {
          dispatch(setContent(value));
        }}
      >
        save
      </button>
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
