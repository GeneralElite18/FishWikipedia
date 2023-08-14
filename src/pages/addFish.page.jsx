import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../stylings/AddFishPage.css";

function AddFishPage() {

    const [name, setName] = useState("");
    const [diet, setDiet] = useState("");
    const [water, setWater] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    
    const navigate = useNavigate();
    const submitFish = (event) => {
        event.preventDefault();
        addFish();
        navigate("/fish");
    }

    function addFish(){
        const fishInfo = [name, diet, water, image, description];

        const api = "http://localhost:5555/api/species/"

        fetch(api, {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(fishInfo),
        })
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            console.log(result);
        })

    }

    return (
        <div>
            <h1>Add A New Fish</h1>
            <form action="submit">
                <div className="section">
                    <div className="inputs">
                        <label htmlFor="speciesName">Species Name</label>
                        <input type="text" id="speciesName" value={name} onChange={(element) => {setName(element.target.value)}} />
                        
                        <label htmlFor="diet">Diet</label>
                        <input type="text" id="diet" value={diet} onChange={(element) => {setDiet(element.target.value)}} />
                        
                        <label htmlFor="waterType">Water Type</label>
                        <input type="text" id="waterType" value={water} onChange={(element) => {setWater(element.target.value)}} />

                        <label htmlFor="description">Description</label>
                        <input type="text" id="description" value={description} onChange={(element) => {setDescription(element.target.value)}} />
                        
                        <label htmlFor="imageURL">Image URL</label>
                        <input type="url" id="imageURL" value={image} onChange={(element) => {setImage(element.target.value)}} />
                    </div>

                    <p>Image Preview</p>
                    <img src={image} alt="Preview" className="fishImage" />
                </div>

                <button onClick={submitFish}>Submit Fish</button>
            </form>
        </div>
    )
}

export default AddFishPage;