/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";
import "../css/Notice.css";

const Notice = () =>{
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-1">
                    <div className="heading-sect"><h3 className="head-title">Latest news</h3></div>
                        <marquee direction="up">
                            <ul className="latest-news-ul">
                                <li><a href="%%%" target="_blank">31 mar merit list Part 01_16 feb 2022</a>&nbsp<img src="new.gif"/></li>
                                <li><a href="%%%" target="_blank">31 mar 2022 Ph D merit list Part 02_16 feb 2022</a>&nbsp<img src="new.gif"/></li>
                                <li><a href="%%%"target="_blank">24 May 2022 Incubation Center</a>&nbsp<img src="new.gif"/></li>
                                <li><a href="%%%"target="_blank">31 mar 2022 Institutional Distinciveness</a>&nbsp<img src="new.gif"/></li>
                                <li><a href="%%%"target="_blank">31 mar 2022 Academic Calender Session 2019-20</a>&nbsp<img src="new.gif"/></li>
                                <li><a href="%%%"target="_blank">31 mar 2022 Ph D merit list Part 02_16 feb 2</a>&nbsp</li>
                                <li><a href="%%%"target="_blank">31 mar 2022 Ph D merit list Part 02_16 feb 2</a>&nbsp</li>
                            </ul>
                        </marquee>
                    </div>
                    <div className="col-2">
                    <div className="heading-sect"><h3 className="head-title">Upcoming Events</h3></div>
                        <marquee direction="up">
                        <ul class="upcoming-event-list">
                                        <li><span className="event-date" >29<br/>Mar</span><a href="#" download="" target="_blank">&nbsp Jargo High School</a>&nbsp<img src="new.gif"/></li>
                                        <li><span className="event-date">02<br/>Apr</span><a href="#"target="_blank">&nbsp Jargo High School</a>&nbsp<img src="new.gif"/></li>
                                        <li><span className="event-date">07<br/>Apr</span><a href="#"target="_blank">&nbsp Jargo High School</a>&nbsp<img src="new.gif"/></li>
                                        <li><span className="event-date">08<br/>May</span><a href="#" target="_blank">&nbsp Jargo High School</a></li>
                                        <li><span className="event-date">09<br/>May</span><a href="#" target="_blank">&nbsp Jargo High School</a></li>
                                       
                                    </ul>
                        </marquee>
                    </div>
                    <div className="col-3">
                    <div className="heading-sect"><h3 className="head-title">Notice Board</h3></div>
                        <marquee direction="up">
                        <ul class="notice-board-list">
                                <li><a href="##" target="_blank">Particpation in Climate Correction Day (CCD) challenge for Mission Life</a>&nbsp<img src="new.gif"/></li>
                                <li><a href="##" target="_blank">All School Football Tournament 2022</a>&nbsp<img src="new.gif"/></li>
                                <li><a href="##" target="_blank">Registration From for Class IX</a>&nbsp<img src="new.gif"/></li>
                                <li><a href="##"target="_blank">List of Activities organised under NCC/NSS</a>&nbsp<img src="new.gif"/></li>
                                <li><a href="##" target="_blank">School admission list Publised</a>&nbsp<img src="new.gif"/></li>
                            </ul>
                        </marquee>
                    </div>
                    
                </div>
            </div>    
        </div>
    )
    }
    export default Notice
