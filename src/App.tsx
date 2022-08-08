import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {

  return (
    <div className="App">
     <section className="left-menu">
          <ul className='left-menu__list'>
              <li>
                <img className='gif' src="../twittergif.gif" alt="home" onMouseOver={(event) => {
                    event.target.
                }}/>
                <img className='svg' src="../twittersvg.svg" alt="home"/>
              </li>
              <li>
                <img src="/" alt="home" />
                <h2>Home</h2>
              </li>
              <li>
                <img src="/" alt="Explore" />
                <h2>Explore</h2>
              </li>
              <li>
                <img src="/" alt="Notifications" />
                <h2>Notifications</h2>
              </li>
              <li>
                <img src="/" alt="Messages" />
                <h2>Messages</h2>
              </li>
              <li>
                <img src="/" alt="Bookmarks" />
                <h2>Bookmarks</h2>
              </li>
              <li>
                <img src="/" alt="Lists" />
                <h2>Lists</h2>
              </li>
              <li>
                <img src="/" alt="Profile" />
                <h2>Profile</h2>
              </li>
              <li>
                <img src="/" alt="More" />
                <h2>More</h2>
              </li>
              <li>
                <button>Tweet</button>
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
