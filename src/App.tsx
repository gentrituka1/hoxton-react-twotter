import './App.css'
import { Link } from 'react-router-dom'
import {FaBeer, BiHomeCircle} from 'react-icons/fa'

function App() {

  return (
    <div className="App">
     <section className="left-menu">
          <ul className='left-menu__list'>
              <li>
                <Link to={'/home'}>
                  <img className='svg' src="../twittersvg.svg" alt="home"/>
                </Link>
              </li>
              <li>
                <div className='left-menu__icons'>
                  <span><BiHomeCircle /></span>
                  <h2>Home</h2>
                </div>
              </li>
              <li>
                <div className='left-menu__icons'>
                  <img src="/" alt="Explore" />
                  <h2>Explore</h2>
                </div>
              </li>
              <li>
                <div className='left-menu__icons'>
                    <img src="/" alt="Notifications" />
                    <h2>Notifications</h2>
                </div>
              </li>
              <li>
                <div className='left-menu__icons'>
                    <img src="/" alt="Messages" />
                    <h2>Messages</h2>
                </div>
              </li>
              <li>
                <div className='left-menu__icons'>
                  <img src="/" alt="Bookmarks" />
                  <h2>Bookmarks</h2>
                </div>
              </li>
              <li>
                <div className='left-menu__icons'>
                  <img src="/" alt="Lists" />
                  <h2>Lists</h2>
                </div>
              </li>
              <li>
                <div className='left-menu__icons'>
                  <img src="/" alt="Profile" />
                  <h2>Profile</h2>
                </div>
              </li>
              <li>
                <div className='left-menu__icons'>
                  <img src="/" alt="More" />
                  <h2>More</h2>
                </div>
              </li>
              <li>
                <div className='left-menu__icons'>
                  <button>Tweet</button>
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
  )
}

export default App
