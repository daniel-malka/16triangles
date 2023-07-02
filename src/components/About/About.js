import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <section className="about">
      <div className="about__content">
        <h1 className="about__title">16 TRIANGLES</h1>
        <p className="about__description">
          Welcome to our mesmerizing generative art app powered by p5.js! Dive into a world of infinite possibilities and
          creativity. Harnessing p5.js, we generate unique art pieces composed of triangles. With over 2,000 options, each piece
          is truly one-of-a-kind. Watch as triangles elegantly shape-shift into captivating patterns. Customize your art with
          various options, from background color to triangle colors. Modify the sequence and arrangement for dynamic compositions
          reflecting your vision. Engage, explore, and unleash your creativity with our p5.js-powered app!
        </p>
        <p className="about__description">
          The options are divided into groups. The first group includes individual triangles: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
          12, 13, 14, 15, and 16. The second group consists of combinations like 1+2, 1+3, 1+4, etc., skipping 2+4 for now, and
          including 2+3, 2+5, and so on. The third group skips combinations like 1+2+3, 1+2+4, and includes combinations like
          1+2+5 and 1+2+6. Combinations like 2+4, 6+8, 10+12, and 14+16 are omitted because they would result in the same pattern
          as 1+3, 5+7, 9+11, and 13+15 respectively. The goal is to give each option the same odds, so repetitions are avoided.
        </p>
      </div>
    </section>
  );
}

export default About;
