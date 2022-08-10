import { TheTweet } from "../pages/TheTweet";
import { SingleTweetCard, Tweet } from "./SingleTweetCard";

type Props = {
  tweets: Tweet[];
  setTweets: (tweets: Tweet[]) => void;
};

export function MainMenu({ tweets, setTweets }: Props) {
  return (
    <>
      <main className="main-menu">
        <header className="tweet-header">
          <h2>Home</h2>
          <div className="tweet-post">
            <form
              className="tweet-form"
              onSubmit={(event) => {
                event.preventDefault();

                fetch("http://localhost:4000/tweets", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    text: event.target.tweet.value,
                    user: {
                      name: "Gentrit",
                      username: "gennt",
                      profileImage:
                        "https://scontent.fprn13-1.fna.fbcdn.net/v/t39.30808-6/241689644_6786504164708406_4669557858020427744_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qaYuEeg0cXoAX89wkYG&_nc_ht=scontent.fprn13-1.fna&oh=00_AT_oRycJbmcAjVp9USzHyW0nzk42wY3QOCgafjwEzjxJOQ&oe=62F86BB3",
                    },
                    image: "",
                  }),
                })
                  .then((res) => res.json())
                  .then((tweet) => {
                    setTweets([...tweets, tweet]);
                  });

                event.target.tweet.value = "";
                location.reload();
              }}
            >
              <img src="/images/gentrit.jpg" width={50} />
              <input type="text" name="tweet" placeholder="What's happening?" />
              <div className="tweet-button">
                <button className="tweet-button-btn" onClick={() => {}}>
                  Tweet
                </button>
              </div>
            </form>
          </div>
        </header>
        <SingleTweetCard />
      </main>
    </>
  );
}
