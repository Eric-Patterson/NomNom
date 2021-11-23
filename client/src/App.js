import { useState } from 'react'
import SuperheroDetail from './components/SuperheroDetail';
import SuperheroList from './components/SuperheroList';

import './App.css';


function App() {

  const [selectedSuperheroId, setSelectedSuperheroId] = useState()

  return (
    <div className="App">
      {/* { selectedSuperheroId ? 
          <div>
            <button onClick={() => setSelectedSuperheroId(undefined)}>Go Back</button>
            <SuperheroDetail  superheroId={selectedSuperheroId}/> 
          </div>
        : 
        <SuperheroList setSelectedSuperheroId={setSelectedSuperheroId} />  
      } */}

      { !selectedSuperheroId && <SuperheroList setSelectedSuperheroId={setSelectedSuperheroId} />  }
      { selectedSuperheroId && <div>
            <button onClick={() => setSelectedSuperheroId(undefined)}>Go Back</button>
            <SuperheroDetail  superheroId={selectedSuperheroId}/> 
          </div>
      }
    </div>
  );
}

export default App;
