import React from 'react';
import Button from '../components/Button';
import FursonaCard from '../components/FursonaCard';
import Gallery from '../components/Gallery';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import fursonaData from '../data/fursona-data';
import HeroImage from '../svg/HeroImage';

const Index = () => (
  <Layout>
    <section id="about"></section>
    <section id="fursona" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">獸設</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          {fursonaData.map((fursona, i) => (
            <FursonaCard
              key={`fursona${i}`}
              className="flex-1 px-3"
              fursona={fursona}
            />
          ))}
        </div>
      </div>
    </section>
    <section id="gallery" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">委託畫作</LabelText>
        <Gallery className="flex flex-col md:flex-row md:-mx-3 flex-wrap" />
      </div>
    </section>
    <section id="links"></section>
  </Layout>
);

export default Index;
