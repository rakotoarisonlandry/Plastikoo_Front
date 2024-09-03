import Image from 'next/image';
import { Reveal } from "../utils/Reveal";

type Props = {};

const SectionSensibilisation: React.FC<Props> = () => {
  return (
    <section className="py-16 px-4 bg-white text-dark">
      <div className="max-w-6xl mx-auto">

        <Reveal>
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">Sensibilisation</h2>
        </Reveal>


        <div className="flex flex-col lg:flex-row mb-12">


            <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
              <Image 
                src="/communaute.png" 
                alt="Sensibilisation" 
                width={300}
                height={300}
                layout="responsive"
                className="rounded-lg shadow-lg object-contain"
              />
            </div>
   



            <div className="w-full lg:w-1/2 lg:pl-12">
              <h3 className="text-2xl font-bold text-green-600 mb-4">Notre communauté</h3>
              <p className="text-lg text-gray-700 mb-6">
                Nous avons créé une communauté pour partager des contenus éducatifs, 
                inspirer des actions durables, et favoriser des discussions autour 
                de l'importance du recyclage et de la protection de l'environnement.
              </p>


              <ul className="list-none space-y-4">
                <li className="flex items-start">
                  <span className="text-4xl font-bold text-green-600">01</span>
                  <p className="ml-4 text-lg text-black font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-4xl font-bold text-green-600">02</span>
                  <p className="ml-4 text-lg text-black font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-4xl font-bold text-green-600">03</span>
                  <p className="ml-4 text-lg text-black font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-4xl font-bold text-green-600">04</span>
                  <p className="ml-4 text-lg text-black font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-4xl font-bold text-green-600">05</span>
                  <p className="ml-4 text-lg text-black font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-4xl font-bold text-green-600">06</span>
                  <p className="ml-4 text-lg text-black font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-4xl font-bold text-green-600">07</span>
                  <p className="ml-4 text-lg text-black font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-4xl font-bold text-green-600">08</span>
                  <p className="ml-4 text-lg text-black font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-4xl font-bold text-green-600">09</span>
                  <p className="ml-4 text-lg text-black font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </li>
              </ul>
            </div>
     
        </div>


        <div className="flex flex-col lg:flex-row justify-center">


            <div className="w-full lg:w-1/2 flex flex-col items-center mb-8 lg:mb-0 lg:pr-4">
              <h3 className="text-2xl font-bold text-black mb-4">Notre tiny classroom</h3>
              <Image 
                src="/tiny-classroom.png" 
                alt="Tiny Classroom" 
                width={400}
                height={400}
                layout="responsive"
                className="rounded-lg shadow-lg object-contain"
              />
            </div>
       

     
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:pl-4">
              <h3 className="text-2xl font-bold text-black mb-4">Notre tiny library</h3>
              <Image 
                src="/tiny-library.png" 
                alt="Tiny Library" 
                width={400}
                height={400}
                layout="responsive"
                className="rounded-lg shadow-lg object-contain"
              />
            </div>
     
        </div>
      </div>
    </section>
  );
};

export default SectionSensibilisation;
