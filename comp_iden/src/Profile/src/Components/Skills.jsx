const Skills = (Props) => {
  
  return (
    <div className="skills">
      <h3> SKILLS <span className="btn btn-primary rounded-circle">+</span> </h3>
      <ul className="list-group list-group-flush">
        {Props.skills.map((skill) => (
          <li className="list-group-item" key={skill}> {skill} </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
