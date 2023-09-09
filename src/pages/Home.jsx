import Helmet from '../components/Helmet/Helmet';
import { Container } from 'reactstrap';
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
                    speed={0.5} // Daha hızlı bir hız
                    factor={1.5} // Daha fazla yakınlaştırma
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
                    speed={0.8} // Daha hızlı bir hız
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
                            {/* Hero title */}
                            <h2 className='text'>Industrial design meets fashion.</h2>
                            
                            {/* Hero description */}
                            <p className='scnd_text'>Atypical leather goods</p>

                            {/* Shop Now button */}
                            <button className='buy_btn'>
                                <span className='buy_btn_text'>Shop Now</span>
                            </button>
                        </Container>
                    </section>
                </ParallaxLayer>
            </Parallax>
        </div>
    );
}

export default Home;
