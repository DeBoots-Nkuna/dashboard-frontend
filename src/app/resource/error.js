'use client';

import { useRouter } from 'next/navigation';
import { startTransition } from 'react';

export default function Error({ error, reset }) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div className="text-center p-4">
      <h2 className="text-xl font-bold text-red-600">Error Loading Data</h2>
      {error.message === 'fetch failed' ? (
        <p>Server currently down.Please try again later.</p>
      ) : (
        <p>Sorry, we could not find the requested page.</p>
      )}
      <button
        className="mt-4 px-4 py-2 bg-teal-600 text-white rounded"
        onClick={() => reload()}
      >
        Try Again
      </button>
    </div>
  );
}
