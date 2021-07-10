import "./Sidebar.css"
import RssFeedRoundedIcon from '@material-ui/icons/RssFeedRounded';
export function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeedRoundedIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
