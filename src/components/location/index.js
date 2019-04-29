import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
        
        <iframe title="Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.9238954162665!2d-123.11101138434691!3d49.277839279034765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717c9d5bb52b%3A0x9e0470e4c990b209!2sRogers+Arena!5e0!3m2!1sen!2sca!4v1556493105479!5m2!1sen!2sca" 
            width="100%" 
            height="500px" 
            frameBorder="0" 
            allowFullScreen></iframe>

            <div className="location_tag">
                <div>Location</div>        
            </div>
           
        </div>
    );
};

export default Location;