import {useState, useEffect} from "react"

function Projects(props){

    // add State
    const [projects, setProjects] = useState(null)

    // Function to make api call
    const getProjects = async () => {
        // Make Api call
        const response = await fetch(props.URL + "projects")
        // Return javascript object
        const data = await response.json()
        // Set State
        setProjects(data)
    }
  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => getProjects(), []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
      // Map Through project.json and return data
    return projects.map((project, index) => (
        
      <div key={index}> 
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

  return projects ? loaded() : <h1>Loading...</h1>;
}
export default Projects