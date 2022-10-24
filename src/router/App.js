import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TextEditor from '../components/Texteditor/Index';
import Home from '../components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='text' element={<TextEditor />} />
        <Route path='*' element={<h1>404 Error Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
