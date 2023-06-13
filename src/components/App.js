
import { BrowserRouter as Router, Route } from "react-router-dom"
import { data } from "./Data"
import CardList from './CardList';
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";

function App() {

  const [finallist, setfinallist] = useState([]);
  const [searchstring, setSearchString] = useState("");
  const [filter, setFilter] = useState("");
  var cand = [];
  var sr = [];


  function searchfunction(term) {



    setSearchString(term)


  }
  function filterHandler(term) {



    setFilter(term)

  }





  return (
    <div className="App">
      <Router>
        <div className="containerMy">
          <Link to="/your">
            <p>your</p>
          </Link>
          <Link to="/all">
            <p>All</p>
          </Link>
          <Link to="/blocked">
            <p>Blocked</p>
          </Link>
        </div>
        <Route path="/your" exact
          render={(props) => <CardList {...props} cardlist={data} search={searchstring} filter={filter} owner_id={1} searchHandler={searchfunction} filterHandler={filterHandler} />}
        ></Route>
        <Route path="/all" exact
          render={(props) => <CardList {...props} cardlist={data} search={searchstring} filter={filter} searchHandler={searchfunction} filterHandler={filterHandler} />}
        ></Route>
        <Route path="/blocked" exact ></Route>
      </Router>
    </div>
  );
}

export default App;
