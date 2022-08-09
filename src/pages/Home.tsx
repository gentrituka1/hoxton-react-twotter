import { useEffect, useState } from "react";
import { LeftMenu } from "../components/LeftMenu";
import { MainMenu } from "../components/MainMenu";
import { RightMenu } from "../components/RightMenu";

export type Trends = {
    name: string;
    tweets: number;
    id: number;
  }

export function Home(){

    const [trends, setTrends] = useState<Trends[]>([]); 

  useEffect(() => {
    fetch('http://localhost:4000/trends')
    .then(res => res.json())
    .then(datafromServer => setTrends(datafromServer))
  }, [])
  
    return (
        <>
            <LeftMenu />
            <MainMenu />
            <RightMenu trends={trends} />
        </>
    )
}