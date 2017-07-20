import React from 'react';
import PageHeader from '../../components/PageHeader';
import PageHeaderSubText from '../../components/PageHeaderSubText';
import PageIntroText from '../../components/PageIntroText';
import AboutUsBody from '../../components/AboutUsBody';

const AboutUs = () => {
  return (
    <div>
      <PageHeader
        title="About Us"
      />
      <PageHeaderSubText
        text="Giving you better odds through data science, machine learning, and years of football fandom."
      />
      <PageIntroText
        text="Get to know us. Now."
      />
    <AboutUsBody />
    </div>
  );
}

export default AboutUs;
