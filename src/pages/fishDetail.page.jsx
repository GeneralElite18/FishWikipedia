import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../stylings/FishDetailPage.css";

function FishDetailPage() {

    const [item, setItem] = useState({});
    const [name, setName] = useState("");
    const [diet, setDiet] = useState("");
    const [waterType, setWaterType] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    const { id } = useParams();
    const navigate = useNavigate();

    function getFish(){
        const url = `http://localhost:5555/api/species/${id}`;

        fetch(url)
        .then((response) => {return response.json()})
        .then((result) => {
            console.log(result);
            setItem(result[0]);
        })
        .catch((err) => {console.error(err)});
    }

    function setInputs(){
        setName(item.speciesName);
        setDiet(item.diet);
        setWaterType(item.waterType);
        setDescription(item.description);
        setImage(item.image);
    }


    useEffect(() => {
        getFish();
        setInputs();
    },[]);

    function updateFish(){
        const fishInfo = {
            speciesName: name,
            waterType: waterType,
            diet: diet,
            image: image, 
            description: description,
        };

        const api = `http://localhost:5555/api/species/${id}`;

        fetch(api, {
            method: "PUT",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(fishInfo),
        })
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            console.log(result);
            getFish();
        });
    }

    function deleteFish(){
        
        const api = `http://localhost:5555/api/species/${id}`;

        fetch(api, {
            method: "DELETE",
            headers: {"Content-type": "application/json"},
        })
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            console.log(result);
        });
        navigate("/fish");
    }


    return (
        <div>
            <div className="edits">
                <h2>{item.speciesName}</h2>
                <div className="inputs">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" defaultValue={item.speciesName} onChange={(element) => {setName(element.target.value)}}/>
                </div>

                <h2>{item.diet}</h2>
                <div className="inputs">
                    <label htmlFor="diet">Diet</label>
                    <input type="text" id="diet" defaultValue={item.diet} onChange={(element) => {setDiet(element.target.value)}}/>
                </div>

                <h2>{item.waterType}</h2>
                <div className="inputs">
                    <label htmlFor="waterType">Water Type</label>
                    <input type="text" id="waterType" defaultValue={item.waterType} onChange={(element) => {setWaterType(element.target.value)}}/>
                </div>

                <h2>{item.description}</h2>
                <div className="inputs">
                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" defaultValue={item.description} onChange={(element) => {setDescription(element.target.value)}}/>
                </div>

                <img src={item.image} alt="fish" className="prevImage"/>
                <div className="inputs">
                    <label htmlFor="image">Image</label>
                    <input type="text" id="image" defaultValue={item.image} onChange={(element) => {setImage(element.target.value)}}/>
                </div>

                <div className="inputs">
                    <button onClick={() => {updateFish()}}>Update Fish</button>
                    <button onClick={() => {deleteFish()}}>Delete Fish</button>
                </div>
            </div>
        </div>
    );
}

export default FishDetailPage;