import React from 'react';

const Profile = () => (
    <div className="profile-wrapper">
        <section className="about-me">
               <h1 className="profile-title">Profile</h1>
                <div className="profile">  
                    <div className="card w-75">
                        <div className="card-body">
                        <h4 className="profile-subtitle">유희진</h4>
                        <p className="profile-content">010-3124-7607</p>
                        <p className="profile-content">heejin1023dev@gmail.com</p>
                        <p className="profile-content"><a href="https://github.com/olive23oct">https://github.com/olive23oct</a></p>
                        <hr/>
                        <h4 className="profile-subtitle">학력</h4>    
                        <ul>
                            <li>국민대학교 영어영문학과 졸업 (2011~2016)</li>
                            <li>비트캠프 종로학원 수료 (2019.01~2019.07)</li>
                        </ul><hr></hr>
                        <h4 className="profile-subtitle">기술</h4>
                        <ul>
                            <li><a href="#">Java</a></li>
                            <li><a href="#">Spring, SpringBoot</a></li>
                            <li><a href="#">OracleDB</a></li>
                            <li><a href="#">Html5</a></li>
                            <li><a href="#">JavaScript</a></li>
                            <li><a href="#">jQuery</a></li>
                            <li><a href="#">React.js</a></li>
                            <li><a href="#">Next.js</a></li>
                            <li><a href="#">AWS</a></li>
                        </ul>
                        </div>
                    </div>
                </div>    
        </section>
    </div>

)

export default Profile