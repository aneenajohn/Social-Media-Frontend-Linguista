import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import "./Topbar.css";

export function Topbar() {
    return (
        <div className="topbarContainer">
           <div className="topbarLeft">
               <span className="logo para--lead">Linguista</span>
           </div>
           <div className="topbarCenter">
                <div className="searchbar">
                    <SearchRoundedIcon className="searchIcon" />
                    <input type="text" placeholder="Search for people,posts..." className="searchInput" />
                </div>
           </div>
           <div className="topbarRight">
               <div className="topbarLinks">
                   <span className="topbarLink">Home</span>
                   <span className="topbarLink">Timeline</span>
               </div>
               <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <PersonRoundedIcon className="topIcon"/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <ChatRoundedIcon className="topIcon"/>
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <NotificationsRoundedIcon className="topIcon"/>
                        <span className="topbarIconBadge">1</span>
                    </div>      
               </div>
               <img src="/assets/person/1.jpg" alt="person1" className="topbarImage" />
           </div>
        </div>
    )
}
