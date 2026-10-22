
import { useState } from "react";
import "./Main.css";
import sabores from "../../mock/sabores.json";

function Main() {
    const [cardAberto, setCardAberto] = useState(null);
    const [fechando, setFechando] = useState(false);

    function abrirCard(id) {
        if (cardAberto === id) {
            setFechando(true);

            setTimeout(() => {
                setCardAberto(null);
                setFechando(false);
            }, 300);
        } else {
            setCardAberto(id);
            setFechando(false);
        }
    }

    return (
        <div className="sabadores_and_valores">
            <h2 className="title_sabores">Sabores & valores</h2>

            <div className="list_sabores">
                {sabores.map((sabor) => (
                    <div key={sabor.id}>
                        <div
                            className="sabor"
                            onClick={() => abrirCard(sabor.id)}
                        >
                            <div className="title">
                                <h2>{sabor.nome}</h2>
                                <p className="preco">
                                    R$ {sabor.preco}
                                </p>
                            </div>

                            <p>{sabor.descricao}</p>
                        </div>

                        {cardAberto === sabor.id && (
                            <div
                                className={`imagem-sabor ${
                                    fechando ? "saindo" : "entrando"
                                }`}
                            >
                                <img
                                    src={sabor.imagem}
                                    alt={sabor.nome}
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <p>
                Preço por unidade. Consulte disponibilidade dos sabores.
            </p>
        </div>
    );
}

export default Main;
