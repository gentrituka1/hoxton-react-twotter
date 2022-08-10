import {Trends} from '../pages/Home'
import { TrendsCard } from './TrendsCard'
import {FiSearch} from 'react-icons/fi'
import { SingleTweetCard, Tweet } from './SingleTweetCard'

export type Props = {
    trends: Trends[]
    tweets: Tweet[]
}

export function RightMenu({trends, tweets}: Props){

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