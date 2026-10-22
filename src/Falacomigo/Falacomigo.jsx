import "./Falacomigo.css";
function Falacomigo() {
    return (
        <div className="falecomigo">
            <h2>Fale comigo</h2>
            <p>Peça pelo WhatsApp ou acompanhe as novidades e os sabores novos no Instagram</p>
            <div className="redessociais">
                <a className="whats" href="https://wa.me/5527997830578" target="_blank" rel="noopener noreferrer">
                <img src="../whatsapp.svg" alt="WhatsApp" />WhatsApp
                </a>
                <a className="instagram" href="https://www.instagram.com/breno_sp7" target="_blank" rel="noopener noreferrer">
                    <img src="../instagram.svg" alt="Instagram" />Instagram
                </a>
            </div>
        </div>
    )

}
export default Falacomigo;
