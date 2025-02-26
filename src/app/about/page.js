export default function About() {
  return (
    <section className="container mx-auto py-12 px-6">
      {/* hero section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
          molestias, libero modi dolores magnam sit commodi quod perferendis?
          Sint fuga nam dolor expedita a, doloribus labore ut iure rerum
          similique?
        </p>
      </div>

      {/* grid section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* mission */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Our Mission</h3>
          <p className="text-gray-700">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit,
            enim? Aspernatur est, officiis praesentium aperiam, corrupti
            veritatis repellendus saepe, quae doloribus accusamus voluptatem
            corporis maxime laborum odio. Dolore, aspernatur consequatur.
          </p>
          <p className="text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo fugit
            commodi aperiam, dolores labore velit mollitia adipisci nobis earum
            iure eius veritatis fuga incidunt modi quasi beatae voluptatum ad
            id.
          </p>
        </div>

        {/* vision */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Our Vision</h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            magnam maiores quia quod. Nulla placeat debitis omnis laborum soluta
            cupiditate rerum aperiam enim, reprehenderit porro tempora tempore
            iure quos in?
          </p>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            sapiente autem ipsum voluptatibus voluptatum provident. Adipisci
            dolor harum maiores! Cum reiciendis iure fugit minima voluptatem
            nobis, quasi quam atque consequuntur!
          </p>
        </div>
      </div>

      {/* story section */}
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          porttitor, purus eu vehicula aliquam, lectus odio vestibulum justo,
          non maximus magna justo in nunc. Sed quis elementum orci. Aenean
          fermentum diam sit amet libero consectetur, non ullamcorper mi
          lobortis. Mauris malesuada vestibulum justo, ac facilisis enim viverra
          ac.
        </p>
        <p className="text-gray-700">
          Donec in neque nec nisl vulputate consectetur at et leo. Integer
          placerat, massa in varius aliquam, mauris lectus consectetur arcu, nec
          ultricies felis justo et metus. Sed lobortis mauris nec urna semper,
          sit amet maximus mi interdum.
        </p>
      </div>
    </section>
  );
}
