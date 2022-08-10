import {Trends} from '../pages/Home'
import { TrendsCard } from './TrendsCard'
import {FiSearch} from 'react-icons/fi'
import { SingleTweetCard } from './SingleTweetCard'
import { Tweet } from '../App'
import { useEffect, useState } from 'react'

export type Props = {
    trends: Trends[]
    tweets: Tweet[]
}

export function RightMenu(){

    const [trends, setTrends] = useState<Trends[]>([]); 

  useEffect(() => {
    fetch('http://localhost:4000/trends')
    .then(res => res.json())
    .then(datafromServer => setTrends(datafromServer))
  }, [])

    return (
        <section className="right-menu">
            <form className='search-form'>
                <FiSearch className='search-form-icon'/>
                <input type="text" name="searchTweets" placeholder="Search Twitter" />
            </form>
            <div className="right-menu__trends">
                <h2>Trends for you</h2>
                <TrendsCard trends={trends} tweets={[]}/>
            </div>
        </section>
    )
}