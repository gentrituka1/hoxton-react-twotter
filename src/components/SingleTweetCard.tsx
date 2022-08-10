import { useEffect, useState } from "react"
import { Tweet } from "../App";
import { SingleTweet } from "./SingleTweet";

type Props = {
    tweets: Tweet[];
    setTweets: (tweets: Tweet[]) => void;
}


export function SingleTweetCard({ tweets, setTweets }: Props) {

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