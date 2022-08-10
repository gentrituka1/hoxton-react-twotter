import { Tweet } from "../App";


type Props = {
    tweet: Tweet;
}

export function SingleTweet({tweet}: Props){
    return (
        <div className="single-tweet-item" key={tweet.id}>
            <img className="profile-image" src={tweet.user.profileImage} width={50}/>
            <div className="single-tweet-card__name__and__text">
                <div className="single-tweet-card__text">
                    <h2>{tweet.user.name}</h2>
                    <span>@{tweet.user.username}</span>
                    <div className="single-tweet-card__icons">
                        <button onClick={() => {
                            if(tweet.user.name === "Gentrit"){
                            fetch(`http://localhost:4000/tweets/${tweet.id}`, {
                                method: 'DELETE'
                            }).then(res => res.json())
                            .then(() => {
                                location.reload();
                            })
                        } else {
                            alert("You can't delete this tweet");
                        }
                        }}>❌</button>
                    </div>
                </div>
                <p>{tweet.text}</p>
                <img className="text-image" src={tweet.image} width={600} />
            </div>
        </div>
    )
}