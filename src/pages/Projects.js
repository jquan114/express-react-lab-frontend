import { useState, useEffect } from "react";

function Projects(props) {
  // create state to hold about data
  const [project, setProject] = useState(null);

  // create function to make api call
  const getProjectData = async () => {
    // make api call and get response
    const response = await fetch(props.URL + "projects");
    // turn response into javascript object
    const data = await response.json();
    // set the about state to the data
    setProject(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
useEffect(() => { getProjectData()});

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return project.map((project) => (
      <div>
        <h1>{project.name}</h1>
        <img src={project.image} />
        <a href={project.git}>
          <button>Github</button>
        </a>
        <a href={project.live}>
          <button>live site</button>
        </a>
      </div>
    ));
  };

  return project ? loaded() : <h1>Loading...</h1>;
}

export default Projects;