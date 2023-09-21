import "./App.css";
import Layout from "./layout/Layout";
import Header from './layout/Header';
import { UserProvider } from '../client/context/UserContext';
import { Routes, Route } from 'react-router';
import Home from './pages/Home'; 

function App() {
  return (
    <>
      <UserProvider>
        <Layout>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/reviews" element={} /> */}
            {/* <Route path="/sales" element={} /> */}
          </Routes>
        </Layout>
      </UserProvider>
    </>
  );
}

export default App;
