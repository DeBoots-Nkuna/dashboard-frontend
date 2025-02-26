'use client';

import ResourceCardClient from '@/components/resource/ResourceCardClient';
import React, { useState } from 'react';

export default function ResourcePage() {
  const [activeFilter, setActiveFilter] = useState('Display All');
  //filter buttons
  const filters = [
    'Display all',
    'Agriculture',
    'Climate change',
    'Leadership',
    'Biodiversity',
    'Nutrition',
    'Fisheries',
  ];
  return (
    <section className="container mx-auto py-8 px-4">
      {/* heading and filter buttons */}
      <h1 className="text-3xl font-bold mb-4">Data Center</h1>
      <p className="mb-4 ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem
        nesciunt provident doloremque nobis amet molestiae? Ut beatae
      </p>

      {/* filter buttons */}

      {/* Filter Buttons */}
      <div className="mb-6 space-x-2">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`px-3 py-1 rounded ${
              activeFilter === filter
                ? 'bg-teal-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* card section */}
      <div className="h-full">
        <ResourceCardClient activeFilter={activeFilter} />
      </div>

      {/* pagination section */}
      {/* <div className="flex justify-center mt-6">
        <nav className="flex space-x-2">
          <button className="px-3 py-1 rounded bg-gray-300">1</button>
          <button className="px-3 py-1 rounded border border-gray-300">
            2
          </button>
          <button className="px-3 py-1 rounded border border-gray-300">
            3
          </button>
        </nav>
      </div> */}
    </section>
  );
}
