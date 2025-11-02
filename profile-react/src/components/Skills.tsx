import React from 'react'
import useSkills from '../hooks/useSkills';




function experienceLevel(skillPoints: number): string {
    if (skillPoints >= 80) return "Expert";
    if (skillPoints >= 60) return "Advanced";
    if (skillPoints >= 40) return "Intermediate";
    if (skillPoints >= 20) return "Beginner";
    return "Novice";
}

function Skills() {
    const { data, isLoading, error } = useSkills();

    if(isLoading) return <div>Loading...</div>;
    if(error) return <div>Error: {error}</div>;

  return (
    <>
        <div className='container'></div>
        <div className="charskills">
            <ul>
                {data.map((skill) => (
                    <li key={skill.name}>
                        <p>{skill.name}</p>
                        <div className='progress w-100' style={{borderRadius:0}}>
                            <div className='progress-bar w-100' style={{width:skill.skillPoints+'%'}}>{experienceLevel(skill.skillPoints)} + {skill.skillPoints}</div>
                        </div>
                        <div>
                            <div>

                            </div>
                        </div>
                    </li>
                ))} 
            </ul>
        </div>
    </>
  );
};

export default Skills