import { LeftMenu } from "../components/LeftMenu";
import { RightMenu } from "../components/RightMenu";

export function TheTweet(){
    return (
        <>
            <LeftMenu />
            <main>
                
            </main>
            <RightMenu trends={[]} tweets={[]} />
        </>
    )
}