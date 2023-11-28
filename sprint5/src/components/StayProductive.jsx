import React from "react";
import "./stayproductive.css";

function StayProductive() {
    return (
        <div className="stay-productive">
            <div className="stay-productive-item">
                <img src="./images/illustration-stay-productive.png" alt="stay-productive-1" />
                <div className="content">
                <h1>Stay Productive,
                <br /> wherever you are
                </h1>
                    <p>Never let location be an issue when accessing your files. Fylo has you
                    covered for all of your file storage needs.
                    </p>
                    <p>
                        Securely share files and folders with friends, family and colleagues for live 
                        collaboration. No email attachments required.
                    </p>
                    <a href="/some/path">Go to some path ➨</a> {/* Aquí está tu enlace */}
                </div>
            </div>
        </div>
    );
}

export default StayProductive;
