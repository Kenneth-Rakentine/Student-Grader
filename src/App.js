import { useContext } from 'react';
import './App.css';
import Student from './components/Student';
import { AppContext } from './contexts/app_context';


function App() {
  let { students } = useContext(AppContext)
  return (
    <div className="App">
      {students.map((student) => {
        return <Student student={student}/>
      })};
    </div>
  );
};

export default App;
