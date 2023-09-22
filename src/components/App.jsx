import "./App.css";
import Layout from "./layout/Layout";
import Header from './layout/Header';
import { UserProvider } from '../client/context/UserContext';
import { Routes, Route } from 'react-router';
import Home from './pages/Home'; 
import ErrorBoundary from './base/ErrorBoundary';
import Reviews from './pages/Reviews';

function App() {
  return (
    <>
      <UserProvider>
        <Layout>
          <Header />
          <Routes>
            <Route path="/" element={
              <ErrorBoundary>
                <Home />
              </ErrorBoundary> } />
            <Route path="/reviews" element={
              <ErrorBoundary>
                <Reviews />
              </ErrorBoundary> } />
            {/* <Route path="/sales" element={} /> */}
          </Routes>
        </Layout>
      </UserProvider>
    </>
  );
}

export default App;
