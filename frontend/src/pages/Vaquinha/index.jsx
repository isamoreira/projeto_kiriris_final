import NavigationBar from '../../components/NavigationBar';
import './vaquinha.css';

function Vaquinha() {
    return (
        <>
            <NavigationBar />
            <h1 id="title-vaquinha">Vaquinha</h1>
            <br/>
            <div className="vaquinha-container">
                <p>Com o advento da Pandemia do novo corona virús a comunidade Kiriri vem passando por diversas problemáticas.</p>
                <p>Agora com a retomada da economia se tornou necessário reformar e reorganizar as ações e produções no território.</p>
                <p>Sendo assim, queremos pedir a contribuição de vocês para nossa Vaquinha, que ajudará a comunidade no conserto de seus maquinários para novamente produzir seus produtos como farinha,
                    fécula de mandioca, beiju e outros.</p>

                <p>Para apoiar, basta enviar um pix para:</p>
                <p id="p-chave">ubmkiririmarcacao@gmail.com</p>
                <p>A comunidade Kiriri agradece!!!</p>
            </div>
        </>
    )
}

export default Vaquinha;