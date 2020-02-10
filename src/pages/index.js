import React from 'react';
import LayoutMain from 'layouts/layout-main';
import SEO from 'components/shared/seo';
import MainSection from 'components/pages/index/mainSection/mainSection';
import SecondSection from 'components/pages/index/secondSection/secondSection';

const IndexPage = () => (
  <LayoutMain>
    <SEO />
    <MainSection />
    <SecondSection />
  </LayoutMain>
);

export default IndexPage;
