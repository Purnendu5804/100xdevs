import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";


function AddCard () {
    const[name , setName] = useState("");
    const[description , setDescription] = useState("");
    const[interests , setInterests] = useState([]);
    const[currentInterest , setCurrentInterest] = useState("");
    const[linkedinUsername , setLinkedinUsername] = useState("");
    const[twitterUsername , setTwitterUsername] = useState("");


    const navigate = useNavigate();

    const card = {
        name ,
        description,
        interests,
        linkedinUsername ,
        twitterUsername
    };

    const submitCard = async () => {
        if (
            name === "" ||
            description === "" ||
            interests.length === 0 ||
            linkedinUsername === "" ||
            twitterUsername === ""
        ) {
            alert("Please enter all details !");
            return ;
        }

        await fetch ("api/user/card" , {
            method : "POST",
            body : JSON.stringify(card),
            headers : {"content-type" : "application/json"} , 
        });


        setLinkedinUsername("");
        setTwitterUsername("");

        navigate("/");

    };


    const addInterest = () => {
        if(currentInterest && !interests.includes(currentInterest)) {
            setInterests(interests.concat(currentInterest));

            setCurrentInterest("");
        }
    };


    const removeInterest = () => {
        if(interests.length > 0) {
            const updatedInterests = [...interests];
            updatedInterests.pop();
            setInterests(updatedInterests);
            setCurrentInterest("");
        } else {
            alert("You don't have any interset! so boring.");
        }
    };

    return (
        <div className="addCard-div">
            <div className="addCard-align">
                <div className="addCard-box">
                    <div className="input-div">
                        <h1 className="addCard-heading">Add your Card</h1>
                        <div className="addCard-info">
                            <input 
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="addCard-info">
                            <input
                                type="text"
                                placeholder="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className="addCard-info">
                            <input 
                                type="text"
                                placeholder="Interests"
                                value={currentInterest}
                                onChange={(e) => setCurrentInterest(e.target.value)}
                            />
                        </div>
                        <button className="addInterest" onClick={addInterest} type="button">
                            Add
                        </button>

                        <button 
                            className="removeInterest"
                            onClick={removeInterest}
                            type="button"
                        >
                            Remove
                        </button>
                        <div className="addCard-info">
                            <input 
                                type="text"
                                placeholder="LinkedIn Username"
                                value={linkedinUsername}
                                onChange={(e) => setLinkedinUsername(e.target.value)}
                            />
                        </div>
                        <div className="addCard-info">
                            <input 
                                type="text"
                                placeholder="Twitter Username"
                                value={twitterUsername}
                                onChange={(e) => setTwitterUsername(e.target.value)}
                            />
                        <div className="submitBtn-div">
                            <button 
                                onClick={() => submitCard()}
                                type="button"
                                className="submitBtn"
                            >
                                Add your E-card
                            </button>
                        </div>
                        </div>
                        </div>
                        <div className="showCard">
                            <Card card={card} />
                        </div>
                    </div>
                </div>
            </div>

    );
}

export default AddCard;