import "../stylings/HomePage.css";
import homeImage from "../images/LogoIcon.png"
import { useNavigate } from "react-router-dom";

function HomePage() {

    
    const navigate = useNavigate();
    const navigateToFish = () => {
        navigate("/fish");
    }

    return (
        <div>
            <h1>Welcome to Fishipedia!</h1>
            <h3>A database for information on various aquarium fish</h3>
            <img src={homeImage} alt="Home Page img" />
            <button onClick={navigateToFish}>View Fish</button>
        </div>
    )
}

export default HomePage;