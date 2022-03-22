import './style.css';
import artesanato1 from '../../assets/img/01-Artesanato-Kiriris.jpg';
import artesanato2 from '../../assets/img/2.png';
import artesanato3 from '../../assets/img/3.png';
import Hicon from '../../assets/img/icons/3409883.png';
import NavigationBar from '../../components/NavigationBar';
import m1 from '../../assets/img/m1.jpeg';
import m2 from '../../assets/img/m2.jpeg';
import m3 from '../../assets/img/m3.jpg';
import m4 from '../../assets/img/m4.jpg';
import m5 from '../../assets/img/m5.jpg';
import a6 from '../../assets/img/6.jpg';

function Produtos() {
    return (
        <>
            <NavigationBar />
            <div className="container main-produtos">
                <span className="title-artesanato-mandiocultura">
                    <img src={Hicon} alt="icon" className="h-icon"></img>
                    <h1>Artesanato</h1>
                    <img src={Hicon} alt="icon" className="h-icon"></img>
                </span>
                <div className="row row-cols-1 row-cols-md-4 g-4 c-cards">
                    <hr className="hr-style" />
                    <div className="col">
                        <div className="card">
                            <img src={artesanato1} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Máscara</h5>
                               
                                <br />
                                <button type="button" className="btn btn-compra"><i className="fa fa-info"></i> Detalhes</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={artesanato3} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Chocalho</h5>
                                
                                <br />
                                <button type="button" className="btn btn-compra"><i className="fa fa-info"></i> Detalhes</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={artesanato2} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Máscara</h5>
                                
                                <br />
                                <button type="button" className="btn btn-compra"><i className="fa fa-info"></i> Detalhes</button>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img src={a6} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Tigela</h5>
                               
                                <br />
                                <button type="button" className="btn btn-compra"><i className="fa fa-info"></i> Detalhes</button>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>

                <span className="title-artesanato-mandiocultura" id="m-st">
                    <img src={Hicon} alt="icon" className="h-icon"></img>
                    <h1>Mandiocultura</h1>

                    <img src={Hicon} alt="icon" className="h-icon"></img>
                </span>
                <div className="row row-cols-1 row-cols-md-4 g-4 c-cards">
                  

                    <div className="col">
                        <div className="card">
                            <div>
                                <img src={m1} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">Farinha</h5>
                                
                                    <br />
                                    <button type="button" className="btn btn-compra"><i className="fa fa-info"></i> Detalhes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={m2} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Beiju</h5>
                               
                                <br />
                                <button type="button" className="btn btn-compra"><i className="fa fa-info"></i> Detalhes</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={m3} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Fécula</h5>
                                
                                <br />
                                <button type="button" className="btn btn-compra"><i className="fa fa-info"></i> Detalhes</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={m4} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Mandioca</h5>
                               
                                <br />
                                <button type="button" className="btn btn-compra"><i className="fa fa-info"></i> Detalhes</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={m5} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Beiju</h5>
                                
                                <br />
                                <button type="button" className="btn btn-compra"><i className="fa fa-info"></i> Detalhes</button>
                            </div>
                        </div>
                    </div>
                    <hr className="hr-style" />
                </div>
            </div>
        </>
    );
}

export default Produtos;