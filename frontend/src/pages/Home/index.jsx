import './style.css';
import KiririsHeader from '../../assets/img/KiririHeader.jpg';
import OneJPG from '../../assets/img/image1.jpg';
import TwoJPG from '../../assets/img/image2.jpg';
import ThreeJPG from '../../assets/img/image3.jpg';
import One from '../../assets/img/1.png';
import Two from '../../assets/img/2.png';
import Three from '../../assets/img/3.png';
import Four from '../../assets/img/4.jpg';
import Five from '../../assets/img/5.jpg';
import Six from '../../assets/img/6.jpg';
import Leaf from '../../assets/img/icons/leaf.png';
import Forest from '../../assets/img/icons/forest.png';
import KiririsIstr from '../../assets/img/kiriris_imagem.jpg';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import PlantPot from '../../assets/img/icons/plant-pot.png';
import { HashLink } from 'react-router-hash-link';


function Home() {
    return (
        <>
            <header className="header">

                <div className="container-header" id="startsection">
                    <div className="container-fluid">

                        <nav className="homenav navbar fixed-top navbar-expand-lg navbar-light" id="navB">
                            <div className="container-fluid">
                                <Link to="#" className="navbar-brand"></Link>
                                <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
                                    data-mdb-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <i className="fas fa-bars"></i>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/catalogo" className='nav-link'>Produtos</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/contato" className="nav-link">Contato</Link>
                                        </li>
                                        <li className="nav-item">
                                            <HashLink to="#c-ajuda" className="nav-link">Como ajudar</HashLink>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/login" className="nav-link"><FiLogIn id="i-login"/>Login</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>

                    </div>

                    <div className="img-wrapper-header">
                        <img src={KiririsHeader} alt="Povos Kiriris em roda" />

                    </div>

                    <div className="banner-header">
                        <h1>Conheça os Kiriris</h1>
                        <br />
                        <h6>Uma breve história desses povos</h6>
                        <p>Aprenda um pouco sobre a cultura, conheça alguns dos seus problemas e saiba como ajudá-los</p>
                        <br />
                        <a href="#main-section" id="btn-header">Saiba mais</a>
                    </div>
                </div>
            </header>

            <main className="container-fluid" id="main-section">
                <div className="container-fluid primeirasessao">
                    <div className="container-img-leaf-up">
                        <img src={Leaf} alt="icon folha" id='leaf' />
                    </div>

                    <div className="container mx-auto container-primeiro">
                        <h1>Apresentação e Histórico</h1>
                        <br />

                        <p>Kiriri é um vocábulo tupi que significa povo "calado", "taciturno". Essa designação teria sido
                            atribuída pelos Tupi da costa aos índios habitantes do sertão.
                            O povo kiriri constitui hoje um grande exemplo de luta para outros povos indígenas localizados na
                            região Nordeste do país. No espaço de quinze anos,
                            eles se estruturaram politicamente e promoveram, em fins dos anos noventa do século passado, a
                            extrusão de cerca de 1.200 não-índios incidentes na
                            Terra Indígena Kiriri, homologada desde 1990.
                        </p>
                        <br />

                        <p>O seu nome significa “povo calado”, por serem reservados. Porém, esse povo conseguiu levantar sua voz
                            e reconquistar suas terras que foram apropriadas
                            por posseiros durante muitas décadas, quando as famílias indígenas ameaçadas foram expulsas e
                            passaram a viver no pé da serra, dificultando suas práticas e tradições.
                            Por um período de quinze anos, o povo Kiriri se estruturou politicamente e, finalmente nos anos 90,
                            a Terra Indígena Kiriri teve a sua demarcação administrativa
                            homologada por meio de decreto, se tornando um exemplo de resiliência e inspiração para muitos
                            outros povos indígenas. Esta Terra Indígena está localizada no estado da Bahia,
                            no município de Banzaê (cujo nome significa “terra dos bravos”), onde hoje está organizada em nove
                            aldeias em uma área conservada de 12.320 hectares de pura Caatinga.
                        </p>
                    </div>
                    <div className="container-img-leaf-down">
                        <img src={Leaf} alt="icon folha" id='leaf' />
                    </div>
                    <div className="mx-auto mandiocultura">
                        <h2>Mandiocultura</h2>
                        <br />
                        <p>A produção da farinha acontece uma vez por ano, reunindo muitas famílias na aldeia Marcação, onde
                            está localizada a única unidade de beneficiamento totalmente mecanizada
                            no Território Indígena, facilitando a produção de farinha de muitas famílias, inclusive de outras
                            aldeias. Durante as “farinhadas” que acontecem nos meses de setembro à novembro,
                            as manivas – a rama da mandioca – são guardadas na sombra ou são enterradas, na espera das chuvas
                            para o seu cultivo e a esperança de uma boa colheita, que acontece aproximadamente
                            um ano depois. As manivas têm um período curto de conservação, sendo necessário o seu plantio em um
                            intervalo de seis meses após a colheita da mandioca, que com a falta das chuvas, se perdem
                            facilmente.
                        </p>
                        <p>Os homens e os jovens se ocupam da farinha, já as mulheres e jovens formaram um grupo para garantir a
                            geração de renda com a extração da fécula da mandioca para a produção de biscoitos de tapioca,
                            como é conhecido localmente. Além dos biscoitos, as mulheres produzem bolo de aipim, mingau de
                            tapioca, beiju e outros produtos.</p>
                        <p>Além do beiju, que é feito com a fécula, o sussú é um outro alimento típico que marca a cultura
                            alimentar deste povo, sendo feito com a massa da mandioca – a mesma que é destinada para a produção da
                            farinha –
                            colocada em um tacho e assado de cada lado e é servido como acompanhamento.</p>
                        <br />
                        <div id="carousel-mandiocultura" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-mdb-target="#carousel-mandiocultura" data-mdb-slide-to="0" className="active"
                                    aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-mdb-target="#carousel-mandiocultura" data-mdb-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-mdb-target="#carousel-mandiocultura" data-mdb-slide-to="2" aria-label="Slide 3"></button>

                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={OneJPG} className="d-block w-100" alt="Homem indigena Kiriri com raiz de mandioca" />
                                </div>
                                <div className="carousel-item">
                                    <img src={TwoJPG} className="d-block w-100" alt="Duas mulheres indigenas Kiriri peinerando tapioca" />
                                </div>
                                <div className="carousel-item">
                                    <img src={ThreeJPG} className="d-block w-100" alt="Mão de indigena Kiriri ralando mandioca com utensílio artesanal" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-mdb-target="#carousel-mandiocultura" data-mdb-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-mdb-target="#carousel-mandiocultura" data-mdb-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <br />
                        <small>Foto: Agencia Dudes</small>
                    </div>



                    <div className="container mx-auto artesanato">
                        <h2>Artesanato</h2>
                        <br />
                        <p>As comunidades indígenas baianas trabalham com matérias-primas extraídas em sua região, como argila,
                            sementes, cocos, madeiras, penas, palhas e fibras. Um exemplo é a tradicional cerâmica com pintura
                            em
                            Tauá (pigmento de argila na cor branca), produzida por artesãs e artesãos Kiriris.</p>
                        <p>Eles trazem sua tradicional cerâmica com pintura em tauá , maracas, arcos e flechas, apitos e
                            colares, entre outras criações. Os Kiriris trabalham com argila, sementes e cocos diversos,
                            madeiras, fibras naturais,
                            como a da palmeira do licuri fiada e tecida em aiós, e penas de animais domésticos, entre outros.
                        </p>
                        <p>Entre os índios Kiriri, observa-se a preocupação não só de manter uma tradição cerâmica, como de
                            integrar sua cultura às exigências atuais, sem perder suas raízes. Suas cerâmicas exibem uma riqueza
                            e
                            possibilidades ainda não completamente exploradas, necessitando de incentivo para se desdobrarem em
                            trabalhos voltados para a inserção no mercado a fim de apoiar o desenvolvimento dessa comunidade
                        </p>
                        <br />

                        <div id="carousel-artesanato" className="carousel slide" data-mdb-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-mdb-target="#carousel-artesanato" data-mdb-slide-to="0" className="active"
                                    aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-mdb-target="#carousel-artesanato" data-mdb-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-mdb-target="#carousel-artesanato" data-mdb-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-mdb-target="#carousel-artesanato" data-mdb-slide-to="3" aria-label="Slide 4"></button>
                                <button type="button" data-mdb-target="#carousel-artesanato" data-mdb-slide-to="4" aria-label="Slide 5"></button>
                                <button type="button" data-mdb-target="#carousel-artesanato" data-mdb-slide-to="5" aria-label="Slide 6"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={One} className="d-block w-100" alt="Mulher Kiriri no tear" />
                                </div>
                                <div className="carousel-item">
                                    <img src={Two} className="d-block w-100" alt="Máscara artesanal de argila branca" />
                                </div>
                                <div className="carousel-item">
                                    <img src={Three} className="d-block w-100" alt="Chocalho artesanal dos povos Kiriris" />
                                </div>
                                <div className="carousel-item">
                                    <img src={Four} className="d-block w-100" alt="Artesanato dos povos Kiriris" />
                                </div>
                                <div className="carousel-item">
                                    <img src={Five} className="d-block w-100" alt="Artesanato dos povos Kiriris" />
                                </div>
                                <div className="carousel-item">
                                    <img src={Six} className="d-block w-100" alt="Artesanato dos povos Kiriris" />
                                </div>
                            </div>

                            <button className="carousel-control-prev" type="button" data-mdb-target="#carousel-artesanato" data-mdb-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-mdb-target="#carousel-artesanato" data-mdb-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>

                        </div>
                        <br />
                        <small>Foto: Agencia Dudes</small>
                    </div>

                </div>

                <section className="container quote-section mx-auto">

                    <div className="col-md-8 mx-auto">
                        <i className="fas fa-quote-left"></i>
                        <br />
                        <br />
                        <p>O contato com o homem branco e o
                            extermínio sistemático desses povos, assim como a perda de grande parte de sua cultura e tradições,
                            fez com que muitas técnicas se perdessem com o tempo. Apesar disso, os índios tentam manter viva
                            a essência da sua cultura, sendo a cerâmica um meio de expressar sua própria identidade. </p>
                        <p>Entre os índios Kiriri, observa-se a preocupação não só de manter uma tradição cerâmica,
                            como de integrar sua cultura às exigências atuais, sem perder suas raízes. Suas cerâmicas exibem
                            uma riqueza e possibilidades ainda não completamente exploradas, necessitando de incentivo para
                            se desdobrarem em trabalhos voltados para a inserção no mercado a fim de apoiar o
                            desenvolvimento dessa comunidade.</p>
                        <p><small>- Salma Dias Almeida Sá</small></p>

                        <small>Fonte: </small><a href="http://ri.ucsal.br:8080/jspui/handle/prefix/2066" id="fonte" target="_blank" rel="noreferrer"><small>UCSAL, Universidade Católica do Salvador</small></a>
                    </div>
                </section>

                <div className="container-img-forest">
                    <img src={Forest} alt="icon floresta" id='forest' />
                </div>


                <div className="container">
                    <section className="container banner-section">

                        <div className="img-wrapper">
                            <img src={KiririsIstr} alt="Povos indigenas Kiriris com instrumentos" />

                        </div>

                        <div className="banner">
                            <h2 id="text-banner-sessao-final">Povos originários do sertão </h2>
                            <h6>Kiriri é um vocábulo tupi que significa povo "calado" </h6>
                        </div>
                    </section>
                </div>
                <div className="container-img-plant">

                    <img src={PlantPot} alt="icone planta" id="plant-pot"></img>
                </div>
                <div className="container mx-auto container-ajuda" id="c-ajuda">
                    <h2>Como ajudar?</h2>
                    <br/>
                    <p>Você pode ajudar comprando produtos da cultura tradicional dos Kiriris.</p>
                    <p>Nos últimos anos, o FIDA (Fundo Internacional de Desenvolvimento Agrícola) financiou os projetos "Gente de Valor" e o "Pró-Semiárido", iniciativas do governo do estado que forneceram equipamentos para a expansão e modernização da produção e processamento de milho e mandioca.</p>
                    <p>Hoje, os Kiriris possuem moinhos e fábricas para a fabricação de farinha, biscoitos e doces de mandioca. </p>
                    <p>Se você é uma empresa e se interessa por esses produtos Kiriris, acesse o <Link to="/catalogo">catálogo</Link>.</p>
                    <p>Se você não é uma empresa, mas quer ajudar de alguma forma adquira nossos produtos com nossos parceiros e colaborando com a nossa <Link to="/vaquinha"> "vaquinha". </Link></p>
                    <p>Saiba onde encontrar os nossos  <Link to="/parceiros">parceiros</Link>.</p>                   
                    <p>Para mais informações, entre em contato conosco no formulário da página <Link to="/contato">Contato</Link>.</p>
                </div>
            
            </main>

            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.10.0/mdb.min.js">
            </script>
        </>
    );
}

export default Home;