import "./Main.css";
import sabores from "../../mock/sabores.json";
function Main(){
    return(
        <div className="sabadores_and_valores">
            <h2 className="title_sabores">Sabores & valores</h2>
            <div className="list_sabores">
                {sabores.map((sabor) => (
                    <div className="sabor" key={sabor.id}>
                        <div className="title">
                            <h2>{sabor.nome}</h2>
                            <p className="preco">R$ {sabor.preco}</p>  
                        </div>
                        <p>{sabor.descricao}</p>
                    </div>
                ))}
            </div>
        </div>
    )

}
export default Main;