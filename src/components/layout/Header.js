import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
        </div>
        提格 & 托格
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#about">
          關於我們
        </AnchorLink>
        <AnchorLink className="px-4" href="#fursona">
          獸設
        </AnchorLink>
        <AnchorLink className="px-4" href="#gallery">
          委託畫作
        </AnchorLink>
        <AnchorLink className="px-4" href="#links">
          外部連結
        </AnchorLink>
      </div>
    </div>
  </header>
);

export default Header;
