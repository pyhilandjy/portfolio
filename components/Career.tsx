import React from "react";
import ClabMVP from "./ClabMVP";
import TalkD from "./TalkD";

const Career: React.FC = () => {
  return (
    <section className="py-20 px-10 bg-gradient-to-b from-blue-400 to-blue-100 text-gray-800">
      <h1 className="text-5xl font-bold text-center mb-16">∙ Career ∙</h1>
      <div className="space-y-16">
        <div>
          <TalkD />
        </div>
        <div>
          <ClabMVP />
        </div>
      </div>
    </section>
  );
};

export default Career;
