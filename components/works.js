import React from 'react';

const Works = () => (
    <div className="works-wrapper">
        <div>
            <h1 className="works-title">Project</h1>
            <div className="project">  
                    <div className="card w-75">
                        <div className="card-body">
                            <h4 className="project-name">Olive</h4>
                            <p className="project-description">OracleDB를 연동하여 만든 Spring 프로젝트입니다.</p><hr></hr>
                            <div className="project-container">
                                <div className="content-wrapper row">
                                <div className="col md-6 video-wrapper">
                                   
                                    <object type="text/html"
                                    data="https://www.youtube.com/embed/1or1sA-ssoA" width="100%" height="300"></object>
                                    <p><a href="https://www.youtube.com/watch?v=1or1sA-ssoA">
                                        https://www.youtube.com/watch?v=1or1sA-ssoA</a></p>
                                </div>
                                <div className="col md-6 video-wrapper">
                                    <ul className="proejct-info">
                                        <li>
                                            <h5>팀 구성</h5>
                                            <li>Front-end 유희진 박주희</li>
                                            <li>Back-end 김다희 이광호</li>
                                        </li><br></br>
                                        <li>
                                            <h5>주요 기능</h5>
                                            <li>회원가입, 로그인, 개인정보수정, 보드생성/삭제, 리스트 생성/삭제, 카드 생성/삭제,
                                                카드기능(글 게시, 댓글, 스케줄, 라벨, 첨부파일), 리스트/카드 이동, 멤버초대/추가/삭제, 
                                            </li>
                                        </li><br></br>
                                        <li>
                                            <h5>제작 기간</h5>
                                            <li>2019.06.10 ~ 2019.07.26</li>
                                        </li><br></br>
                                        
                                    </ul>

                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
        </div>
    </div>
)

export default Works
