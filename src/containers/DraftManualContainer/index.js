import React from 'react';
import Metadata from '../../components/Metadata';
import PageHeader from '../../components/PageHeader';
import PageHeaderSubText from '../../components/PageHeaderSubText';
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
          <PageHeader title="Your Fantasy Football Weapon." />
          <PageHeaderSubText text="A comprehensive draft manual, complete with individual defensive player rankings and aggregate statistics" />
        </div>
      </div>
      <DraftManualForm />
    </div>
  );
};

export default DraftManualContainer;
