import { useEffect, useState } from "react"
import Card from "./Card";
import { Link } from "react-router-dom";

const Home = () => {
    const [cards , setCards] = useState([]);

    useEffect(() => {
        fetch("/api/user/cards")
            .then(async function (res) {
                const data = await res.json();
                setCards(data);
            });
    } , []);

    return (
        <>
            <h1>Welcome to the cards Application</h1>
            <div className="createCardOuter">
                <div className="createCardInner">
                    <Link to="/create" className = "createCard">
                        <button className="createCardBtn">Create your own Card</button>
                    </Link>
                </div>
            </div>

            <div className="allCardsContainer">
                <div className="allCards">
                    {cards.map((card) => {
                        return <Card key = {card._id} card = {card} />
                    })}
                </div>
            </div>
        </>
    )
};

export default Home;
