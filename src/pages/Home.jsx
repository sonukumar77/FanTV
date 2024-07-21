import Footer from "../components/Resusable/Footer/Footer";
import Intro from "../components/Resusable/Intro/Intro";
import Network from "../components/Resusable/Network/Network";

const Home = () => {
    return (
        <main className="w-full h-full">
            <Intro />
            <Network />
            <Footer />
        </main>
    );
};

export default Home;
