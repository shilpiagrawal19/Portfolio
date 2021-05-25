import React from 'react'

export default function Skills() {
    function Tittle({title, span}) {
        return (
            <div className="Title">
                <h3>
                    {title}
                    <span> {span}</span>
                </h3>
            </div>
        )
    }
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
            <Tittle title={'SKILLS'} />
            
            <div className="leftskills">
            <div className="skillsContainer">
                <SkillsSection skill={'Html'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Bootstrap'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Css and Scss'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Javascript'} progress={'60%'} width={'60%'} />
            </div>
            </div>
            <div className="rightskills">
            <div className="skillsContainer">
                <SkillsSection skill={'React Js'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Php'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'Git'} progress={'75%'} width={'75%'} />
                <SkillsSection skill={'Material UI'} progress={'40%'} width={'40%'} />
            </div>
        </div>
            </div>
            </div>
            <div className="personalskills">
                <h2>PERSONAL SKILLS</h2>
                <ul>
                <li>Communication Skills</li>
                <li>Creative Thinking</li>
                <li>Punctual</li>
                <li>Leadership Skills</li>
                <li>Team Work</li>
                <li>Time Management</li>


                </ul>
            </div>
        </div>
    )
}
