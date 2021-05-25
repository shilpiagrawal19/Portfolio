import React from 'react'
import Fade from 'react-reveal/Fade';
import Title from '../Title';
import Slide from 'react-reveal/Slide';




export default function Skills() {
    function SkillsSection({skill,progress,width}) {
        return (
            <div className="SkillsSection">
                <div className="skills-container">
                    <h5 className="skill-title">{skill}</h5>
                    <div className="skill-bar">
                        <p className="skill-text">{progress}</p>
                        <div className="skill-progress">
                            <div className="progress">
                                <div className="inner-pregress" style={{width:width}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="skill" id="skill">
            <div className="techskills">
            <div>
            <Title title={'SKILLS'}/>
           
            <Fade top>
            <div className="leftskills">
            <div className="skillsContainer">
            <Slide left>
                <SkillsSection skill={'Html'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Bootstrap'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Css & scss'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Javascript'} progress={'60%'} width={'60%'} />
             </Slide>
            </div>
            </div>
            <div className="rightskills">
            <div className="skillsContainer">
             <Slide right>
                <SkillsSection skill={'React Js'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Php'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'Git'} progress={'75%'} width={'75%'} />
                <SkillsSection skill={'Material UI'} progress={'40%'} width={'40%'} />
                </Slide>
            </div>
        </div>
        </Fade>
            </div>
            </div>
            <div className="personalskills">
                <Fade top className="fade">
                <h2>PERSONAL SKILLS</h2>
                </Fade>
                <Fade right>
                <ul>
                <li>Communication Skills</li>
                <li>Creative Thinking</li>
                <li>Punctual</li>
                <li>Leadership Skills</li>
                <li>Team Work</li>
                <li>Time Management</li>
                </ul>
                </Fade>
            </div>
        </div>
    )
}
