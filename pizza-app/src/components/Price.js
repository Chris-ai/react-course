import React from 'react'

function Price(props) {
    return (
       <p className="price">{((props.cena / 100).toFixed(2))} zł</p>
    )
}

export default Price
