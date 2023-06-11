import React from 'react'
import multiplePizzas from "../assets/multiplePizzas.jpeg"
import "../styles/About.css"

function About() {
  return (
    <div className="about">
        <div className="aboutTop" style={{backgroundImage: `url(${multiplePizzas})`}}>

        </div>
        <div className="aboutBottom">
            <h1>About Us</h1>
            <p>This affection for pizza took us to different pizza spots, and we attempted various valid and fascinating arrangements. While we generally appreciate the experience yet more we went about it, the more we understood that there was something missing. We couldn’t call attention to out, yet the experience was not finished and was not healthy.

            Living alone from our families in an unknown city, Pizza has been our ‘go-to’ companion for all events and, furthermore, for no events. What’s more, the more we eat it, the more we adore it. For us, it is our ‘Organization Name.’

            Simply subsequent to visiting a lot of spots and talking about it with more pizza sweethearts, we understand that what had been frequenting us for a long was the ‘absence of garnishes’ in a pizza. The genuine kind of pizza lies in its flavorful garnishes, and there is no greater wrongdoing than keeping down fixings from a Pizza!

            We took a stab at looking for a reason, yet it drove us to no place. In any case, we needed a greater amount of those beautiful fixings in our pizza. In this way, we chose to willingly volunteer to make what we need the manner in which it should be.</p>
            
        </div>
      
    </div>
  );
}

export default About
