// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import placeHolderImage from '@/assets/indicator-placeholder.png';

// //async method that fetches data from the backend

// export default async function ResourceCard() {
//   const rest = await fetch('http://localhost:8080/api/indicators');
//   if (!rest.ok) {
//     throw new Error('Failed to fetch indicators');
//   }

//   const indicators = await rest.json();

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {indicators.map((indicator) => (
//         <div
//           key={indicator.id}
//           className="bg-white border-gray-200 rounded p-4"
//         >
//           <div className="relative h-32 w-full bg-gray-300 mb-3">
//             <Image
//               src={placeHolderImage}
//               alt="image-placeholder"
//               fill
//               className="object-cover"
//             />
//           </div>
//           <h2 className="text-xl font-bold">
//             {indicator.organisationFullName}
//           </h2>
//           <p className="text-sm">{indicator.indicatorShortName}</p>
//           <Link
//             href={`/resource/${indicator.id}`}
//             className="text-teal-600 mt-2 inline-block hover:text-teal-400"
//           >
//             Read More
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// }
