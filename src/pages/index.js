import React from 'react';
import Button from '../components/Button';
import CardList from '../components/CardList';
import FursonaCard from '../components/FursonaCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import HeroImage from '../svg/HeroImage';
import GalleryCard from '../components/GalleryCard';
import Fancybox from "../components/Fancybox";

import fursonaData from '../data/fursona';
import galleryData from '../data/gallery';

const Index = () => (
  <Layout>
    <section id="about"></section>
    <section id="fursona" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">獸設</h2>
        <Fancybox>
          <CardList className="flex flex-col md:flex-row md:-mx-3 flex-wrap">
            {fursonaData.map((fursona, i) => (
              <FursonaCard
                key={`fursona${i}`}
                className="flex-1 px-3"
                fursona={fursona}
              />
            ))}
          </CardList>
        </Fancybox>
      </div>
    </section>
    <section id="gallery" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">委託畫作</LabelText>
        <Fancybox>
          <CardList className="flex flex-col md:flex-row md:-mx-3 flex-wrap">
            {galleryData.map((gallery, i) => (
              <GalleryCard
                key={`gallery${i}`}
                index={i}
                className="flex-1 px-1 mb-5"
                gallery={gallery}
              />
            ))}
          </CardList>
        </Fancybox>
      </div>
    </section>
    <section id="links"></section>
  </Layout>
);

export default Index;
