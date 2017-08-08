import React from 'react';
import Metadata from '../../components/Metadata';
import PageHeader from '../../components/PageHeader';
import PageHeaderSubText from '../../components/PageHeaderSubText';
import PageIntroText from '../../components/PageIntroText';
import AboutUsBody from '../../components/AboutUsBody';
import ContactForm from '../../components/ContactForm';

const AboutUsContainer = () => {
  return (
    <div className="about-us-container outer">
      <Metadata
        title="About Us"
        description="Giving you better odds through data science, machine learning, and years of football fandom."
        url="https://www.betterodds.io/about"
        image="/assets/boof-logo-metadata.png"
      />
      <div className="header-container-outer">
        <div className="header-container div-container">
          <PageHeader title="About Us" />
          <PageHeaderSubText text="Giving you better odds through data science, machine learning, and years of football fandom." />
          <PageIntroText text="Get to know us. Now." />
        </div>
      </div>
      <AboutUsBody />
      <ContactForm />
    </div>
  );
};

export default AboutUsContainer;
