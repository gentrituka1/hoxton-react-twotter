import { Props } from "./RightMenu"

export function TrendsCard ({trends}: Props){
    return (
        <ul className="right-menu__trends-list">
                {trends.map(trend => <li key={trend.id}>
                    <h3>{trend.name}</h3>
                    <p>{trend.tweets}K Tweets</p>
                </li>)}
        </ul>
    )
}