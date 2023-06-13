import stag from '../images/stag.png'
import btag from '../images/btag.png'
import './App.css'
export default function Card(props) {
    // console.log("done")
    return (
        <div className="card">
            <div className="content">
                <div>Name : {props.card.name}</div>
                <div>Budgest : {props.card.budget_name}</div>
                <div>Spent_Value : {props.card.spent.value}</div>
                <div>Spent_Currency : {props.card.spent.currency} </div>
                <div>Available_Value : {props.card.available_to_spend.value} </div>
                <div>Available_Currency : {props.card.available_to_spend.currency} </div>
                {props.card.card_type === 'burner' ? (<div>Expiry : {props.card.expiry}</div>) : (<></>)}
                <div>Status : {props.card.status}</div>

            </div>
            <img src={props.card.card_type === 'burner' ? btag : stag} className='card_img' style={{ width: 50, height: 50 }}></img>

        </div>
    );
}