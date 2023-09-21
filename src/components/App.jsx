import "./App.css";
import Layout from "./layout/Layout";
import Header from './layout/Header';
import { UserProvider } from '../client/context/UserContext';

function App() {
  return (
    <>
      <UserProvider>
        <Layout>
          <Header />
        </Layout>
      </UserProvider>
    </>
  );
}

export default App;
