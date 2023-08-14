import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../stylings/FishPage.css"

function FishPage() {

    const [data, setData] = useState([]);

    function getFishData(){
        const api = "http://localhost:5555/api/species/"

        fetch(api)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            setData(result);
        })
    }

    useEffect(() => {
        getFishData();
    },[]);

    function mapFish(){

        let newList = data.map((item, index) => {
            let newLi = <li key={index}>
                <div>
                    <h2>{item.speciesName}</h2>
                    <p>Diet: {item.diet}</p>
                    <p>Water Type: {item.waterType}</p>
                    <p>{item.description}</p>
                    <img src={item.image} alt={item.speciesName} className="fishImage" />
                    <button onClick={() => {editFish(item.speciesName)}}>Edit Fish</button>
                </div>
            </li>
            return newLi;
        })
        return newList;
    }

    const navigate = useNavigate();
    const navigateToFishAdd = () => {
        navigate("/addFish");
    }

    function editFish(speciesName) {    
        navigate(`/fish/editFish/${speciesName}`);
    }

    return (
        <div>
            <h1>FISH</h1>
            <div className="">
                <button onClick={navigateToFishAdd}>Add Fish</button>
            </div>
            <ul className="list">
                {mapFish()}
            </ul>
        </div>
    )
}

export default FishPage;