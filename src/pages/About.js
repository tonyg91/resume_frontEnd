import {useState, useEffect} from "react"

function About(props){

    // Add State
    const [about, setAbout] = useState(null)

    // Function for API Call 
    const getAbout = async () => {
        // Fetch data
        const response = await fetch(props.URL + "about")
        // Return as javascript object
        const data = await response.json()
        // Set state
        setAbout(data)
    }
     // make an initial call for the data inside a useEffect, so it only happens once on component load
    useEffect(() => getAbout(), []);

    // define a function that will return the JSX needed once we get the data
    const loaded = () => (
     <div>
       <h2>{about.name}</h2>
       <h3>{about.email}</h3>
     </div>
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return about ? loaded() : <h1>Loading...</h1>;
}
export default About