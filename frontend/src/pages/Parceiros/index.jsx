import NavigationBar from '../../components/NavigationBar';
import './parceiros.css';

function Parceiros() {
    return (
        <>

            <NavigationBar />
            <div className="parceiros-container">
                <h1 id="title-parceiros">Parceiros</h1>
                <br />
                <div className="boxes-parceiros">
                    <div>
                        <h5>Escoar Brasil</h5>
                        <br />

                        <p>Salvador e Região metropolitana</p>
                        <p>Delivery</p>
                        <a href="https://www.escoarbrasil.com.br" target="_blank" rel="noreferrer"> https://www.escoarbrasil.com.br</a>
                    </div>
                    <br />
                    <br />
                    <div>
                        <h5>Coophub</h5>
                        <br />
                        <p>Juazeiro</p>
                        <p>Loja Física</p>
                        <p>Endereço: R. Barão de Cotegipe, 11 - Centro</p>
                        <a href="https://coophub.com.br" target="_blank" rel="noreferrer"> https://coophub.com.br/</a>
                    </div>
                    <br />
                    <br />
                    <div>
                        <h5>Bodega UniSol</h5>
                        <br />
                        <p>Salvador</p>
                        <p>Loja Física</p>
                        <p>R. Frei Vicente, 20 - Pelourinho.</p>
                        <a href="https://www.unisolbahia.com.br" target="_blank" rel="noreferrer"> https://www.unisolbahia.com.br</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Parceiros;