import React from "react";
import "./Table.css";
import {useEffect, useState} from "react";
import Axios from "axios";

const Table = () =>{

    const [listaDados, setListaDados] = useState([]);

    const getDados = () => {
        Axios.get('http://localhost:3001/getLista').then((response) =>{
            setListaDados(response.data);
        });
    }


    useEffect(()=>{
        Axios.get('http://localhost:3001/getTotal').then((response)=>{
            setListaDados(response.data);
        });
        
    }, []);

    return(

        <div className="Table">
            <table>
                <thead>
                    <td>GPN</td>
                    <td>Nome</td>
                    <td>Salario</td>
                    <td>Employee Status</td>
                    <td>Pais</td>
                    <td>Gender</td>
                    <td>Location City</td>
                    <td>Service Line</td>
                    <td>SMU Name</td>
                    <td>SUB SL</td>
                    <td>Rank Atual</td>
                    <td>Exp Lev Atual</td>
                    <td>Job Title</td>
                    <td>Hiring Date</td>
                    <td>Proportional Hiring Date</td>
                    <td>Utilizacao</td>
                    <td>Promocao</td>
                    <td>LEAD Atual</td>
                    <td>Rank Futuro</td>
                    <td>Exp Level Futuro</td>
                </thead>

                <tbody>
                    <td>{listaDados.map((val) => {return <h4>Total:{val.GPN}</h4>})}</td>
                    <td>{listaDados.map((val) => {return <h4>Total:{val.GPN}</h4>})}Nome</td>
                    <td>{listaDados.map((val) => {return <h4>Total:{val.GPN}</h4>})}Salario</td>
                    <td>{listaDados.map((val) => {return <h4>Total:{val.GPN}</h4>})}Employee Status</td>
                    <td>{listaDados.map((val) => {return <h4>Total:{val.GPN}</h4>})}Pais</td>
                    <td>{listaDados.map((val) => {return <h4>Total:{val.GPN}</h4>})}Gender</td>
                    <td>{listaDados.map((val) => {return <h4>Total:{val.GPN}</h4>})}Location City</td>
                    <td>{listaDados.map((val) => {return <h4>Total:{val.GPN}</h4>})}Service Line</td>
                    <td>{listaDados.map((val) => {return <h4>Total:{val.GPN}</h4>})}SMU Name</td>
                    <td>{listaDados.map((val) => {return <h4>Total:{val.GPN}</h4>})}SUB SL</td>
                    <td>Rank Atual</td>
                    <td>Exp Lev Atual</td>
                    <td>Job Title</td>
                    <td>Hiring Date</td>
                    <td>Proportional Hiring Date</td>
                    <td>Utilizacao</td>
                    <td>Promocao</td>
                    <td>LEAD Atual</td>
                    <td>Rank Futuro</td>
                    <td>Exp Level Futuro</td>

                </tbody>
            </table>
        </div>
    )
}

export default Table;