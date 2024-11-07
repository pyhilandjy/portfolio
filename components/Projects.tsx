import React from "react";

const Projects: React.FC = () => {
  return (
    <section className="text-center py-10">
      <h2 className="text-3xl font-semibold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-5 border rounded-lg shadow-lg">
          <h3 className="text-xl font-bold">Project 1</h3>
          <p className="mt-2">프로젝트 1에 대한 간단한 설명을 작성합니다.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
