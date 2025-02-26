import HeroLayout from '@/components/image/hero-layout';
export default function Home() {
  return (
    <section className="container mx-auto py-8 px-4">
      {/* hero section */}
      <div className="bg-customNavyTeal  rounded text-white mb-8 p-4">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-customTextNavy to-customTealWhite bg-clip-text text-transparent mb-4">
          GEDA Dashboard
        </h1>
        <p className="mb-4 text-xl text-center text-customTextNavy">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          repellat id voluptates earum, suscipit odio animi dolorem eveniet quos
          cum quas beatae sit voluptate distinctio harum, aspernatur odit
          asperiores facere.
        </p>
      </div>
      {/* additional content image slider container  */}
      <div className="bg-gray-100 p-6 rounded">
        <HeroLayout />
      </div>

      {/* additional information */}
      <div className="rounded text-black mt-8 text-lg">
        <p className="mb-4 ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta,
          neque. Repellendus, id fuga ullam maiores voluptatibus harum obcaecati
          aspernatur sint vel magni commodi, laboriosam placeat, explicabo
          voluptatem dolorum quis consectetur. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Dicta, neque. Repellendus, id fuga ullam
          maiores voluptatibus harum obcaecati aspernatur sint vel magni
          commodi, laboriosam placeat, explicabo voluptatem dolorum quis
          consectetur.
        </p>
        <p className="mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta,
          neque. Repellendus, id fuga ullam maiores voluptatibus harum obcaecati
          aspernatur sint vel magni commodi, laboriosam placeat, explicabo
          voluptatem dolorum quis consectetur. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Dicta, neque. Repellendus, id fuga ullam
          maiores voluptatibus harum obcaecati aspernatur sint vel magni
          commodi, laboriosam placeat, explicabo voluptatem dolorum quis
          consectetur.
        </p>
        <p className="mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta,
          neque. Repellendus, id fuga ullam maiores voluptatibus harum obcaecati
          aspernatur sint vel magni commodi, laboriosam placeat, explicabo
          voluptatem dolorum quis consectetur.
        </p>
      </div>
    </section>
  );
}
