import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import cat1 from '../../assets/cat-1.jpeg';
import cat2 from '../../assets/cat-2.jpeg';
import cat3 from '../../assets/cat-3.jpeg';

const styles = {
  header: {
    paddingLeft: '3rem',
    paddingTop: '3rem',
    marginTop: '5rem',
    fontFamily: 'Roboto',
    fontSize: '3rem',
    fontWeight: 'bold'
  },
  headerSubText: {
    fontSize: '1.7rem',
    fontStyle: 'italic',
    paddingLeft: '3rem',
  },
  introText: {
    fontSize: '1.2rem',
    paddingLeft: '3rem',
    paddingBottom: '2rem',
    fontFamily: 'Merriweather'
  },
  h2: {
    fontFamily: 'Roboto',
    lineHeight: '3rem'
  },
  aboutBody: {
    paddingLeft: '3rem',
    paddingRight: '3rem',
    fontFamily: 'Merriweather',
    lineHeight: '1.6rem'
  },
  imageBar: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
}

class AboutUsContainer extends Component {

  render() {
    return (
      <div style={styles.AboutUsContainer}>
        <Helmet>
          <title>Better Odds of Football - About Us</title>
          <meta name="title" content="Better Odds of Football - About Us" />
          <meta name="description" content="Giving you better odds through data science, machine learning, and years of football fandom." />
          <meta property="og:title" content="Better Odds of Football - About Us" />
          <meta property="og:url" content="https://betterodds.io/about" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="Giving you better odds through data science, machine learning, and years of football fandom." />
          <meta property="og:image" content="/assets/boof-logo-metadata.png" />
        </Helmet>
        <div style={styles.header}>
          <h1>About Us</h1>
        </div>
        <div style={styles.headerSubText}>
          <p>Giving you better odds through data science, machine learning, and years of football fandom.</p>
        </div>
        <div style={styles.headerSubText}>
          <p>----------</p>
        </div>
        <div style={styles.introText}>
          <p>Get to know us. Now.</p>
        </div>
        <div style={styles.imageBar}>
          <img src={cat1} alt="Better Odds of Football Cat"></img>
          <img src={cat2} alt="Better Odds of Football Persian"></img>
          <img src={cat3} alt="Better Odds of Football Mr.Kitty"></img>
        </div>
        <div style={styles.aboutBody}>
          <h2 style={styles.h2}>Brock</h2>
          <p>A self-proclaimed data nerd with a distaste for baseless arguments and emotional decisions, Brock has always been about bringing facts to the gridiron. When he isn't serving up solutions at Sudokrew, a software shop in Hawaii, he's neck deep in deep learning and developing ways in which he can predict seemingly randoms events, such as sporting events and stock prices. If forced to name one thing he loves as much as football, it’d be Persian cats. </p>
          <h2 style={styles.h2}>Sal</h2>
          <p>As a lifelong Cleveland Browns fan and aspiring college professor, Sal knows all about the long road. Playing fantasy football for over a decade in five different leagues while simultaneously holding a job and completing multiple college degrees, Better Odds of Football is the latest of his analytic sporting endeavors. He hopes to spread his knowledge of sports, sports statistics, and sports phenomena across the internet like avocado toast, and enjoys football so much he is currently writing a thesis paper on the topic. Sal also loves a good map.</p>
          <h2 style={styles.h2}>Andrea</h2>
          <p>As the jack of all trades and master of none, Andrea is a noob developer and dabbles in digital advertising, product development, and project management. As the resident grandmother of the group, she has played fantasy football for a straight 16 years and running and brings years of wisdom and bullshit luck to the field. When not crushing the boys in fantasy football, she is a fan of adventure and has traveled solo to over 10 countries. Andrea Enjoys a good ear of corn and is still going to send it.</p>
        </div>
      </div>
    )
  }
}
export default AboutUsContainer;
