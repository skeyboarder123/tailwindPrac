import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/HomePage';
import MainForm from './components/routes/MainForm';
import MainLayout from './components/MainLayout';
import Register from './components/routes/Register';

function App() {
  return (
    <BrowserRouter basename="/tailwindPrac">
      <div>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="form" element={<MainForm />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
