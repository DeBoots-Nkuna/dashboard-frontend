'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import axios from 'axios';
import AlertModal from '@/components/custom-pop-ups/AlertModal';

export default function EditIndicator() {
  const router = useRouter();
  const params = useParams();
  const { indicatorId } = params;

  const [indicator, setIndicator] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  //use effect to fetch data for current indicator
  useEffect(() => {
    async function fetchIndicator() {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/indicators/${indicatorId}`
        );

        //adding artificial delay for smoother loading UX
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const indicator = res.data;

        setIndicator(indicator);
      } catch (error) {
        setError('Failed to fetch indicator details.');
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    //involing method
    fetchIndicator();
  }, [indicatorId]);

  const handleChange = (e) => {
    setIndicator({ ...indicator, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `http://localhost:8080/api/indicators/${indicatorId}`,
        indicator
      );
      setAlertMessage(response.data);
    } catch (error) {
      setError('Failed to update Indicator.');
      console.error(error);
    }
  };

  //loading display
  if (loading) return <div className="text-center py-8">Loading..</div>;
  //error display
  if (error)
    return <div className="text-center text-red-500 py-8">{error}</div>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lh">
      <h1 className="text-3xl font-bold mb-6 text-teal-600 text-center">
        Edit Indicator
      </h1>
      <form onSubmit={handleUpdate} className="space-y-4">
        {/* indicator fullname */}
        <div>
          <label className="block font-semibold mb-1">
            Organisation FullName
          </label>
          <input
            type="text"
            className="w-full border px-3 rounded"
            name="organisationFullName"
            value={indicator.organisationFullName || ''}
            onChange={handleChange}
          />
        </div>
        {/* indicator contactname */}
        <div>
          <label className="block font-semibold mb-1">
            Organisation Contact Name
          </label>
          <input
            type="text"
            className="w-full border px-3 rounded"
            name="organisationContactName"
            value={indicator.organisationContactName || ''}
            onChange={handleChange}
          />
        </div>
        {/* indicator email */}
        <div>
          <label className="block font-semibold mb-1">
            Organisation Contact Email
          </label>
          <input
            type="text"
            className="w-full border px-3 rounded"
            name="organisationContactEmail"
            value={indicator.organisationContactEmail || ''}
            onChange={handleChange}
          />
        </div>
        {/* indicator website */}
        <div>
          <label className="block font-semibold mb-1">
            Organisation Website
          </label>
          <input
            type="text"
            className="w-full border px-3 rounded"
            name="organisationWebsite"
            value={indicator.organisationWebsite || ''}
            onChange={handleChange}
          />
        </div>
        {/* indicator description */}
        <div>
          <label className="block font-semibold mb-1">
            Indicator Description
          </label>
          <input
            type="text"
            className="w-full border px-3 rounded"
            name="indicatorDescription"
            value={indicator.indicatorDescription || ''}
            onChange={handleChange}
          />
        </div>
        {/* indicator methodology */}
        <div>
          <label className="block font-semibold mb-1">Methodology</label>
          <input
            type="text"
            className="w-full border px-3 rounded"
            name="methodology"
            value={indicator.methodology || ''}
            onChange={handleChange}
          />
        </div>
        {/* communication details */}
        <div>
          <label className="block font-semibold mb-1">
            Communication Details
          </label>
          <input
            type="text"
            className="w-full border px-3 rounded"
            name="communicationDetails"
            value={indicator.communicationDetails || ''}
            onChange={handleChange}
          />
        </div>

        {/* update button */}
        <button
          type="submit"
          className="w-full bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
        >
          Update Indicator
        </button>
      </form>

      {/* alertmessage modal */}
      {alertMessage && (
        <AlertModal
          message={alertMessage}
          onClose={() => {
            setAlertMessage('');
            router.push(`/resource/${indicatorId}`);
          }}
        />
      )}
    </div>
  );
}
