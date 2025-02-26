import { notFound } from 'next/navigation';
import Image from 'next/image';
import defaultImg from '@/assets/default-image.png';

export default async function IndicatorDetailedPage({ params }) {
  const { indicatorId } = await params;

  //fetching the indicator details from the backend

  const res = await fetch(
    `http://localhost:8080/api/indicators/${indicatorId}`,
    { cache: 'no-store' }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch Indicator details.');
  }

  //adding artificial delay for smoother loading UX
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const indicator = await res.json();

  //parsing  array data if its JSON stringy
  let indicatorFootprint;
  try {
    indicatorFootprint = JSON.parse(indicator.indicatorFootprint);
  } catch (err) {
    indicatorFootprint = indicator.indicatorFootprint;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      {/* heading  */}
      <h1 className="text-3xl font-bold mb-6">
        {indicator.indicatorShortName}
      </h1>

      {/* image placeholder */}
      <div className="relative w-1/2 h-64 bg-gray-300 mb-8 mx-auto">
        <Image
          src={defaultImg}
          alt="default-image-placeholder"
          fill
          className="object-cover"
        />
      </div>

      {/* organisation details */}

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Organisation Details</h2>
        <p className="mb-1">
          <span className="font-semibold">Full Name:</span>{' '}
          {indicator.organisationFullName}
        </p>
        <p className="mb-1">
          <span className="font-semibold">Contact Name:</span>{' '}
          {indicator.organisationContactName}
        </p>
        <p className="mb-1">
          <span className="font-semibold">Email:</span>{' '}
          {indicator.organisationContactEmail}
        </p>
        <p className="mb-1">
          <span className="font-semibold">Website:</span>{' '}
          <a
            href={indicator.organisationWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 hover:underline"
          >
            {indicator.organisationWebsite}
          </a>
        </p>
      </div>

      {/* indicator details */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Indicator Details</h2>
        <p className="mb-1">
          <span className="font-semibold">Description:</span>{' '}
          {indicator.indicatorDescription}
        </p>
        <p className="mb-1">
          <span className="font-semibold">Indicator Footprint:</span>{' '}
          {Array.isArray(indicatorFootprint)
            ? indicatorFootprint.join(', ')
            : indicator.indicatorFootprint}
        </p>
        <p className="mb-1">
          <span className="font-semibold ">Start Year:</span>{' '}
          {indicator.indicatorYearStart}
        </p>
      </div>

      {/* Methodology & Communication */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          Methodology & Communication
        </h2>
        <p className="mb-1">
          <span className="font-semibold">Methodology:</span>{' '}
          {indicator.methodology}
        </p>
        <p className="mb-1 mt-6">
          <span className="font-semibold">Communication Details:</span>{' '}
          {indicator.communicationDetails}
        </p>
      </div>
    </div>
  );
}
