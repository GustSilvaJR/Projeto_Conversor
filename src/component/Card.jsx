import React from 'react'
import Conversor from './Conversor'

import '../style/card.css'

export default function Card(props) {

     const moedas = React.Children.map(props.children, moeda =>{
         return moeda.props
     })

    return (
        <div className='col-md-5 mt-5 myCard '>
            <div className="card text-center">

                <div className="card-header">
                    {props.moedaA} to {props.moedaB}
                </div>

                <div className="card-body">
                    <Conversor {...props}/>
                </div>

            </div>
        </div>
    )
}