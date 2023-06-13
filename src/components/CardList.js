import Card from "./Card"
import { useRef } from "react"
export default function CardList(props) {
    // console.log(props.cardlist)
    const inputEl = useRef("");
    const searchRef = useRef("");
    function getSecrchterm() {
        props.searchHandler(inputEl.current.value)
    }
    function getFilter() {
        props.filterHandler(searchRef.current.value)
    }
    var owner_id = -1
    if (props.owner_id) {

        owner_id = props.owner_id
    }
    console.log(owner_id)
    const list = props.cardlist.filter((card) => {
        if (owner_id === -1) return true
        else {
            if (owner_id === card.owner_id) return true
            return false
        }
    });
    const newlist = list.map((card) => {
        return <Card card={card} />
    })
    return (
        <div className="main">
            <div className="ui search">
                <div className="ui icon input">
                    <input ref={inputEl} type="text" className="promt" value={props.term} onChange={getSecrchterm} />
                    <i className="search icon" />
                    <select onChange={getFilter} ref={searchRef} >
                        <option value="all">All</option>
                        <option value="burner">Burner</option>
                        <option value="subscription">Subscription</option>
                    </select>
                </div>
            </div>

            <div className="ui celled list App"> {newlist}</div>
        </div>

    );
}