import React from 'react'
import useSkills from '../hooks/useSkills';


function Skills() {
    const { data, isLoading, error } = useSkills();

    if(isLoading) return <div>Loading...</div>;
    if(error) return <div>Error: {error}</div>;

  return (
    <>
        <div className="charskills">
            <ul>
                {data.map((skill) => (
                    <li key={skill.name}>
                        <h3>{skill.name}</h3>
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