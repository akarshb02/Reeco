import './App.css';
import Header from './Components/Header';
import Layout from './Components/Layout';
import StatusDetails from './Components/StatusDetails';
import React from 'react';
import './App.css'
import AddItems from './Components/AddItems';
import Aproval from './Components/ApprovalDetails';



function App() {
  return (
    <div className="p-6">
      <Layout>
        <Header />
        <Aproval />
        <div className='mt-20'>
          <StatusDetails />
          <AddItems />
        </div>
      </Layout>
    </div>
  );
}

export default App;
