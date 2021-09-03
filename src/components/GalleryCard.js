import React from 'react';
import Card from './Card';

const GalleryCard = ({ index, className, gallery }) => (
  <div className={`cursor-pointer ${className}`}>
    <Card image={gallery.image}>
      <div className="float-left mb-2">
        <p className="float-left">角色: </p>
        {gallery.member.map((member, i) => (
          <a key={`member${index}${i}`} className="ml-1 mr-1" href={member.link} target="_blank">{member.name}</a>
        ))}
      </div>
      <img
        className="object-contain object-center w-72 h-72 mx-auto"
        src={gallery.image}
        alt={gallery.painter.name}
      />
      <div className="float-right mt-2">
        <p className="float-left">繪師: </p>
        <a className="ml-1 mr-1" href={gallery.painter.link} target="_blank">{gallery.painter.name}</a>
      </div>
    </Card>
  </div>
);

export default GalleryCard;
