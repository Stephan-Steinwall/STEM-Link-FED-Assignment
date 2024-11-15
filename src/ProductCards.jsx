import React, { useState } from 'react';
import ProductCardsView from './ProductCardsView';
import { Separator } from '@/components/ui/separator';
import { RadioGroup } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';

function ProductCards() {
  const products = [
    {
      categoryId: '1',
      path: '/assets/images/airpods max.jpg',
      name: 'Airpods Max',
      price: 599,
      _id: '1',
    },
    {
      categoryId: '2',
      path: '/assets/images/Homepod Mini.jpg',
      name: 'Homepod Mini',
      price: 99,
      _id: '2',
    },
    {
      categoryId: '3',
      path: '/assets/images/Meta quest.jpg',
      name: 'Meta quest',
      price: 399,
      _id: '3',
    },
    {
      categoryId: '4',
      path: '/assets/images/vision pro.jpg',
      name: 'vision pro',
      price: 499,
      _id: '4',
    },
  ];

  const categories = [
    {
      name: 'All',
      _id: 'ALL',
    },
    {
      name: 'Headphones',
      _id: '1',
    },
    {
      name: 'Smart Home',
      _id: '2',
    },
    {
      name: 'Metaverse',
      _id: '3',
    },
    {
      name: 'Apple',
      _id: '4',
    },
  ];

  const [sortDirection, setSortDirection] = useState('asc');
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const sortProducts = (products, direction) =>
    products.sort((a, b) =>
      direction === 'asc' ? a.price - b.price : b.price - a.price
    );

  const filteredProducts =
    selectedCategory === 'ALL'
      ? sortProducts(products, sortDirection)
      : sortProducts(products.filter((p) => p.categoryId === selectedCategory), sortDirection);

  return (
    <div className="px-8 py-8">
      <h2 className="text-4xl font-medium">Our Top Selling Products</h2>
      <Separator className="mt-2" />
      <div className="mt-4 flex items-center gap-4">

        {categories.map((category) => (
          <Button
            key={category._id}
            variant={selectedCategory === category._id ? 'default' : 'primary'}
            onClick={() => setSelectedCategory(category._id)}
          >
            {category.name}
          </Button>
        ))}
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Button
            variant={sortDirection === 'asc' ? 'default' : 'primary'}
            onClick={() => setSortDirection('asc')}
          >
            Price: Low to High
          </Button>
          <Button
            variant={sortDirection === 'desc' ? 'default' : 'primary'}
            onClick={() => setSortDirection('desc')}
          >
            Price: High to Low
          </Button>
        </div>
        <RadioGroup
          value={sortDirection}
          onChange={setSortDirection}
          options={[
            { label: 'Price: Low to High', value: 'asc' },
            { label: 'Price: High to Low', value: 'desc' },
          ]}
        />
      </div>
      <ProductCardsView products={filteredProducts} />
    </div>
  );
}

export default ProductCards;