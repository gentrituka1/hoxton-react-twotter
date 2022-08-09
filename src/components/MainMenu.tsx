import { SingleTweetCard } from "./SingleTweetCard";

export function MainMenu() {
    return (
        <>
            <main className="main-menu">
                <header>
                    <h2>Home</h2>
                    <div>
                        <form>
                            <img />
                            <input type="text" placeholder="What's happening?" />
                        </form>
                        <button>Tweet</button>
                    </div>
                </header>
                <SingleTweetCard />
            </main>
        </>
    )
}