import React from "react";
import ConnectsLab from "./ConnectsLab";
import StockLSTM from "./StockLSTM";

const Projects: React.FC = () => {
  return (
    <section className="py-20 px-10 bg-gradient-to-b from-teal-300 to-teal-100 text-gray-800">
      <h1 className="text-5xl font-bold text-center mb-16">∙ Projects ∙</h1>
      <div className="space-y-16">
        <div>
          <ConnectsLab />
        </div>
        <div>
          <StockLSTM />
        </div>
      </div>
    </section>
  );
};

export default Projects;
