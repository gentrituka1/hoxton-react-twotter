import { Tweet } from "./SingleTweetCard";

type Props = {
    tweet: Tweet;
}

export function SingleTweet({tweet}: Props){
    return (
        <div key={tweet.id}>
        <img src={tweet.user.profileImage} />
        <div className="single-tweet-card__name__and__text">
            <div className="single-tweet-card__text">
                <h2>{tweet.user.name}</h2>
                <h3>@{tweet.user.username}</h3>
            </div>
            <p>{tweet.text}</p>
        </div>
        <img src={tweet.image} />
    </div>
    )
}