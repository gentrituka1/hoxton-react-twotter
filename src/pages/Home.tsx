import { useEffect, useState } from "react";
import { Tweet } from "../App";
import { LeftMenu } from "../components/LeftMenu";
import { MainMenu } from "../components/MainMenu";
import { RightMenu } from "../components/RightMenu";

export type Trends = {
    name: string;
    tweets: number;
    id: number;
  }

  type Props = {
    setTweets: (tweets: Tweet[]) => void
  }

export function Home({setTweets}: Props){

    
  
    return (
        <>
            <LeftMenu />
            <MainMenu tweets={[]} setTweets={setTweets} />
            <RightMenu />
        </>
    )
}