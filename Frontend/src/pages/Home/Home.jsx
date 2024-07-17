import { Link } from "react-router-dom";
import Students from "../../components/Students";

const Home = () => {
    return (
        <>
            <Students />

            <Link to={"/kontakt"}>Kontaktieren Sie uns!</Link>
        </>
    );
}

export default Home;
