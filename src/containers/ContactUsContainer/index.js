import React from 'react';
import Metadata from '../../components/Metadata';
import PageHeader from '../../components/PageHeader';
import PageHeaderSubText from '../../components/PageHeaderSubText';
import ContactForm from '../../components/ContactForm';

const ContactUsContainer = () => {
  return (
    <div className="contact-us-container outer">
      <Metadata
        title="Contact Us"
        description="Giving you better odds through data science, machine learning, and years of football fandom."
        url="https://www.betterodds.io/about"
        image="/assets/boof-logo-metadata.png"
      />
      <div className="header-container-outer">
        <div className="header-container div-container">
          <PageHeader title="Contact Us" />
          <PageHeaderSubText text="Got something to tell us?" />
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactUsContainer;
