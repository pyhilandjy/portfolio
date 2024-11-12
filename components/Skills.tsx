// components/Skills.tsx
import React from "react";

const Skills: React.FC = () => {
  return (
    <>
      <h2 className="text-4xl font-bold mb-16 text-center">∙ Skills ∙</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-xl font-semibold">Frameworks</h3>
          <ul className="list-disc list-inside ml-1 mt-2">
            <li>FastAPI</li>
            <li>Airflow</li>
            <li>Next.js</li>
            <li>React</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Databases</h3>
          <ul className="list-disc list-inside ml-1 mt-2">
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Cloud</h3>
          <ul className="list-disc list-inside ml-1 mt-2">
            <li>AWS EC2</li>
            <li>AWS S3</li>
            <li>Supabase</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Version Control</h3>
          <ul className="list-disc list-inside ml-1 mt-2">
            <li>Git</li>
            <li>Github</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Deployment & DevOps</h3>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Nginx</li>
            <li>GitHub Actions</li>
            <li>Docker</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Others</h3>
          <ul className="list-disc list-inside ml-1 mt-2">
            <li>Machine Learning (ML)</li>
            <li>Large Language Models (LLM)</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Skills;
