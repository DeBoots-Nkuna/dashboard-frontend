export default function ErrorDisplay({
  message = 'An error occurred.',
  onRetry,
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* error icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-red-500 mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M18.364 5.636l-12.728 12.728M5.636 5.636l12.728 12.728"
        />
      </svg>
      <p className="text-red-500 text-lg text-center">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-4 px-4 py-2 bg-red-400 text-white rounded hover:bg-red-600 transition-colors"
        >
          Retry
        </button>
      )}
    </div>
  );
}
