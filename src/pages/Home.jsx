import Helmet from '../components/Helmet/Helmet';
import { Container, Row } from 'reactstrap';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import layer1 from '../assets/images/blueimg.webp';
import '../styles/home.css';

const Home = () => {
    return (
        <div>
            {/* Page title */}
            <Helmet title={"Home"} />

            {/* Parallax effect */}
            <Parallax pages={1.45}>
                {/* Background layer */}
                <ParallaxLayer
                    offset={0}
                    speed={0}
                    factor={0.1}
                    style={{
                        backgroundColor: 'transparent',
                        height: '20px',
                    }}
                />

                {/* Parallax background image */}
                <ParallaxLayer
                    offset={0}
                    speed={0.5}
                    factor={1.5}
                    style={{
                        backgroundImage: `url(${layer1})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100vh',
                    }}
                />

                {/* Parallax content layer */}
                <ParallaxLayer
                    offset={0}
                    speed={0.8}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        height: '100vh',
                    }}
                >
                    {/* Hero section */}
                    <section className="hero__section">
                        <Container>
                            <Row>
                                <div className="hero__content">
                                    {/* Hero title */}
                                    <h2>Industrial design meets fashion.</h2>
                                </div>
                            </Row>
                        </Container>
                    </section>
                      {/* Hero description */}
                      <p className="hero__description">Atypical leather goods</p>
                    {/* Shop Now button */}
                    <button className='buy_btn'><span className='buy_btn_text'>Shop Now</span></button>
                </ParallaxLayer>
            </Parallax>
        </div>
    );
}

export default Home;
