import { useState, useEffect } from "react";
import profimg from "../public/profile.png";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Connect from "./Components/Connect";


// const fetchDataFromFirebase = async () => {
//     const querySnapshot = await getDocs(collection(db, "users"));
//     const data = [];
//     querySnapshot.forEach((doc) => {
//         data.push({ id: doc.id, ...doc.data()});
//     });
//     return data;
// }


function Profile() {

    // const [userData, setUserData] = useState([]);
    // useEffect(() => {
    //     async function fetchData() {
    //         const data = await fetchDataFromFirebase();
    //         setUserData(data);
    //     }
    //     fetchData();
    // }, []);

    const [toggle, setToggle] = useState(1);
    const toggleTab = (id) => {
        setToggle(id);
    }

    const skillsList = ["Web Development", "App Development", "Internet of things", "Artificial Intelligence"];
    const connectList = ["Instagram", "Linkedin", "Github", "Leetcode"];

    return (
        <>
            <div className="container prof my-5 shadow-lg rounded-4 p-5">
                <form method="">
                    
                    {/* USER SECTION */}
                    <div className="row text-md-start text-center">
                        <div className="col-md-2 d-md-flex justify-content-center align-items-center">
                            <img src={profimg} alt="profile" className="border border-3 border-primary" />
                        </div>
                        <div className="col-md-3 d-md-flex flex-column justify-content-center">
                            <div className="username fw-bold">
                                <h4 className="pb-0 mb-0">Username</h4>
                            </div>
                            <div className="userid fst-italic">
                                <h5 className="pb-0 mb-0">@userid</h5>
                            </div>
                        </div>
                        <div className="col-md-7 mt-2 d-md-flex align-items-center">
                            <button type="button" className="btn btn-primary btn-lg mt-1 me-1 edit-btn">EDIT PROFILE</button>
                            <button type="button" className="btn btn-outline-primary btn-lg mt-1 me-1 cnt-btn">FOLLOW</button>
                        </div>
                    </div>
                    
                    <hr className="border border-primary border-1 opacity-50" />
                    
                    {/* ABOUT SECTION */}
                    <div className="row d-md-flex flex-row-reverse justify-content-around text-md-start text-center">
                        <div className="col-md-8 d-md-flex flex-column">
                            <ul className="nav nav-underline mt-3">
                                <li className="nav-item">
                                    <a className={toggle == 1 ? "nav-link active fs-4 fw-bold" : "nav-link fs-4 fw-bold pe-auto"} onClick={() => toggleTab(1)}>
                                        ABOUT
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className={toggle == 2 ? "nav-link active fs-4 fw-bold" : "nav-link fs-4 fw-bold pe-auto"} onClick={() => toggleTab(2)}>
                                        ACTIVITIES
                                    </a>
                                </li>
                            </ul>

                            {/* About */}
                            <div className={toggle == 1 ? "about mt-3" : "d-none"} >
                                <About rollnum="715521104004"/>
                                {/* <div className="row text-md-start text-center">                                    
                                    {userData.map(user => (
                                        <>
                                            <About title="Name" value={user.name} />
                                            <About title="Reg.No." value={user.reg} />
                                            <About title="Department" value={user.dept} />
                                            <About title="Batch" value={user.batch} />
                                            <About title="D.O.B" value={user.dob} />
                                            <About title="Semester" value={user.sem} />
                                            <About title="Mail" value={user.mail} />
                                            <About title="Mobile" value={user.mobile} />
                                        </>
                                    ))}    
                                </div> */}
                            </div>

                            {/* ACTIVITIES SECTION */}
                            <div className={toggle == 2 ? "activities mt-3" : "d-none"}>
                                <div className="p-3 bg-info bg-opacity-10 border-primary border-5 border-start" role="alert">
                                   It appears that there is no record of any past events.
                                </div>
                            </div>
                            <hr className="border border-primary border-1 opacity-50" />

                        </div>

                        <div className="col-md-3 p-3">
                            {/* SKILLS SECTION */}
                            <Skills skills={skillsList}/>

                            <hr className="border border-primary border-1 opacity-50" />
                            
                            {/* CONNECT SECTION */}
                            <Connect connect={connectList}/> 
                        </div>
                    </div>

                </form>
            </div>
        </>
    );
}

export default Profile;