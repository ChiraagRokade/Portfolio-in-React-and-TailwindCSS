import React from "react";
import Layout from "../compoents/Layout";

function resume() {
    return (
        <Layout>
            <div className='mt-20'>
                {/* INTRO */}
                <div className='h-screen'>
                    <div className='h-3/4'>
                        <lottie-player
                            src='https://assets9.lottiefiles.com/packages/lf20_4DLPlW.json'
                            background='transparent'
                            speed='1'
                            loop
                            autoplay
                        ></lottie-player>
                    </div>
                    <h1 className='text-4xl text-center font-merr font-bold mt-5'>
                        Resume
                    </h1>
                </div>
                {/* EDUCATION */}
                <div>
                    <div className='text-center h-52 bg-first'>
                        <h2 className='text-white font-merr text-4xl py-10'>Education</h2>
                    </div>
                    <div className='grid md:grid-cols-1 grid-cols-2 md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-xl hover:bg-gray-600 hover:text-white'>
                        <div className='px-10'>
                            <lottie-player
                                src='https://assets6.lottiefiles.com/packages/lf20_wfyrbf2p.json'
                                background='transparent'
                                speed='1'
                                loop
                                autoplay
                            ></lottie-player>
                        </div>
                        <div className='text-justify p-10'>
                            <h2 className='text-xl text-left font-merr font-bold mt-5'>
                                Bachelor of Technology (Pursuing)
                            </h2>
                            <p className='font-pt'>
                                Bachelor of Technology Pursuing from Dr. Babasaheb Ambedkar
                                Technological University, Lonere on Karmayogi Engineering
                                College, Shelve, Pandharpur in Computer Science and Technology
                                with an 9.06 CGPA.
                            </p>
                            <h2 className='text-xl text-left font-merr font-bold mt-5'>
                                Responsive Web Design
                            </h2>
                            <p className='font-pt'>
                                Completed Responsive Web Design Certification in June 13, 2020
                                from freecodecamp.org.{" "}
                                <a
                                    href='https://freecodecamp.org/certification/fcce36010df-8680-46b8-b512-7720ae98a6f6/responsive-web-design'
                                    className='text-blue-500'
                                    target='_blank'
                                >
                                    View Certification
                                </a>
                            </p>
                            <h2 className='text-xl text-left font-merr font-bold mt-5'>
                                Master of Network Administrator
                            </h2>
                            <p className='font-pt'>
                                Completed Master of Network Administrator Certification in 2019
                                from JetKing, Pune.
                            </p>
                            <h2 className='text-xl text-left font-merr font-bold mt-5'>
                                Diploma
                            </h2>
                            <p className='font-pt'>
                                Completed Diploma in 2018 from Maharashtra State Board of
                                Technical Education, Mumbai on Karmayogi Polytechnic College,
                                Shelve, Pandharpur in Computer Technology with an 64.65%.
                            </p>
                            <h2 className='text-xl text-left font-merr font-bold mt-5'>
                                Android Application Development
                            </h2>
                            <p className='font-pt'>
                                Completed Android Application Development Certification in 2016
                                from SNITS, Pandharpur.
                            </p>
                        </div>
                    </div>
                </div>
                {/* TECHNICAL SKILLS */}
                <div className='mt-20'>
                    <div className='text-center h-52 bg-red-500'>
                        <h2 className='text-white font-merr text-4xl py-10'>
                            TECHNICAL SKILLS
                        </h2>
                    </div>
                    <div className='grid md:grid-cols-1 grid-cols-2 md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-xl hover:bg-gray-600 hover:text-white'>
                        <div className='text-justify p-10'>
                            <h2 className='text-xl text-left font-merr font-bold mt-5'>
                                Software Languages
                            </h2>
                            <p className='font-pt'>
                                HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React, C, C++,
                                Java
                            </p>
                            <h2 className='text-xl text-left font-merr font-bold mt-5'>
                                Database
                            </h2>
                            <p className='font-pt'>MySQL, SQL, SQLite</p>
                            <h2 className='text-xl text-left font-merr font-bold mt-5'>
                                Tools
                            </h2>
                            <p className='font-pt'>
                                Visual Studio Code, Sublime Text, Bootstrap Studio, Turbo C++,
                                Notepad++, Atom, Code Block, Android Studio
                            </p>
                            <h2 className='text-xl text-left font-merr font-bold mt-5'>
                                Operating Systems
                            </h2>
                            <p className='font-pt'>
                                <strong>Windows:</strong> 98, XP,7,8,8.1,10, and 11
                            </p>
                            <p className='font-pt'>
                                <strong>Linux:</strong> Ubuntu, Fedora, CentOS, Red Heat,
                                Backbox, Kali Linux
                            </p>
                            <h2 className='text-xl text-left font-merr font-bold mt-5'>
                                Networking
                            </h2>
                            <p className='font-pt'>
                                LAN Installation, Crimping, Networking Device Configuration
                            </p>
                            <h2 className='text-xl text-left font-merr font-bold mt-5'>
                                Network Administration
                            </h2>
                            <p className='font-pt'>
                                Router Configuration, Switch Configuration, Security
                            </p>
                            <h2 className='text-xl text-left font-merr font-bold mt-5'>
                                System Administration
                            </h2>
                            <p className='font-pt'>Windows Server Configuration</p>
                        </div>
                        <div className='px-10'>
                            <lottie-player
                                src='https://assets2.lottiefiles.com/private_files/lf30_wqypnpu5.json'
                                background='transparent'
                                speed='1'
                                loop
                                autoplay
                            ></lottie-player>
                        </div>
                    </div>
                </div>
                {/* EXPERIENCE */}
                <div className='mt-20'>
                    <div className='text-center h-52 bg-first'>
                        <h2 className='text-white font-merr text-4xl py-10'>EXPERIENCE</h2>
                    </div>
                    <div className='grid md:grid-cols-1 grid-cols-2 md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-xl hover:bg-gray-600 hover:text-white'>
                        <div className='px-10'>
                            <lottie-player
                                src='https://assets7.lottiefiles.com/packages/lf20_ctqgzmyh.json'
                                background='transparent'
                                speed='1'
                                loop
                                autoplay
                            ></lottie-player>
                        </div>
                        <div className='text-justify p-10'>
                            <ol className="list-decimal font-pt font-semibold">
                                <li><em>HP</em>, I have Hardware Engineer from One Month</li>
                                <li className="pt-4"><em>SNITS</em>, I have Software Developer (Web Developer, Android Application Developer), Hardware Engineer, Network Administrator, System Administrator from 18th Aug. 2018 to 2nd May 2020.</li>
                                <li className="pt-4">As a <em>Freelancer</em> , I have work on as a Web Developer, Technique support, Hardware Engineer from June 2020 to present day.
                                    <ol className="list-[upper-roman] pl-9">
                                        <li className="pt-4">Web Developer
                                            <ol className="list-decimal pl-9">
                                                <li className="pt-4">Portfolio Website <a href="https://sandipchavan.in/" target='_blank' className='text-blue-500'>Visit Site</a></li>
                                                <li className="pt-4">Agriculture-related information and online shopping <a href="http://bananahouse.co.in/" target='_blank' className='text-blue-500'>Visit Site</a></li>
                                                <li> className="pt-4"Institute Website <a href="https://roshniparamedical.com/" target='_blank' className='text-blue-500'>Visit Site</a></li>
                                            </ol>
                                        </li>
                                        <li className="pt-4">Technique Support and Hardware Engineer — Remote desktop support, Software installation, Solve Software-related issue, Windows-related issue, Antivirus installation.</li>
                                    </ol>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default resume;
