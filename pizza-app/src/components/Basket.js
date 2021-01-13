import React,{useState} from 'react'
import { withRouter } from 'react-router-dom'


function Basket(props) {

    const comeback = () => {
        props.history.push('/')
    }

    return (
                    <div>
                        <h1>Mój Koszyk</h1>
                        <button onClick={() => comeback()} >Powrót</button>
                    </div>
    );
}

export default withRouter(Basket);
