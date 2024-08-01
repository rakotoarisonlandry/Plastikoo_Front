import React from "react";
import { FaGlobe, FaHome, FaTree, FaLightbulb } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
type Props = {};

const solutions = [
  {
    title: "Transformons l’avenir  ",
    description: "",
    icon: <BiWorld />,
  },
  {
    title: "Construisons ensemble",
    description: "",
    icon: <FaHome />,
  },
  {
    title: "Inspirons le changement",
    description: "",
    icon: <FaTree />,
  },
  {
    title: "Innovons avec passion",
    description: "",
    icon: <FaLightbulb />,
  },
];

const Solution: React.FC<Props> = () => {
  return (
    <div className="text-center py-10 bg-gradient-to-r from-blue-500 to-green-500 text-white">
      <h2 className="text-[40px] font-bold mb-2">Nos valeurs</h2>
      <p className="text-[15px] mb-8 px-10 md:px-20 lg:px-44">
        Chez Plastikôo, nos valeurs sont au cœur de tout ce que nous faisons.
        Elles reflètent notre engagement envers environnement et la
        communauté, orientant chaque étape de notre mission pour un futur plus
        durable.
      </p>
      <div className="flex justify-center flex-wrap">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 m-4 w-64 hover:translate-y-[-10px] transition duration-300 text-center text-black"
          >
            <div className="text-4xl text-black mb-4">{solution.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solution;
