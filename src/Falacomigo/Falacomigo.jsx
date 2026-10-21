import "./Falacomigo.css";
function Falacomigo() {
    return (
        <div className="falecomigo">
            <h2>Fale comigo</h2>
            <p>Peça pelo WhatsApp ou acompanhe as novidades e os sabores novos no Instagram</p>
            <div className="redessociais">
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                    <img src="/path/to/whatsapp-icon.png" alt="WhatsApp" />
                </a>
                <a href="https://www.instagram.com/seu_perfil" target="_blank" rel="noopener noreferrer">
                    <img src="/path/to/instagram-icon.png" alt="Instagram" />
                </a>
            </div>
        </div>
    )

}
export default Falacomigo;