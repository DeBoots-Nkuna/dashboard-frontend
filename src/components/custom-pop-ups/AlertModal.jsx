'use client';

export default function AlertModal({
  message,
  onClose,
  companyName = 'GEDA Dashboard',
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        <h3 className="text-xl font-bold mb-4 text-teal-500">
          {companyName} Alert
        </h3>
        <p className="mb-6">{message}</p>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
