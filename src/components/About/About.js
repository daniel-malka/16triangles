import { useState } from 'react';
import { Link } from 'react-router-dom';
import TrianglesLogo from '../TrianglesLogo/TrianglesLogo';
import './About.css';

function About() {
  const [screen, setScreen] = useState(window.innerWidth);
  const triNums = Array.from({ length: 16 }, (_, i) => i + 1);
  const screenSize = screen > 768 ? 300 : screen;

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
        <h2 className="about__subtitle">Here are our stars!</h2>
        <div className="about__triangles">
          {' '}
          {triNums.map((triNum) => (
            <TrianglesLogo key={triNum} triNum={triNum} size={(screenSize - 20) / 3} />
          ))}
        </div>

        <p className="about__description">
          The options are divided into groups. The first group includes all individual triangles from 1-16. The second group
          consists of combinations like 1 + 2, 1 + 3, 1 + 4, etc., skipping 2 + 4 for now, and including 2 + 3, 2 + 5, and so on.
          The third group skips combinations like 1 + 2 + 3, 1 + 2 + 4, and includes combinations like 1 + 2 + 5 and 1 + 2 + 6.
          Combinations like 2 + 4, 6 + 8, 10 + 12, and 14 + 16 are omitted because they would result in the same pattern as 1 + 3,
          5 + 7, 9 + 11, and 13 + 15 respectively. The goal is to give each option the same odds, so repetitions are avoided.
        </p>
      </div>
    </section>
  );
}

export default About;
