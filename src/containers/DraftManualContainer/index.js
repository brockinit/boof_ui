import React from 'react';
import Metadata from '../../components/Metadata';
import PageHeader from '../../components/PageHeader';
import PageHeaderSubText from '../../components/PageHeaderSubText';
import PageIntroText from '../../components/PageIntroText';
import DraftManualForm from '../../components/DraftManualForm';

const DraftManualContainer = () => {
  return (
    <div className="contact-us-container outer">
      <Metadata
        title="Get Your 2017 Draft Manual"
        description="Giving you better odds through data science, machine learning, and years of football fandom."
        url="https://www.betterodds.io/about"
        image="/assets/boof-logo-metadata.png"
      />
      <div className="header-container-outer">
        <div className="header-container div-container">
          <PageHeader title="Get Your 2017 Draft Manual" />
          <PageHeaderSubText text="Fantasy Football 2017 Draft Manual, complete with individual defensive player rankings and suggestions" />
          <PageIntroText text="Enter your information below and we'll send you a PDF of the 2017 Better Odds of Football draft manual." />
        </div>
      </div>
      <DraftManualForm />
    </div>
  );
};

export default DraftManualContainer;
