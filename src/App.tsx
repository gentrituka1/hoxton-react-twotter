import "./App.css";
import { Link } from "react-router-dom";
import { FaBeer } from "react-icons/fa";
import { BiHomeCircle } from "react-icons/bi";
import { RiFileList2Line, RiHashtag } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { CgMoreO, CgProfile } from "react-icons/cg";

function App() {
  return (
    <div className="App">
      <section className="left-menu">
        <ul className="left-menu__list">
          <li>
            <Link to={"/home"}>
              <img className="svg" src="../twittersvg.svg" alt="home" />
            </Link>
          </li>
          <li>
            <div className="left-menu__icons">
              <span className="icons">
                <BiHomeCircle />
              </span>
              <h2>Home</h2>
            </div>
          </li>
          <li>
            <div className="left-menu__icons">
              <span className="icons">
                <RiHashtag />
              </span>
              <h2>Explore</h2>
            </div>
          </li>
          <li>
            <div className="left-menu__icons">
              <span className="icons">
                <IoIosNotificationsOutline />
              </span>
              <h2>Notifications</h2>
            </div>
          </li>
          <li>
            <div className="left-menu__icons">
              <span className="icons">
                <AiOutlineMail />
              </span>
              <h2>Messages</h2>
            </div>
          </li>
          <li>
            <div className="left-menu__icons">
              <span className="icons">
                <BsBookmark />
              </span>
              <h2>Bookmarks</h2>
            </div>
          </li>
          <li>
            <div className="left-menu__icons">
              <span className="icons">
                <RiFileList2Line />
              </span>
              <h2>Lists</h2>
            </div>
          </li>
          <li>
            <div className="left-menu__icons">
              <span className="icons">
                <CgProfile />
              </span>
              <h2>Profile</h2>
            </div>
          </li>
          <li>
            <div className="left-menu__icons">
              <span className="icons">
                <CgMoreO />
              </span>
              <h2>More</h2>
            </div>
          </li>
          <li>
            <div>
              <button className="btn-tweet">Tweet</button>
            </div>
          </li>
        </ul>
      </section>
      <main className="main-menu">
        <h2>Main Content</h2>
      </main>
      <section className="right-menu">
        <h2>Right Menu</h2>
      </section>
    </div>
  );
}

export default App;
