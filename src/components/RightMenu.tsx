import {Trends} from '../pages/Home'
import { TrendsCard } from './TrendsCard'
import {FiSearch} from 'react-icons/fi'

export type Props = {
    trends: Trends[]
}

export function RightMenu({trends}: Props){

    return (
        <section className="right-menu">
            <form className='search-form'>
                <FiSearch className='search-form-icon'/>
                <input type="text" placeholder="Search Twitter" />
            </form>
            <div className="right-menu__trends">
                <h2>Trends for you</h2>
                <TrendsCard trends={trends}/>
            </div>
        </section>
    )
}