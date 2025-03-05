'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';
import ConfirmModal from '../custom-pop-ups/ConfirmModal';
import AlertModal from '../custom-pop-ups/AlertModal';

export default function IndicatorActions({ id }) {
  const router = useRouter();
  const [showConfirm, setShowConfirm] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  //method to delete indicator
  const handleDelete = async () => {
    // if (confirm('Are you sure you want to delete this indicator')) {
    console.log('Delete button confirmed');
    // }
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/indicators/${id}`
      );
      //waiting for response from backend
      setShowConfirm(false);

      // adding delay when showing alert modal
      setTimeout(() => {
        setAlertMessage(response.data);
      }, 500);
    } catch (error) {
      // console.error('Failed to delete indicator: ', error);
      console.error('Failed to delete indicator: ', error);
      setAlertMessage('Failed to delete indicator.');
    }
  };

  return (
    <div className="flex justify-end mt-6 space-x-4">
      {/* edit button
       */}
      <Link
        href={`/resource/${id}/edit`}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
      >
        Edit Indicator
      </Link>

      {/* delete button
       */}
      <button
        onClick={() => {
          console.log('Delete button clicked , showing confirm modal');
          setShowConfirm(true);
        }}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
      >
        Delete Indicator
      </button>
      {/* confirmation modal display */}
      {showConfirm && (
        <ConfirmModal
          message="Are you sure you want to delete this indicator?"
          onConfirm={handleDelete}
          onCancel={() => setShowConfirm(false)}
        />
      )}
      {/* alert modal display */}
      {alertMessage && (
        <AlertModal
          message={alertMessage}
          onClose={() => {
            setAlertMessage('');
            //if statement
            if (alertMessage.includes('delete')) {
              router.push('/resource');
            }
          }}
        />
      )}
    </div>
  );
}
