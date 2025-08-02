import React from 'react';
export function Projects() {
  const projects = [{
    title: 'Project Name 1',
    description: 'A comprehensive description of your first project. This should explain the purpose, methodology, and outcomes of the project in sufficient detail for visitors to understand its significance.',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    links: [{
      label: 'Project Website',
      url: '#'
    }, {
      label: 'GitHub Repository',
      url: '#'
    }],
    tags: ['Machine Learning', 'Natural Language Processing', 'Python']
  }, {
    title: 'Project Name 2',
    description: 'Description of your second project, highlighting its unique aspects and your contributions. Include information about any collaborators, funding sources, or institutional support if relevant.',
    image: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    links: [{
      label: 'Interactive Demo',
      url: '#'
    }, {
      label: 'Research Paper',
      url: '#'
    }],
    tags: ['Data Visualization', 'Statistical Analysis', 'R']
  }, {
    title: 'Project Name 3',
    description: 'Overview of your third project, explaining its context, challenges, and results. This might be an ongoing project, in which case you can discuss current progress and future directions.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    links: [{
      label: 'Project Report',
      url: '#'
    }],
    tags: ['Experimental Design', 'Field Research', 'Interdisciplinary']
  }];
  return <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold mb-8">Projects & Demos</h1>
      <div className="prose prose-lg mb-10">
        <p>
          Featured projects and interactive demonstrations from my research.
          These projects represent practical applications of my research
          interests and showcase methodologies, tools, or frameworks I've
          developed.
        </p>
      </div>
      <div className="space-y-16">
        {projects.map((project, index) => <div key={index} className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md shadow-sm" />
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-medium mb-4">{project.title}</h2>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => <span key={tagIndex} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                      {tag}
                    </span>)}
                </div>
                <div className="flex flex-wrap gap-4">
                  {project.links.map((link, linkIndex) => <a key={linkIndex} href={link.url} className="text-blue-700 hover:underline text-sm flex items-center">
                      {link.label}
                    </a>)}
                </div>
              </div>
            </div>
          </div>)}
      </div>
    </div>;
}