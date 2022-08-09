import {Trends} from '../pages/Home'
import { TrendsCard } from './TrendsCard'

export type Props = {
    trends: Trends[]
}

export function RightMenu({trends}: Props){

    return (
        <section className="right-menu">
            <form>
                <input type="text" placeholder="Search Twitter" />
            </form>
            <div className="right-menu__trends">
                <h2>Trends for you</h2>
                <TrendsCard trends={trends}/>
            </div>
        </section>
    )
}