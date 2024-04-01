import React from 'react';

function WhyModular() {
  return (
    <main>
      <section className='why-modular mx-auto min-h-[80vh] grid place-content-center text-center bg-altBg bg-fixed'>
        <h1 className='text-2xl md:text-4xl lg:text-6xl font-bold mb-3 text-acc'>
          Why Modular?
        </h1>
        <p className='text-xl text-bg'>
          Here are some insights as to why modular buildings are better and the
          future
        </p>
      </section>
      <section className='px-6 lg:px-10 py-14 flex flex-col gap-4 lg:gap-8 bg-altBg'>
        <div>
          <h2 className='font-medium lg:text-4xl'>
            What is a Modular Building?
          </h2>
          <p>
            Modular buildings are prefabricated structures that are built in a
            factory and then transported to the site where they will be used.
            They are made up of individual sections or modules that are
            connected together to form a complete building.
          </p>
        </div>
        <h2 className='font-medium lg:text-4xl'>Modular vs Traditional</h2>
        <div>
          <h3>Cost:</h3>
          <p>Modular buildings are cheaper to build and maintain</p>

          <h3>Time:</h3>
          <p>Modular buildings are faster to build</p>

          <h3>Quality:</h3>
          <p>Modular buildings are of higher quality</p>

          <h3>Environmental Impact:</h3>
          <p>Modular buildings are eco-friendly</p>

          <h3>Design:</h3>
          <p>Modular buildings allow for more creative designs</p>
        </div>
      </section>
    </main>
  );
}

export default WhyModular;
