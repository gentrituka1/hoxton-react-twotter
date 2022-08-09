import { SingleTweetCard } from "./SingleTweetCard";

export function MainMenu() {
    return (
        <>
            <main className="main-menu">
                <header>
                    <h2>Home</h2>
                    <div>What's happening?</div>
                </header>
                <SingleTweetCard />
            </main>
        </>
    )
}