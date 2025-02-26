import '../../app/globals.css';

export default function Loader({ message = 'Loading...' }) {
  return (
    <div className="loader-container flex flex-col items-center justify-center">
      <div className="w-12 border-4 border-teal border-dashed rounded-full animate-spin"></div>
      <span className="mt-4 text-teal-600 text-lg">{message}</span>
    </div>
  );
}
