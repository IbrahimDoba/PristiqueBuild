import Image from 'next/image';
import React from 'react';
import meeting from '../../../assets/men mount.jpg';

const About = () => {
  return (
    <main>
      <section className='about text-acc mx-auto min-h-[65vh] grid place-content-center text-center bg-altBg bg-fixed'>
        <h1 className='text-2xl md:text-4xl lg:text-6xl font-bold uppercase mb-4'>
          Pristiq Build
        </h1>
        <p className='max-w-screen-md'>
          We are a team of architects and enviroment enthusiasts dedicated to
          improving our enviroment by usings renewable and eco-friendly
          materials and methods.
        </p>
      </section>

      <div>
        <section id='info' className='p-6 md:px-8 lg:px-24'>
          <div className='w-full flex flex-col md:flex-row gap-4 justify-between'>
            <div className='flex flex-col gap-4 lg:gap-6 h-full'>
              <h2 className='text-2xl lg:text-4xl font-bold mt-4 uppercase'>
                our dna
              </h2>
              <p className='mt-4 md:text-lg lg:text-xl max-w-[500px]'>
                PristiqBuild is revolutionizing Nigeria&apos;s construction
                industry with innovative modular solutions. Led by a visionary
                team, we&apos; re committed to reshaping the future of
                construction for a more sustainable and efficient tomorrow.
              </p>
            </div>
            <div className='flex flex-col gap-4 lg:gap-6 h-full'>
              <h2 className='text-2xl lg:text-4xl font-bold mt-4 uppercase'>
                our dna
              </h2>
              <p className='mt-4 md:text-lg lg:text-xl max-w-[500px]'>
                PristiqBuild is revolutionizing Nigeria&apos;s construction
                industry with innovative modular solutions. Led by a visionary
                team, we&apos; re committed to reshaping the future of
                construction for a more sustainable and efficient tomorrow.
              </p>
            </div>
          </div>
        </section>

        <section className='max-lg:flex flex-col gap-8 px-6 md:px-8 lg:px-24 py-14'>
          <div className='flex max-lg:flex-col gap-4 lg:gap-8 justify-between'>
            <div className='w-full h-[200px] lg:w-[400px] lg:h-[400px] bg-acc lg:order-2'></div>
            <div className='flex flex-col justify-center'>
              <p className='font-bold text-2xl lg:text-4xl mb-5'>Our Mission</p>
              <p className='max-w-[500px] font-medium md:text-lg lg:text-xl'>
                To revolutionize Nigeria&apos;s construction industry with
                innovative modular solutions. We are committed to delivering
                sustainable, efficient, and high-quality construction projects
                that meet the evolving needs of our clients.
              </p>
            </div>
          </div>
          <div className='flex max-lg:flex-col gap-4 lg:gap-8 justify-between'>
            <div className='w-full h-[200px] lg:w-[400px] lg:h-[400px] bg-acc'></div>
            <div className='flex flex-col justify-center'>
              <p className='font-bold text-2xl lg:text-4xl mb-5'>Our Vision</p>
              <p className='max-w-[500px] font-medium md:text-lg lg:text-xl'>
                Our vision extends beyond conventional practices. We aspire to
                lead the charge towards ecological and cost-effective solutions,
                impacting communities across Nigeria.
              </p>
            </div>
          </div>
        </section>

        <section className='px-6 md:px-8 lg:px-24 py-14'>
          <h2 className='font-bold text-2xl lg:text-4xl mb-5'>Meet the team</h2>
          <article className='flex flex-col md:flex-row gap-8 justify-between'>
            <div className='flex flex-col'>
              <Image src={''} alt='Yusuf' />
              <div className='p-4 md:p-6 lg:bg-acc lg:text-white flex flex-col gap-4'>
                <div>
                  <h3 className='text-lg lg:text-2xl font-bold'>Yusuf Doba</h3>
                  <p className='font-bold'>Founder & CEO</p>
                </div>
                <p>
                  As the CEO, Yusuf spearheads PristiqBuild&apos;s strategic
                  vision. With a background in Project Management, he has a
                  proven track record of successful ventures, showcasing his
                  leadership and business acumen
                </p>
              </div>
            </div>
            <div className='flex flex-col'>
              <Image src={''} alt='Abdulaziz' />
              <div className='p-4 md:p-6 lg:bg-acc lg:text-white flex flex-col gap-4'>
                <div>
                  <h3 className='text-lg lg:text-2xl font-bold'>
                    Abdulaziz Ibrahim
                  </h3>
                  <p className='font-bold'>Co Founder & COO</p>
                </div>
                <p>
                  Abdulaziz, as the COO, ensures seamless operations and project
                  execution. His extensive experience in Construction guarantees
                  efficiency and quality in every facet of PristiqBuild&apos;s
                  projects.
                </p>
              </div>
            </div>
            <div className='flex flex-col'>
              <Image src={''} alt='Najibu' />
              <div className='p-4 md:p-6 lg:bg-acc lg:text-white flex flex-col gap-4'>
                <div>
                  <h3 className='text-lg lg:text-2xl font-bold'>Najibu Musa</h3>
                  <p className='font-bold'>Co Founder & CTO</p>
                </div>
                <p>
                  Najib, our CTO, is the visionary behind the integration of
                  cutting-edge technology in our modular construction processes.
                  His expertise in Structural Engeneering positions PristiqBuild
                  as a pioneer in construction innovation.
                </p>
              </div>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
};

export default About;
