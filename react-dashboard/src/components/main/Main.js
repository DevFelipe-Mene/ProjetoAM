import "./Main.css";
import hello from "../../assets/hello.svg";
import Chart from "../charts/Charts";

const Main = () =>{
    return(
        <main>
            <div class = "main_container">  
                <div class = "main_title">
                    <img src = {hello} alt = "hello"/>
                    <div class = "main_hello">
                        <h1>Olá,</h1>
                        <h3>Bem-vindo so seu dashboad</h3>
                    </div>
                </div>
                
                <div class = "card">
                    <i class = "fa fa-user-0 fa-2x text-black"></i>
                    <div class = "card_inner">
                        <p class = "text-pimary-p">Numero de funcionarios</p>
                        <span class = "font-bold text-title">XXX</span>
                    </div>
                </div>

                <div class = "card">
                    <i class = "fa fa-money fa-2x text-red"></i>
                    <div class = "card_inner">
                        <p class = "text-pimary-p">Budget</p>
                        <span class = "font-bold text-title">XXX</span>
                    </div>
                </div>

                <div class = "card">
                    <i class = "fa fa-check fa-2x text-yellow"></i>
                    <div class = "card_inner">
                        <p class = "text-pimary-p">Informação</p>
                        <span class = "font-bold text-title">XXX</span>
                    </div>
                </div>

                <div class = "charts">
                    <div class = "charts_left">
                        <div class = "charts_left_title">
                            <div>
                                <h1>Reporte Diario</h1>
                            </div>
                        </div>
                        <i class = "fa fa-usd"></i>
                    </div>
                    <Chart/>
                </div>

                <div class = "charts_right">
                    <div class = "charts_right_title">
                        <div>
                            <h1>Reporte de Status</h1>
                        </div>
                    </div>
                    <i class = "fa fa-use"></i>
                </div>

                <div class = "charts_right_cards">
                    <div class = "card1">
                        <h1>Entrada</h1>
                        <p> R$7000,00</p>
                    </div>

                    <div class = "card2">
                         <h1>Entrada</h1>
                         <p> R$7000,00</p>
                     </div>

                    <div class = "card3">
                        <h1>Entrada</h1>
                        <p> R$7000,00</p>
                    </div>

                    <div class = "card4">
                        <h1>Entrada</h1>
                        <p> R$7000,00</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;