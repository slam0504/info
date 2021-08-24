import React from 'react';
import Card from './Card';

const FursonaCard = ({ customer }) => (
  <Card className="mb-8">
    <p className="text-xl font-semibold">{customer.title}</p>
    <img
      className="object-contain object-center bg-yellow-300 w-64 h-64 mx-auto mt-8"
      src={customer.image}
      alt={customer.painter}
    />
  </Card>
);

export default FursonaCard;
