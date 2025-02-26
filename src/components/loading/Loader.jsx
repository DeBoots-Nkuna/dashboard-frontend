export default function Loader({ message = 'Loading...' }) {
  return (
    <div
      className="flex flex-col items-center justify-center h-full"
      style={{ minHeight: 'calc(100vh - 160px)' }}
    >
      <div className="w-8 h-8 rounded-full animate-bounceColor"></div>
      <span className="mt-4 text-teal-600 text-lg">{message}</span>
    </div>
  );
}
