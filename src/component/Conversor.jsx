import React, { useState } from 'react'

export default function Conversor(props) {

    //--------STATES----------
    const [moedaA_valor, setMoedaA_valor] = useState(null)
    const [moedaB_valor, setMoedaB_valor] = useState(0)
    //--------STATES----------

    function converter() {

        let de_para = `${props.moedaA}_${props.moedaB}`
        let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=053396712e7e61b4fb18`

        fetch(url)
            .then(resp => resp.json())
            .then(respJson => {
                let cotacao = respJson[de_para]
                setMoedaB_valor(parseFloat(moedaA_valor * cotacao).toFixed(2))
            })

        /* INFOS 
        //Eu faço uma requisição no url que eu passar como parametro para fetch, e recebo uma promisse como resposta. Contendo informações diversas além do que eu requisitei.
        
        //fetch() me retorna uma Promisse, e para acessála eu preciso utilizar o .then, e a partir dele converter ela em um json
        //Com .then eu vou tratar o retorno da função fetch, transformando o valor retornado em um json, para que eu possa acessar seus valores posteriormente
        */
    }

    return (
        <div>
            <div className="input-group mb-3">

                <input type="text" className="form-control " placeholder=""
                    onChange={(event) => {
                        setMoedaA_valor(event.target.value)
                    }} />

                {/* 'event' vem do 'onChange' que dispara ele. A partir desse evento que foi 
                disparado, eu consigo pegar o 'target', que vai me indicar onde está o foco
                */}

                <input className="btn btn-outline-secondary" type="button" value='Converter'
                    onClick={converter} />
            </div>

            <span className="input-group-text" id="basic-addon1" onChange={converter()}>{props.moedaA} : {moedaA_valor===null || moedaA_valor==='' ? '0.00' : moedaA_valor}</span>

            <span className="input-group-text mt-4" id="basic-addon1">{props.moedaB} : {moedaB_valor}</span>
        </div>

    )
}