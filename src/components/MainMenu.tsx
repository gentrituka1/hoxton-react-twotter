import { TheTweet } from "../pages/TheTweet";
import { SingleTweetCard } from "./SingleTweetCard";

export function MainMenu() {
  return (
    <>
      <main className="main-menu">
        <header className="tweet-header">
          <h2>Home</h2>
          <div className="tweet-post">
            <form className="tweet-form" onSubmit={(event) => {
                event.preventDefault();

                fetch('http://localhost:4000/tweets', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: 1,
                        text: event.target.tweet.value,
                        user: {
                            name: "Gentrit",
                            username: "gennt",
                            profileImage: "https://scontent.fprn13-1.fna.fbcdn.net/v/t39.30808-6/241689644_6786504164708406_4669557858020427744_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qaYuEeg0cXoAX89wkYG&_nc_ht=scontent.fprn13-1.fna&oh=00_AT_oRycJbmcAjVp9USzHyW0nzk42wY3QOCgafjwEzjxJOQ&oe=62F86BB3"
                        },
                        image: ""
                    })
                })
            }}>
              <img src="/images/gentrit.jpg" width={50}/>
              <input type="text" name="tweet" placeholder="What's happening?" />
            </form>
            <div className="tweet-button">
                <button>Tweet</button>
            </div>
          </div>
        </header>
        <SingleTweetCard />
      </main>
    </>
  );
}
