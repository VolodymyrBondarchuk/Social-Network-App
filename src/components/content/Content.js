import React from "react";
import s from './Content.module.css';

function Content() {

    return <div className={s.content}>
        <div className={s.contentMenu}>
            <div className={s.userName}>Janice Griffith</div>
            <div className={s.userRole}>Group Admin</div>

            <div className={s.contentMenuItem}>Timeline</div>
            <div className={s.contentMenuItem}>Photos</div>
            <div className={s.contentMenuItem}>Videos</div>
            <div className={s.contentMenuItem}>Friends</div>
            <div className={s.contentMenuItem}>Groups</div>
            <div className={s.contentMenuItem}>About</div>
            <div className={s.contentMenuItem}>More</div>

        </div>
        <div className='contentContainer'>

            <div className={s.lefColumn}>
                <div className={s.socialContainer}>
                    <b>Social:</b><br/>
                    Facebook<br/>
                    Twitter<br/>
                    Google<br/>
                </div>

                <div className={s.shortcutsContainer}>
                    <b>Shortcuts:</b><br/>
                    News<br/>
                    Feed<br/>
                    Inbox<br/>
                    My Pages<br/>
                    Friends<br/>
                    Images<br/>
                    Videos<br/>
                    Messages<br/>
                    Notifications<br/>
                    People Nearby<br/>
                    Insights<br/>
                    Logout<br/>
                </div>
            </div>

            <div className={s.feed}>
                feed
            </div>

            <div className={s.rightColumn}>
                right column
            </div>
        </div>

    </div>
}

export default Content;