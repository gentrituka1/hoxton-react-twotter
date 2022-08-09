import { useEffect, useState } from "react"
import { SingleTweet } from "./SingleTweet";

export type Tweet = {
    id: number;
    text: string;
    user: {
        name: string;
        username: string;
        profileImage: string;
    }
    image: string;
    
}

export function SingleTweetCard(){

    const [tweets, setTweets] = useState<Tweet[]>([])

    useEffect(() => {
        fetch('http://localhost:4000/tweets')
        .then(res => res.json())
        .then(tweetsfromServer => setTweets(tweetsfromServer))
    }, [])

    return (
        <div className="single-tweet-card">
            {tweets.map(tweet => 
                <SingleTweet key={tweet.id} tweet={tweet} />
            )}
        </div>
    )
}