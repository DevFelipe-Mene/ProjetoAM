import React from "react";
import "./SearchBar.css";
import Axios from "axios";
import {useEffect, useState} from "react";


const SearchBar = () =>{

    const [listaDados, setListaDados] = useState([]);

    const getDados = () => {
        Axios.get('http://localhost:3001/getLista').then((response) =>{
            setListaDados(response.data);
        });
    }

    return(
        <div className="SearchBar">
            <form name="FormBusca" id="FormBusca" method="get">
                <input type="text" name="Busca" id="Busca" placeholder="Buscar funcionario"/>
                <button className="botao" onClick={getDados}>Pesquisar</button>
            </form>
        </div>
    )
}

export default SearchBar;