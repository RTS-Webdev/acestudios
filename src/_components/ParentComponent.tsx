import React, { useState } from 'react';
import Carousel from './Carousel';
import Footer from './Footer';
import Navbar from './Navbar';
import { Slides } from '../_constants';

const ParentComponent: React.FC = () => {
  const [footerHidden, setFooterHidden] = useState(false);

  return (
    <>
      <Navbar setFooterHidden={setFooterHidden} />
      <div className="flex-grow">
        <Carousel slides={Slides} />
      </div>
      <Footer hidden={footerHidden} />
    </>
  );
};

export default ParentComponent;