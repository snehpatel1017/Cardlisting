
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { data } from "./Data"
import CardList from './CardList';
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [filterResult, setfilterResult] = useState([]);
  var finallist = []
  var catagary = "";
  function searchfunction(term) {
    // console.log(term)
    setSearchTerm(term);
    if (term !== "") {
      var list = data;
      if (searchResult.length > 0) list = searchResult;
      // console.log(term)
      const newlist = list.filter((card) => {
        const name = card.name.toLowerCase();
        if (name.startsWith(searchTerm)) return true
        else return false
      });
      setSearchResult(newlist);
    }

    // console.log(searchResult)
    finallist = searchResult.concat(filterResult)
    // console.log(searchResult)
  }
  function filterHandler(term) {

    catagary = term
    console.log(catagary)
    if (catagary !== "all") {

      const newlist = data.filter((card) => {

        if (card.card_type === catagary) return true
        else return false
      });
      // console.log(newlist)
      setfilterResult(newlist);
    }
    finallist = searchResult.concat(filterResult)
    // console.log(filterResult)
    // finallist = searchResult.concat(filterResult)
    console.log(finallist)

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
          render={(props) => <CardList {...props} cardlist={finallist.length === 0 ? data : finallist} owner_id={1} term={searchTerm} searchHandler={searchfunction} filterHandler={filterHandler} />}
        ></Route>
        <Route path="/all" exact
          render={(props) => <CardList {...props} cardlist={finallist.length === 0 ? data : finallist} term={searchTerm} searchHandler={searchfunction} filterHandler={filterHandler} />}
        ></Route>
        {/* <Route path="/blocked" exact ></Route> */}
      </Router>
    </div>
  );
}

export default App;
