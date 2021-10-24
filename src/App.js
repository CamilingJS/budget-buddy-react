import './App.css';
import {Title} from './Components/Title';
import {YourBalance} from './Components/YourBalance'
import {IncExpContainer} from './Components/IncExpContainer'
import {History} from './Components/History'
import {AddNewTransactions} from './Components/AddNewTransactions'

import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
     <Title />
     <div className="container">
     <YourBalance />
     <IncExpContainer />
     <History />
     <AddNewTransactions />
     </div>
    </GlobalProvider>
  );
}

export default App;
