import Helmet from '../components/Helmet/Helmet'
import { Container } from 'reactstrap';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import layer1 from '../assets/images/blueimg.webp';

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
                    factor={2}
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
                    speed={0.3}
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
                            <h2>Industrial design meets fashion.</h2>
                            
                            {/* Hero description */}
                            <p>Atypical leather goods</p>

                            {/* Shop Now button */}
                            <button className='buy_btn'>Shop Now</button>
                        </Container>
                    </section>
                </ParallaxLayer>
            </Parallax>
        </div>
    );
}

export default Home;
