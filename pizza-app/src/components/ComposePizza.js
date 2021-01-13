import React, {useState, useEffect} from 'react'
import data from '../data.json'
import Price from './Price'

function ComposePizza(props) {
    
    const [ingredients, setIngredient] = useState([]);
    const [cost, setCost] = useState(0);
    const [base, setBase] = useState(700);

    useEffect( () => {
        data.map(ingredient => {
            ingredient.checked = ingredient.koszt === 0 ? true : false;
            return ingredient;
        })

        setIngredient(data);
    }, [])

    useEffect( () => {
        setCost(
            ingredients.reduce( (sum, ingredient) => {
                return ingredient.checked ? sum + ingredient.koszt : sum;
            }, base)
        );

    }, [base,ingredients])

    const changeCheckboxHandler = (event) => {
        setIngredient(
            ingredients.map(element => {
                if(element.nazwa === event.nazwa){
                    element.checked = !element.checked;
                }
                return element;
            })
        );
    }

    const changeSize = (event) => {
        setBase(event);
    }

    const addPizza = () => {

        let wielkosc = 'Średnia';

        if(base === 600){
            wielkosc = 'Mała'
        } else if(base === 800){
            wielkosc = 'Duża'
        }

        let pizza = {
            wielkosc: wielkosc, 
            koszt: cost, 
            ingredients: []
        };

        ingredients.forEach(ingredient => {
            if(ingredient.checked) pizza.ingredients.push(ingredient);
        })
        props.getPizza(pizza);
        resetPizza();
    }

    const resetPizza = () => {
        ingredients.forEach( i => {
            i.koszt === 0 ? i.checked = true : i.checked = false;
        })

        setBase(700);
    }

    return (
        <div className="compose">
            <h1>Skomponuj swoją pizzę</h1>
            <h4>Cena: <Price cena={cost} /></h4>

            <div>
            <img 
            className={"pizzaSize small "+(base === 600 ? 'clicked':'')}
            onClick={() => changeSize(600)}
            src={process.env.PUBLIC_URL + '/assets/size.png'} 
            alt='small' />
            <img 
            className={"pizzaSize medium "+(base === 700 ? 'clicked':'')}
            onClick={() => changeSize(700)}
            src={process.env.PUBLIC_URL + '/assets/size.png'} 
            alt='medium' />
            <img 
            className={"pizzaSize large "+(base === 800 ? 'clicked':'') }
            onClick={() => changeSize(800)}
            src={process.env.PUBLIC_URL + '/assets/size.png'} 
            alt='large' />
            </div>

            <div>
               <button onClick={() => addPizza()}>Dodaj</button> 
            </div>
            
                <div className="ingredients">
            
                 {
                ingredients.map( (ingredient, index) => {
                    return(
                        <div key={index} className="ingredientRow">
                            <input type="checkbox" checked={ingredient.checked} onChange={() => changeCheckboxHandler(ingredient)}/>
                            <img 
                            className="ingredient_icon" 
                            src={process.env.PUBLIC_URL + '/assets/' + ingredient.nazwa + '.png'} 
                            alt={ingredient.nazwa} />

                            <p>{ingredient.nazwa}</p>
                            {ingredient.koszt === 0 ? 
                            <p> gratis</p>:  
                            <Price cena={ingredient.koszt} /> }
                           
                           
                        </div>
                    )
                })
                 }
                </div>
        </div>
    )
}

export default ComposePizza
