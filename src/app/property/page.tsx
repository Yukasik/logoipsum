import React from "react";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { ModernHouse, SimilarListings } from "@/blocks";

const Property = () => {
  return (
    <div className="property">
      <Header isBackgroundTransparent={false} />
      <ModernHouse />
      <SimilarListings />
      <Footer />
    </div>
  );
};

export default Property;
