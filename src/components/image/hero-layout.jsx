import Link from 'next/link';
import ImageSlideshow from './imageSlide';

export default function HeroLayout() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center">
        {/* Left Column: Image Slider */}
        <div className="md:w-1/2 w-full relative h-80 md:h-96">
          <ImageSlideshow />
        </div>

        {/* Right Column: Text & Buttons */}
        <div className="md:w-1/2 w-full mt-6 md:mt-0 md:pl-8">
          <h1 className="text-3xl font-bold mb-4 text-customNavyTeal">
            Heading
          </h1>
          <p className="mb-6 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            nisi tempora sint id accusantium, nam enim ratione, quibusdam eius
            fugit ex est molestiae recusandae sit aliquam iusto aperiam quam?
          </p>
          <div className="flex space-x-4">
            <Link
              href="/resource"
              className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 mb-4"
            >
              Get Started
            </Link>
            <Link
              href="about"
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 mb-4"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
