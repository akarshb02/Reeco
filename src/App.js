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


















// const App = () => {
//   const myState = useSelector((state) => state.changeTheNumber)
//   const dispatch = useDispatch()
//   return (
//     <div className='App'>
//       <h1>Increment/Decrement counter</h1>
//       <h4>using React and Redux</h4>
//       <button id="dec" onClick={() => dispatch(decNumber(5))}>-</button>
//       <input name='quality' type='text' class="value" value={myState} />
//       <button id="inc" onClick={() => dispatch(incNumber(5))}>+</button>

//     </div>
//   );
// }

// export default App;
