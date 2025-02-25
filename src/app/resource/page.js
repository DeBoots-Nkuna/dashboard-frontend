import ResourceCard from '@/components/resource/ResourceCard';

import { Suspense } from 'react';

export default function ResourcePage() {
  return (
    <section className="container mx-auto py-8 px-4">
      {/* heading and filter buttons */}
      <h1 className="text-3xl font-bold mb-4">Data Center</h1>
      <p className="mb-4 ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem
        nesciunt provident doloremque nobis amet molestiae? Ut beatae
      </p>
      <div className="mb-6 space-x-2">
        <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 mb-4">
          Display All
        </button>
        <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 mb-4">
          Agriculture
        </button>
        <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 mb-4">
          Leadership
        </button>
        <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 mb-4">
          Climate Change
        </button>
        <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 mb-4">
          Policy Making
        </button>
        <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 mb-4">
          Advocacy
        </button>
        <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 mb-4">
          Policy Research
        </button>
      </div>

      {/* indicator card displayed only when data is fetched  */}
      <Suspense
        fallback={
          <p className="text-center animate-loading">Loading Indicators...</p>
        }
      >
        <ResourceCard />
      </Suspense>

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
