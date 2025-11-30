  import { BrowserRouter, Routes, Route } from 'react-router-dom';
  import Header from './components/Header';
  import Footer from './components/Footer';

  import Home from './pages/Home';
  import Projects from './pages/Projects';
  import Contact from './pages/Contact';
  import PageNotFound from './pages/PageNotFound';

  {/*admin imports*/}
  import AdminLogin from './pages/AdminLogin';
  import AdminDashboard from './pages/AdminDashboard';
  import AddProject from './pages/AddProject';
  import Message from './pages/Message';

function App() {
  return (
    <BrowserRouter>

    {/*Header will be visible on all pages*/}
      <Header />
      
      <main>
        <Routes>
        {/*public routes*/}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />

          {/*Admin routes*/}
          <Route path="/admin/login" element={<AdminLogin/>} />
          <Route path="/admin/dashboard" element={<AdminDashboard/>} /> 
          <Route path="/admin/add-project" element={<AddProject/>} />
          <Route path="/admin/message" element={<Message/>} /> 
        </Routes>
      </main>

      {/*footer will be visible on all pages*/}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
