import { Props } from "./RightMenu"

export function TrendsCard ({trends}: Props){
    return (
        <ul className="right-menu__trends-list">
                {trends.map(trend => <li key={trend.id}>
                    <p>{trend.name}</p>
                    <p>{trend.tweets}K</p>
                </li>)}
        </ul>
    )
}