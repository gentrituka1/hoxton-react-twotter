import { useEffect, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { Tweet } from "../App";
import { LeftMenu } from "../components/LeftMenu";
import { RightMenu } from "../components/RightMenu";



export function TheTweet() {

    const [tweets, setTweets] = useState<Tweet[]>([]);

    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:4000/tweets/${params.id}`)
            .then(res => res.json())
            .then(tweetFromServer => {
                setTweets(tweetFromServer);
            }
            )
    } , [])

  return (
    <>
      <LeftMenu />
      <main className="main-menu">
        <header className="the-tweet-header">
          <BsArrowLeft className="arrow-left" />
          <h2>Tweet</h2>
        </header>
        <main>
            
        </main>
      </main>
      <RightMenu />
    </>
  );
}


