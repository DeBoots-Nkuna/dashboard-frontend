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
    <div className="container mx-auto py-12 px-6">
      {/* heading */}
      <h1 className="text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-customNavyTeal to-customTealWhite bg-clip-text text-transparent">
        {indicator.indicatorShortName}
      </h1>

      {/* image placeholder */}
      <div className="relative w-full md:w-1/2 h-64 bg-gray-300 mb-10 mx-auto shadow-lg rounded-lg overflow-hidden">
        {indicator.indicatorImage ? (
          <Image
            src={indicator.indicatorImage}
            alt="Indicator Image"
            fill
            unoptimized
            className="object-cover"
          />
        ) : (
          <image
            src={defaultImg}
            alt="default image placeholder"
            fill
            className="object-cover"
          />
        )}
      </div>

      {/* details grid */}
      <div className="grid grid-cols-1 md:grid-cols gap-8 mb-10">
        {/* organisation details */}
        <div className="p-6 border border-gray-200 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-teal-600">
            Organisation Details
          </h2>
          <p className="mb-2">
            <span className="font-semibold">Full Name:</span>{' '}
            {indicator.organisationFullName}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Contact Name:</span>{' '}
            {indicator.organisationContactName}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Email:</span>{' '}
            {indicator.organisationContactEmail}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Website:</span>{' '}
            <a
              href={indicator.organisationWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:underline"
            >
              {indicator.organisationWebsite}
            </a>
          </p>
        </div>

        {/* indicator details */}
        <div className="p-6 border border-gray-200 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-teal-600">
            Indicator Details
          </h2>
          <p className="mb-2">
            <span className="font-semibold">Description:</span>{' '}
            {indicator.indicatorDescription}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Indicator Footprint:</span>{' '}
            {Array.isArray(indicatorFootprint)
              ? indicatorFootprint.join(', ')
              : indicator.indicatorFootprint}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Start Year:</span>{' '}
            {indicator.indicatorYearStart}
          </p>
        </div>
      </div>

      {/* methodology and communication */}
      <div className="p-6 border border-gray-200 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4 text-teal-600">
          Methodology & Communication
        </h2>
        <p className="mb-4">
          <span className="font-semibold">Methodology:</span>{' '}
          {indicator.methodology}
        </p>
        <p className="mb-0">
          <span className="font-semibold">Communication Details:</span>{' '}
          {indicator.communicationDetails}
        </p>
      </div>
    </div>
  );
}
