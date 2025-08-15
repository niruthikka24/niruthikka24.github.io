import React from 'react';
export function Publications() {
  const publications = [{
    type: 'Journal Articles',
    items: [{
      title: 'Explainable Artificial Intelligence Driven Segmentation for Cervical Cancer Screening',
      authors: 'Niruthikka Sritharan; Nishaanthini Gnanavel; Prathushan Inparaj; Dulani Meedeniya; Pratheepan Yogarajah',
      journal: 'IEEE Access ( Volume: 13)',
      year: '2025',
      doi: '10.1109/ACCESS.2025.3561178',
      paper_url: 'https://ieeexplore.ieee.org/document/10965629',
      // abstract: 'This paper presents a novel weakly supervised segmentation framework for cervical cancer screening that combines binary classification, XAI techniques (LRP, GradCAM++), and GraphCut to segment nucleus, cytoplasm, and background without costly pixel-level annotations.',
      pdfLink: '/Explainable_Artificial_Intelligence_Driven_Segmentation_for_Cervical_Cancer_Screening.pdf',
      image: '/images/journal.png',
      demoLink: 'https://www.youtube.com/watch?v=UmBVM08Uv5k&pp=0gcJCa0JAYcqIYzv',
      achievement: ''
    }]
  }, {
    type: 'Conference Papers',
    items: [{
      title: 'EnsembleCAM: Unified Visualization for Explainable Cervical Cancer Identification',
      authors: 'Niruthikka Sritharan; Nishaanthini Gnanavel; Prathushan Inparaj; Dulani Meedeniya; Pratheepan Yogarajah',
      conference: 'International Research Conference on Smart Computing and Systems Engineering (SCSE)',
      location: 'Colombo, Sri Lanka',
      year: '2024',
      doi: '10.1109/SCSE61872.2024.10550859',
      paper_url: 'https://ieeexplore.ieee.org/document/10550859',
      // abstract: 'Brief summary of your conference paper and its contributions.',
      pdfLink: '/EnsembleCAM Unified Visualization for Explainable Cervical Cancer Identification.pdf',
      presentationLink: '/SCSE Presentation.pdf',
      image: '/images/ensemblecam.png',
      demoLink: '',
      achievement: '🏅 Best Paper Award in the Smart Computing Track'
    },
    {
      title: 'Interpretable Cervical Cell Classification: A Comparative Analysis',
      authors: 'Nishaanthini Gnanavel; Prathushan Inparaj; Niruthikka Sritharan; Dulani Meedeniya; Pratheepan Yogarajah',
      conference: '4th International Conference on Advanced Research in Computing (ICARC)',
      location: 'Belihuloya, Sri Lanka',
      year: '2024',
      doi: '10.1109/ICARC61713.2024.10499737',
      paper_url: 'https://ieeexplore.ieee.org/document/10499737',
      // abstract: 'Brief summary of your conference paper and its contributions.',
      pdfLink: '/Interpretable Cervical Cell Classification A Comparative Analysis.pdf',
      presentationLink: '/ICARC2024_28_Sritharan.pptx.pdf',
      image: '/images/icarc-comparative.png',
      demoLink: 'https://www.youtube.com/watch?v=cnhb7ZCVHb4&t=1s&pp=0gcJCa0JAYcqIYzv',
      achievement: ''
    }]
  }, 
  // {
  //   type: 'Book Chapters',
  //   items: [{
  //     title: 'Chapter Title in Edited Volume',
  //     authors: 'Your Name',
  //     book: 'Title of the Book',
  //     editors: 'Editor Name, Second Editor',
  //     publisher: 'Academic Publisher',
  //     year: '2021',
  //     pages: '45-67',
  //     abstract: 'Description of your book chapter contribution.',
  //     pdfLink: '#',
  //     image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  //   }]
  // }
];
  return <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold mb-8">Publications</h1>
      <div className="prose prose-lg mb-10">
        <p>
          A collection of my academic publications, including journal articles and
          conference papers.
        </p>
      </div>
      <div className="space-y-12">
        {publications.map((section, index) => <div key={index}>
            <h2 className="text-2xl font-medium mb-6 border-b border-gray-200 pb-2">
              {section.type}
            </h2>
            <div className="space-y-12">
              {section.items.map((pub, pubIndex) => <div key={pubIndex} className="flex flex-col md:flex-row gap-8 border-t border-gray-100 pt-8">
                  <div className="md:w-2/5">
                    <img src={pub.image} alt={pub.title} className="w-full h-50 object-cover rounded-md shadow-sm" />
                  </div>
                  <div className="md:w-3/5">
                    <div className="border-l-4 border-gray-200 pl-4">
                      <h3 className="text-xl font-medium mb-2">{pub.title}</h3>
                      <p className="text-gray-700 mb-2">{pub.authors}</p>
                      {'journal' in pub && <p className="text-gray-600 italic mb-2">
                          {pub.journal}, {pub.year}
                        </p>}
                      {'conference' in pub && <p className="text-gray-600 italic mb-2">
                          {pub.conference}, {pub.location}, {pub.year}
                      </p>}
                      <p className="text-gray-600 italic mb-2">
                        DOI:{" "}
                        <a
                          href={pub.paper_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          {pub.doi}
                        </a>
                      </p>
                      {pub.achievement && (
                        <p className="text-red-700 mb-2">{pub.achievement}</p>
                      )}
                      {/* {'book' in pub && <p className="text-gray-600 italic mb-2">
                          In: {pub.book}, eds. {pub.editors}. {pub.publisher},{' '}
                          {pub.year}, pp. {pub.pages}
                        </p>} */}
                      {/* <div className="mt-3 mb-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">
                          Abstract
                        </h4>
                        <p className="text-gray-600 text-sm">{pub.abstract}</p>
                      </div> */}
                      <div className="flex space-x-4 text-sm">
                        {'pdfLink' in pub && <a href={pub.pdfLink} className="text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">
                            PDF
                          </a>}
                        {/* {'bibLink' in pub && <a href={pub.bibLink} className="text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">
                            BibTeX
                          </a>} */}
                        {'presentationLink' in pub && <a href={pub.presentationLink} className="text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">
                            Presentation
                          </a>}
                        {pub.demoLink && <a href={pub.demoLink} className="text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">
                            Demo Video
                          </a>}
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>)}
      </div>
    </div>;
}