import './App.css';
import Details from './Components/Details/Details';
import SideNav from './Components/SideNav/SideNav';
import User from './Components/User/User';

function App() {
  return (
    <div className="row">
      <div className="col-1">
        <SideNav />
      </div>
      <div className="col-3">
        <User />
      </div>
      <div className="col-8">
        <Details />
      </div>
    </div>
  );
}

export default App;
