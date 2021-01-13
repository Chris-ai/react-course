import React, {useState, useEffect} from 'react'
import { withRouter } from 'react-router-dom'
import Price from './Price'


function Order(props) {

    const [order, setOrder] = useState([]);
    const [cost,setCost] = useState(0);

    useEffect(() => {
        if(props.newPizza){
             setOrder(ordr => [...ordr, props.newPizza]); // ...order -> stara tabliza
        }
    }, [props.newPizza])

    useEffect(()=> {
        let cost = order.reduce( (sum,pizza) => sum + pizza.koszt,0);
        setCost(cost)
    }, [order])

    const deletePizza = index => {
        let or =  order.filter((pizza,i) => i !== index)
        setOrder(or);
    }

    const payForOrder = () => {
        props.history.push('/addOrder')
    }

    return (
        <div>
            <h1> Twoje Zamówienie</h1>
            {
                order.map( (pizza,index)=>{
                    return(
                        <div key={index} className="orderRow">
                            <h3>
                                {index+1}# {pizza.wielkosc} pizza 
                                ({pizza.ingredients.length} <HowManyIngredients amount={pizza.ingredients.length}/>)
                                &nbsp; | &nbsp; 
                                {(pizza.koszt/100).toFixed(2)} zł
                            </h3>
                            <h3 onClick={() => deletePizza(index)}>X</h3>
                        </div>
                    )
                })
            }
            <p>-------------------------------------------------</p>
            <p>Do zapłaty: <Price cena={cost} /> </p>
            <button onClick={() => payForOrder()} >Zapłać</button>
        </div>
    )
}

function HowManyIngredients({amount}){
    if(amount === 1){
        return "dodatek"
    } else if( amount > 1 && amount < 5){
        return "dodatki"
    } else return "dodatków"
}

export default withRouter(Order);
