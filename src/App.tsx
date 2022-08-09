import "./App.css";
import { Link } from "react-router-dom";
import { FaBeer } from "react-icons/fa";
import { BiHomeCircle } from "react-icons/bi";
import { RiFileList2Line, RiHashtag } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { CgMoreO, CgProfile } from "react-icons/cg";
import { useEffect, useState } from "react";
import { LeftMenu } from "./components/LeftMenu";
import { RightMenu } from "./components/RightMenu";

export type Trends = {
  name: string;
  tweets: number;
  id: number;
}

function App() {

  const [trends, setTrends] = useState<Trends[]>([]); 

  useEffect(() => {
    fetch('http://localhost:4000/trends')
    .then(res => res.json())
    .then(datafromServer => setTrends(datafromServer))
  }, [])


  return (
    <div className="App">
      <LeftMenu />
      <main className="main-menu">
        <h2>Main Content</h2>
      </main>
      <RightMenu trends={trends}/>
    </div>
  );
}

export default App;
