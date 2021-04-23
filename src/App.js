import './Reset.css'
import './App.css'
import Header from './Components/Header/Header'
import routes from './routes';

const App=()=>{
  return (
    <div className="App">
      <Header/>
      {routes}
    </div>
  );
}

export default App;
