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
      <h1 className="text-3xl font-bold mb-4 text-customNavyTeal">
        Data Center
      </h1>
      <p className="mb-4 text-lg">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem
        nesciunt provident doloremque nobis amet molestiae? Ut beatae
      </p>

      {/* Filter Buttons */}
      <div className="mb-6">
        {/* display of buttons horizontally */}
        <div className="hidden md:flex space-x-2">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`px-3 py-1 rounded hover:bg-gray-300 transition-colors ${
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

        {/* dropdown display for small scrren */}
        <div className="md:hidden">
          <select
            className="w-full p-2 border rounded"
            value={activeFilter}
            onChange={(e) => setActiveFilter(e.target.value)}
          >
            {filters.map((filter) => (
              <option value={filter} key={filter}>
                {filter}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* card section */}
      <div className="h-full">
        <ResourceCardClient activeFilter={activeFilter} />
      </div>
    </section>
  );
}
