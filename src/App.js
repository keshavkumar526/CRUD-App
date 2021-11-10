import * as React from 'react';
import Table from './Components/Table'
import Navbar from './Components/Navbar'
import { Provider } from './context';

function App (){
    return (
        <div>
          <Provider>
             <Navbar />
              <Table />
          </Provider>
        </div>
    )
}

export default App

