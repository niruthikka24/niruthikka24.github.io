import React from 'react';
export function HonorsAndAwards() {
  const awards = [{
    category: 'Academic Excellence',
    items: [{
      name: 'Outstanding Dissertation Award',
      organization: 'Department of [Your Field], [Your University]',
      year: '2023',
      description: 'Awarded for exceptional contribution to the field through doctoral research.',
      image: 'https://images.unsplash.com/photo-1569437061241-a848be43cc82?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    }, {
      name: "Dean's List for Academic Achievement",
      organization: '[Your University]',
      year: '2020-2022',
      description: 'Recognized for maintaining exceptional academic standards throughout graduate studies.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    }]
  }, {
    category: 'Research Grants & Fellowships',
    items: [{
      name: 'Doctoral Research Fellowship',
      organization: 'National Science Foundation',
      year: '2021-2023',
      description: 'Competitive three-year fellowship supporting innovative research in [specific area].',
      amount: '$75,000',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    }, {
      name: 'Research Innovation Grant',
      organization: '[Research Institute or Foundation]',
      year: '2022',
      description: 'Grant awarded to explore novel approaches in [specific research area].',
      amount: '$25,000',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    }]
  }, {
    category: 'Conference & Presentation Awards',
    items: [{
      name: 'Best Paper Award',
      conference: 'International Conference on [Your Field]',
      year: '2022',
      description: 'Awarded for the paper titled "[Your Paper Title]" which presented groundbreaking findings in [specific area].',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    }, {
      name: 'Outstanding Poster Presentation',
      conference: '[Professional Society] Annual Meeting',
      year: '2021',
      description: 'Recognized for exceptional clarity and innovation in research presentation.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    }]
  }, {
    category: 'Professional Recognition',
    items: [{
      name: 'Rising Scholar in [Your Field]',
      organization: '[Professional Society or Organization]',
      year: '2023',
      description: 'Recognized as an emerging leader making significant contributions to the advancement of knowledge in [your field].',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    }]
  }];
  return <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold mb-8">Honors & Awards</h1>
      <div className="prose prose-lg mb-10">
        <p>
          Throughout my academic and research career, I've been honored to
          receive recognition for my contributions to the field. These awards
          and grants have supported my work and affirmed the impact and
          importance of my research focus.
        </p>
      </div>
      <div className="space-y-12">
        {awards.map((category, index) => <div key={index}>
            <h2 className="text-2xl font-medium mb-6 border-b border-gray-200 pb-2">
              {category.category}
            </h2>
            <div className="space-y-10">
              {category.items.map((award, awardIndex) => <div key={awardIndex} className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <div className="md:w-1/4 flex-shrink-0">
                    <img src={award.image} alt={award.name} className="w-full h-32 object-cover rounded-md shadow-sm" />
                  </div>
                  <div className="md:w-3/4 flex-grow">
                    <div className="border-l-4 border-gray-200 pl-4 h-full flex flex-col justify-center">
                      <h3 className="text-xl font-medium">{award.name}</h3>
                      <p className="text-gray-600 mb-2">
                        {award.organization || award.conference}, {award.year}
                      </p>
                      {award.amount && <p className="text-gray-700 mb-2">
                          Award Amount: {award.amount}
                        </p>}
                      <p className="text-gray-700 mt-2">{award.description}</p>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>)}
      </div>
    </div>;
}