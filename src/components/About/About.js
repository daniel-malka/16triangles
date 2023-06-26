import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <section className="about">
      <div className="about__content">
        <h1 className="about__title">16 TRIANGLES</h1>
        <p className="about__description">
          Welcome to our mesmerizing generative art application powered by p5.js! Prepare to dive into a world of infinite
          possibilities and creativity. Our application harnesses the power of p5.js to generate beautiful and unique art pieces
          composed of triangles. With over 2,000 unique options, the random number generator at the core of our application
          ensures that each art piece is truly one-of-a-kind. Watch as the triangles elegantly bend and shape-shift, forming
          captivating patterns and compositions. The continuous evolution of the artwork creates a mesmerizing visual experience
          that will leave you in awe. But the magic doesn't stop there. Our application puts you in control of the artistic
          process. Customize and personalize your art by exploring various customization options. Change the background color to
          set the mood and create the perfect atmosphere for your artwork. Experiment with different triangle colors to evoke
          different emotions and vibes. Feeling adventurous? Modify the sequence of generating new shapes to further enhance your
          artistic expression. Play with the timing and arrangement of the triangles to create dynamic and evolving compositions
          that reflect your unique artistic vision. Whether you're an art enthusiast, a creative explorer, or simply someone who
          appreciates the beauty of generative art, our application offers a captivating experience that will keep you engaged and
          inspired. Immerse yourself in the world of generative art and unleash your creativity with our p5.js-powered application
        </p>
      </div>
    </section>
  );
}

export default About;
