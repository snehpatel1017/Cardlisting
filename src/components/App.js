
import { BrowserRouter as Router, Route } from "react-router-dom"
import { data } from "./Data"
import CardList from './CardList';
import { Link } from 'react-router-dom'
import { useState } from "react";

function App() {

  const [finallist, setfinallist] = useState([]);
  var cand = [];
  var sr = [];

  var category = "";
  var search = "";
  var EmptyMessage = "";
  function searchfunction(term) {
    search = term

    var list = data;

    const newlist = list.filter((card) => {
      const name = card.name.toLowerCase();
      if (name.startsWith(term) || term === "") return true
      else return false
    });
    // console.log(newlist)
    sr = newlist
    console.log('sr')
    console.log(sr)
    filterHandler(category)

    // console.log(searchResult)
  }
  function filterHandler(term) {


    category = term

    var list = data;
    if (sr.length > 0) list = sr;
    cand = list.filter((card) => {

      if (card.card_type === term || term === "all" || term === "") return true
      else return false
    });
    console.log(category)
    console.log("cand")
    console.log(cand)
    if (cand.length === 0) {
      EmptyMessage = "No data Found"
    }
    // console.log(EmptyMessage)
    setfinallist(cand)
    // finallist = newlist.concat(searchResult)
  }


  // console.log(filterResult)
  // finallist = searchResult.concat(filterResult)
  // console.log(finallist)


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
          render={(props) => <CardList {...props} cardlist={finallist.length === 0 ? data : finallist} owner_id={1} searchHandler={searchfunction} filterHandler={filterHandler} empty={EmptyMessage} />}
        ></Route>
        <Route path="/all" exact
          render={(props) => <CardList {...props} cardlist={finallist.length === 0 ? data : finallist} searchHandler={searchfunction} filterHandler={filterHandler} empty={EmptyMessage} />}
        ></Route>
        <Route path="/blocked" exact ></Route>
      </Router>
    </div>
  );
}

export default App;
