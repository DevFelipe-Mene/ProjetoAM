import "./Main.css";
import hello from "../../assets/hello.svg";
import Chart from "../charts/Charts";
import {useState} from "react";
import Axios from "axios";
import React from "react";

const Main = () =>{

    const[nome, setNome] = useState("");
    const[salario, setSalario] = useState(0);
    const[pais, setPais] = useState("");

    const [listaFunc, setListaFunc] = useState([]);
    const [listaBudget, setListaBudget] = useState([]);
    const [listaTotal, setListaTotal] = useState([]);

    const adicionar = () =>{
        Axios.post('http://localhost:3001/adicionar', {nome:nome, salario:salario, pais:pais}).then(() =>{
            console.log("sucess");
        });
    };

    const getLista = () => {
        Axios.get('http://localhost:3001/getLista').then((response) =>{
            setListaFunc(response.data);
        });
    }

    const getBudget = () => {
        Axios.get('http://localhost:3001/getBudget').then((response) =>{
            setListaBudget(response.data);
        });
    }

    const getTotal = () => {
        Axios.get('http://localhost:3001/getTotal').then((response) =>{
            setListaTotal(response.data);
        });
    }

    return(
        <main>
            <div className = "main_container">  
                <div className = "main_title">
                    <img src = {hello} alt = "hello"/>
                    <div className = "main_hello">
                        <h1>,</h1>
                        <h3>Bem-vindo so seu dashboad</h3>
                    </div>
                </div>
                
                <div className = "card">
                    <i className = "fa fa-users fa-2x text-black"></i>
                    <div className = "card_inner">
                        <p className = "text-pimary-p">Número de funcionários</p>
                        <span className = "font-bold text-title" onLoad={getTotal}>
                           
                            {listaTotal.map((val) =>{return <div>{val.num}</div>})}
                            
                        </span>
                    </div>
                </div>

                <div className = "card">
                    <i className = "fa fa-money fa-2x text-green"></i>
                    <div className = "card_inner">
                        <p className = "text-pimary-p">Budget</p>
                        <div onLoad={getBudget}>
                            <p>{listaBudget.map((val) =>{return <div>{val.budget}</div>})} </p>  
                        </div>
                            
                    </div>
                </div>

                <div className = "card">
                    <i className = "fa fa-check fa-2x text-yellow"></i>
                    <div className = "card_inner">
                        <p className = "text-pimary-p">Informação</p>
                        <span className = "font-bold text-title">XXX</span>
                    </div>
                </div>

                <div className = "charts">
                    <div className = "charts_left">
                        <div className = "charts_left_title">
                            <div>
                                <h1>Reporte Diario</h1>
                            </div>
                        </div>
                        <i className = "fa fa-usd"></i>
                    </div>
                    <Chart/>
                </div>

                <div className = "charts_right">
                    <div className = "charts_right_title">
                        <div>
                            <h1>Reporte de Status</h1>
                        </div>
                    </div>
                    <i className = "fa fa-use"></i>
                </div>

                <div className = "charts_right_cards">
                    <div className = "card1">
                        <h1>Entrada</h1>
                        <p> R$7000,00</p>
                    </div>

                    <div className = "card2">
                         <h1>Entrada</h1>
                         <p> R$7000,00</p>
                     </div>

                    <div className = "card3">
                        <h1>Entrada</h1>
                        <p> R$7000,00</p>
                    </div>

                    <div className = "card4">
                        <h1>Entrada</h1>
                        <p> R$7000,00</p>
                    </div>
                </div>

                <div className="form">
                    <div className = "info">
                        <label>Nome:</label>
                        <input type="text" onChangeCapture={(event) =>{setNome(event.target.value);}}/>
                        <label>Salario:</label>
                        <input type="int" onChangeCapture={(event) =>{setSalario(event.target.value);}}/>
                        <label>Pais:</label>
                        <input type="text" onChangeCapture={(event) =>{setPais(event.target.value);}}/>
                        <button onClick={adicionar}>Adicionar</button>
                    </div>
                </div>

                <br/>

                <div className="listar">

                    <button onClick={getLista}>Mostrar funcionarios</button>

                    {listaFunc.map((val) =>{

                        return <div>{val.nome}</div>;

                    })}

                </div>

            </div>
        </main>
    )
}

export default Main;