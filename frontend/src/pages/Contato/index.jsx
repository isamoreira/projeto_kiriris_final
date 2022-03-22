import './style.css';
import MessageIcon from '../../assets/img/icons/messages.png';
import NewsIcon from '../../assets/img/icons/news.png';
import NavigationBar from '../../components/NavigationBar';

function Contato() {
    return (
        <>
            <NavigationBar/>
            <main className="container main-contato">
                <div className="header-contato">
                    <h1>Quer entrar em contato conosco?</h1>
                    <br/>
                    <img src={MessageIcon} alt="icon mensagem" id="baloon" />
                </div>
                <div className="container-formulario-contato">
                    <div className="row">
                        <div className="formulario-contato">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="" className="control-label label-input">Nome: </label>
                                    <input htmlFor="" className="form-control styletrue" placeholder="Nome" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className="control-label">Email: </label>
                                    <input htmlFor="" className="form-control styletrue" placeholder="E-mail" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className="control-label">Telefone: </label>
                                    <input htmlFor="" className="form-control styletrue" placeholder="Telefone" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className="control-label">Mensagem: </label>
                                    <textarea className="form-control" name="w3review" rows="4" cols="50"
                                        placeholder="Digite a sua mensagem" id="ta"></textarea>
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Enviar" className="btn btn-primary"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="newsletter">
                    <h2>Quer receber mais notícias dos Povos Kiriris?</h2>
                    <h4>Assine a nossa newsletter!</h4>
                    <br />
                    <form>
                        <div className="form-group input-group">
                            <input htmlFor="" className="form-control" placeholder="exemplo@email.com" />
                            <input type="submit" value="Enviar" className="btn" id="btn-newsletter" />
                        </div>
                    </form>
                    <img src={NewsIcon} alt="Icon news" id="newsicon" />
                </div>
            </main>
        </>
    );
}
export default Contato;