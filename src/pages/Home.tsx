import { Navbar, Baner, Top_market, Price_tables, About_part, Services_part, Contact_part, Reviews, Section_sale,} from '../components';

const Home = () => { 
    return (
        <>
            <Navbar />
            <Baner />
            <Top_market />  
            <Price_tables /> 
            <About_part />
            <Services_part />
            <Contact_part />
            <Reviews />
            <Section_sale />
        </>
    );
};
export default Home