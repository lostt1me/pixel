import React from 'react';
import LayoutMain from 'layouts/layout-main';
import SEO from 'components/shared/seo';

const IndexPage = () => (
  <LayoutMain>
    <SEO />
    <div className="container">
      <div className="columns">
        <div className="column">1</div>
        <div className="column">2</div>
        <div className="column">3</div>
      </div>
    </div>
  </LayoutMain>
);

export default IndexPage;
