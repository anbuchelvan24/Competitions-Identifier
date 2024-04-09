import React, { useState, useEffect } from 'react';

const About = (props) => {

    const [profile, setProfile] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8080/profile/${props.rollnum}`)
        .then(res => res.json())
        .then(data => setProfile(data))
        .catch(error => console.error('Error fetching profile:', error));
    }, []);

    if (!profile) {
        return (
            <div>
                <h5><span className='fw-bold fs-5'>Error:</span> Profile not found.</h5>
            </div>
        )
    }

    return (
        
        <>
            <div className="col-md-12 d-sm-flex justify-content-between mt-1">
                <h6 className="fw-bold fs-5">REG.NO.</h6>
                <h6 className="text-muted fs-5">{profile.reg}</h6>
            </div>
            <div className="col-md-12 d-sm-flex justify-content-between mt-1">
                <h6 className="fw-bold fs-5">NAME</h6>
                <h6 className="text-muted fs-5">{profile.name}</h6>
            </div>
            <div className="col-md-12 d-sm-flex justify-content-between mt-1">
                <h6 className="fw-bold fs-5">DEPT</h6>
                <h6 className="text-muted fs-5">{profile.dept}</h6>
            </div>
            <div className="col-md-12 d-sm-flex justify-content-between mt-1">
                <h6 className="fw-bold fs-5">D.O.B</h6>
                <h6 className="text-muted fs-5">{profile.dob}</h6>
            </div>
            <div className="col-md-12 d-sm-flex justify-content-between mt-1">
                <h6 className="fw-bold fs-5">MAIL</h6>
                <h6 className="text-muted fs-5">{profile.mail}</h6>
            </div>
            <div className="col-md-12 d-sm-flex justify-content-between mt-1">
                <h6 className="fw-bold fs-5">MOBILE</h6>
                <h6 className="text-muted fs-5">{profile.mobile}</h6>
            </div>
            <div className="col-md-12 d-sm-flex justify-content-between mt-1">
                <h6 className="fw-bold fs-5">BATCH</h6>
                <h6 className="text-muted fs-5">{profile.batch}</h6>
            </div>
        </>
    );
    
    // return (
    //     <>
    //         <div className="col-md-12 d-sm-flex justify-content-between mt-1">
    //             <h6 className="fw-bold fs-5">{Props.title}</h6>
    //             <h6 className="text-muted fs-5">{Props.value}</h6>
    //         </div>
    //     </>
    // )

}

export default About; 
