import React from 'react';
export function HonorsAndAwards() {
  const awards = [
  {
    category: 'Scholarships & Fellowships',
    items: [{
      name: 'SINGA Scholarship',
      organization: 'Agency for Science, Technology and Research (A*STAR), Singapore',
      year: '2025', // or when you started
      description: 'Fully-funded PhD scholarship covering tuition, stipend, and living expenses. Awarded through a highly competitive selection process for international students pursuing research in Singapore',
      image: '/images/singa.jpeg' // if you have one
    }]
  },
  {
    category: 'Conference & Presentation Awards',
    items: [{
      name: 'Best Paper Award in the Smart Computing Track',
      organization: 'International Research Conference on Smart Computing and Systems Engineering (SCSE)',
      year: '2024',
      description: 'Awarded for the paper titled "EnsembleCAM: Unified Visualization for Explainable Cervical Cancer Identification"',
      image: 'images/bestpaperaward.png'
    }]
  }, 
  {
    category: 'Academic Excellence',
    items: [{
      name: 'UNESCO Gold Medal',
      organization: 'Sri Lanka National Commission for UNESCO',
      year: '2024',
      description: 'Awarded for the best overall academic performance across University of Moratuwa, Sri Lanka',
      image: '/images/unesco-goldmedal.JPG'
    }, {
      name: "IBM Gold Medal",
      organization: 'IBM Sri Lanka',
      year: '2024',
      description: 'Awarded for obtaining the highest overall GPA in the department of Computer Science and Engineering, University of Moratuwa, Sri Lanka',
      image: '/images/ibm-goldmedal.JPG'
    }]
  }, 
  {
    category: 'Computer Science Related Competitions',
    items: [{
      name: 'ChallengerX Champion',
      organization: 'IFS x Hatch',
      year: '2023',
      description: "My team's solution to model any disaster event and determine the best response strategy won the first place at ChallengerX, Sri Lanka's first AI/ML Incubator programme and competition",
      // amount: '$75,000',
      image: '/images/challengerX.JPG'
    }, {
      name: 'Winner of Data Storm 3.0',
      organization: 'OCTAVE and Rotaract Club',
      year: '2022',
      description: 'My team emerged as the winner of Data Storm 3.0, a national Data Analytics competition',
      // amount: '$25,000',
      image: 'images/datastorm.jpg'
    }]
  }, 
  // {
  //   category: 'Research Grants & Fellowships',
  //   items: [{
  //     name: 'Doctoral Research Fellowship',
  //     organization: 'National Science Foundation',
  //     year: '2021-2023',
  //     description: 'Competitive three-year fellowship supporting innovative research in [specific area].',
  //     amount: '$75,000',
  //     image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  //   }, {
  //     name: 'Research Innovation Grant',
  //     organization: '[Research Institute or Foundation]',
  //     year: '2022',
  //     description: 'Grant awarded to explore novel approaches in [specific research area].',
  //     amount: '$25,000',
  //     image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  //   }]
  // }, 
  // {
  //   category: 'Professional Recognition',
  //   items: [{
  //     name: 'Rising Scholar in [Your Field]',
  //     organization: '[Professional Society or Organization]',
  //     year: '2023',
  //     description: 'Recognized as an emerging leader making significant contributions to the advancement of knowledge in [your field].',
  //     image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  //   }]
  // }
];
  return <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold mb-8">Honors & Awards</h1>
      <div className="prose prose-lg mb-10">
        <p>
          My academic journey has been recognized through various awards spanning research excellence, academic achievement, and innovative problem-solving. These honors reflect my commitment to advancing knowledge in artificial intelligence, while demonstrating consistent performance across academic, research, and competitive environments.
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
                        {award.organization ? `${award.organization}, ${award.year}` : award.year}
                      </p>
                      {/* {award.amount && <p className="text-gray-700 mb-2">
                          Award Amount: {award.amount}
                        </p>} */}
                      <p className="text-gray-700 mt-2">{award.description}</p>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>)}
      </div>
    </div>;
}