import React from 'react';
import Card from './Card';

const FursonaCard = ({ className, fursona }) => (
  <div className={className}>
    <Card className="mb-8">
      <p className="text-xl font-semibold">{fursona.title}</p>
      <img
        className="object-contain object-center w-72 h-72 mx-auto mt-8"
        src={fursona.image}
        alt={fursona.painter}
      />
    </Card>
  </div>
);

export default FursonaCard;
