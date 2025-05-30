'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import imagePlaceHolder from '@/assets/default-image.png';
import Loader from '../loading/Loader';
import ErrorDisplay from '../error/ErrorDisplay';

export default function ResourceCardClient({ activeFilter }) {
  //states
  const [indicators, setIndicators] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //method to fetch indicators using filtering
  const fetchIndicators = async (filter) => {
    setLoading(true);
    try {
      const API_BASE_URL = 'http://localhost:8080/api';
      let url = '';

      //endpoint when display all is selected
      if (filter && filter.toLowerCase() === 'display all') {
        url = `${API_BASE_URL}/indicators?t=${Date.now()}`;
      } else if (filter && filter !== 'Display all') {
        let filterToSend =
          filter === 'Leadership' ? 'Environmental leadership' : filter;
        url = `${API_BASE_URL}/indicators/filter/category?category=${encodeURIComponent(
          filterToSend
        )}&t=${Date.now()}`;
      } else {
        //fallback if filter is not provided
        url = `${API_BASE_URL}/indicators?t=${Date.now()}`;
      }

      //logging url used to fetch data
      console.log('Fetching URl: ', url);
      const response = await axios.get(url);

      //adding artificial delay for smoother loading UX
      await new Promise((resolve) => setTimeout(resolve, 1200));

      //logging data response returned
      const data =
        response.data && Array.isArray(response.data) ? response.data : [];
      setIndicators(data);
    } catch (err) {
      setError('An Error occurred while fetching data.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  //use effect
  useEffect(() => {
    fetchIndicators(activeFilter);
  }, [activeFilter]);

  if (loading) {
    return <Loader message="Loading Data..." />;
  }

  if (error) {
    return (
      <ErrorDisplay
        message={error}
        onRetry={() => fetchIndicators(activeFilter)}
      />
    );
  }

  //display when there are no returned indicators
  if (!loading && indicators.length === 0 && activeFilter !== 'Display all') {
    return (
      <div className="text-center text-gray-700 py-8">
        <p>No Indicators found for this filter.</p>
      </div>
    );
  }

  //displayed when indicator data is empty and display all is selected
  if (!loading && indicators.length === 0 && activeFilter === 'Display all') {
    return (
      <ErrorDisplay
        message="No indicators available."
        onRetry={() => fetchIndicators(activeFilter)}
      />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {indicators.map((indicator) => (
        <div
          key={indicator.id}
          className="bg-white border border-gray-200 rounded p-4"
        >
          <div className="relative h-32 w-full bg-gray-300 overflow-hidden">
            {indicator.indicatorImage ? (
              <Image
                src={indicator.indicatorImage}
                alt="indicator-image"
                fill
                unoptimized
                className="object-cover"
              />
            ) : (
              <Image
                src={imagePlaceHolder}
                alt="placeholder"
                fill
                className="object-cover"
              />
            )}
          </div>
          <h2 className="text-xl font-bold">
            {indicator.organisationFullName}
          </h2>
          <p className="text-md text-gray-600">
            {indicator.indicatorShortName}
          </p>
          <Link
            href={`/resource/${indicator.id}`}
            className="text-teal-600 mt-2 inline-block hover:text-teal-500 font-semibold"
          >
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
}
