import React from 'react';
import cat1 from '../assets/cat-1.jpeg';
import cat2 from '../assets/cat-2.jpeg';
import cat3 from '../assets/cat-3.jpeg';

const AboutUsBody = props => {
  return (
    <div className="about-us-body-container">
      <div className="about-us-image-bar">
        <img alt="cat-1" src={cat1} />
        <img alt="cat-2" src={cat2} />
        <img alt="cat-3" src={cat3} />
      </div>
      <div className="about-us-content-container">
        <h2>Brock</h2>
        <p>
          A self-proclaimed data nerd with a distaste for baseless arguments and
          emotional decisions, Brock has always been about bringing facts to the
          gridiron. When he isn't serving up solutions at Sudokrew, a software
          shop in Hawaii, he's neck deep in deep learning and developing ways in
          which he can predict seemingly randoms events, such as sporting events
          and stock prices. If forced to name one thing he loves as much as
          football, it’d be Persian cats.{' '}
        </p>
        <h2>Sal</h2>
        <p>
          As a lifelong Cleveland Browns fan and aspiring college professor, Sal
          knows all about the long road. Playing fantasy football for over a
          decade in five different leagues while simultaneously holding a job
          and completing multiple college degrees, Better Odds of Football is
          the latest of his analytic sporting endeavors. He hopes to spread his
          knowledge of sports, sports statistics, and sports phenomena across
          the internet like avocado toast, and enjoys football so much he is
          currently writing a thesis paper on the topic. Sal also loves a good
          map.
        </p>
        <h2>Andrea</h2>
        <p>
          As the jack of all trades and master of none, Andrea is a noob
          developer and dabbles in digital advertising, product development, and
          project management. As the resident grandmother of the group, she has
          played fantasy football for a straight 16 years and running and brings
          years of wisdom and bullshit luck to the field. When not crushing the
          boys in fantasy football, she is a fan of adventure and has traveled
          solo to over 10 countries. Andrea Enjoys a good ear of corn and is
          still going to send it.
        </p>
      </div>
    </div>
  );
};

export default AboutUsBody;
