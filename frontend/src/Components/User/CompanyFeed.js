import { useState, useEffect } from "react";
import axios from "../../api/axios";
export const CompanyFeed = () => {

    return(
        <>
            <div className="feed-container">
                <div className="company-card-container">
                    <div className="company-card-img">
                        <img className="img-resize" src="../../images/linkedin_icon.png"></img>
                    </div>
                    <div className="company-card-info">
                        <span className="bold">CobbleStone Energy</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompanyFeed;