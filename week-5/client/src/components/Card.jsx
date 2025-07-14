const Card = ({card}) => {
    const {name , description , interests , linkedinUsername , twitterUsername} = card;

    const linkedinUrl = `https://www.linkedin.com/in/${linkedinUsername}`;
    const twitterUrl = `https://www.twitter.com/${twitterUsername}`;

    return (
        <div className="cardContainer">
            <div className="card">
                <h1 className="name">{name}</h1>
                <div className="description">{description}</div>
                <div className="interests-div">
                    <b className="interestHeading">Interest</b>
                    <ul className="interestsList">
                        {interests.map((interest) => {
                            <li key={interest} className="interestItem">
                                {interest}
                            </li>
                        })}
                    </ul>
                </div>
                <div className="profileLinks">
                    <a 
                      href= {linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="linkedinLink"
                    >
                        LinkedIn
                    </a>

                    <a 
                      href={twitterUrl}
                      target="_blank"
                      rel = "noopener noreferrer"
                      className="twitterLink"
                    >
                        Twitter
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card;