import React from 'react';
export function Publications() {
  const publications = [{
    type: 'Journal Articles',
    items: [{
      title: 'Title of Your Publication',
      authors: 'Your Name, Co-author Name, Another Co-author',
      journal: 'Journal of Academic Studies',
      year: '2023',
      doi: '10.1234/example.doi',
      abstract: 'This is a brief abstract of your publication. It should summarize the main findings and significance of the research in a concise manner.',
      pdfLink: '#',
      bibLink: '#',
      image: 'https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    }, {
      title: 'Another Publication Title',
      authors: 'Your Name, Different Co-author',
      journal: 'Research Quarterly',
      year: '2022',
      doi: '10.5678/example.doi',
      abstract: 'Abstract for your second publication. This should give readers a quick understanding of what the paper covers.',
      pdfLink: '#',
      bibLink: '#',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    }]
  }, {
    type: 'Conference Papers',
    items: [{
      title: 'Title of Your Conference Paper',
      authors: 'Your Name, Co-author Name',
      conference: 'International Conference on Your Field',
      location: 'City, Country',
      year: '2023',
      abstract: 'Brief summary of your conference paper and its contributions.',
      pdfLink: '#',
      presentationLink: '#',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    }]
  }, {
    type: 'Book Chapters',
    items: [{
      title: 'Chapter Title in Edited Volume',
      authors: 'Your Name',
      book: 'Title of the Book',
      editors: 'Editor Name, Second Editor',
      publisher: 'Academic Publisher',
      year: '2021',
      pages: '45-67',
      abstract: 'Description of your book chapter contribution.',
      pdfLink: '#',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    }]
  }];
  return <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold mb-8">Publications</h1>
      <div className="prose prose-lg mb-10">
        <p>
          A collection of my academic publications, including journal articles,
          conference papers, and book chapters. PDF links and BibTeX citations
          are provided where available.
        </p>
      </div>
      <div className="space-y-12">
        {publications.map((section, index) => <div key={index}>
            <h2 className="text-2xl font-medium mb-6 border-b border-gray-200 pb-2">
              {section.type}
            </h2>
            <div className="space-y-12">
              {section.items.map((pub, pubIndex) => <div key={pubIndex} className="flex flex-col md:flex-row gap-8 border-t border-gray-100 pt-8">
                  <div className="md:w-1/4">
                    <img src={pub.image} alt={pub.title} className="w-full h-40 object-cover rounded-md shadow-sm" />
                  </div>
                  <div className="md:w-3/4">
                    <div className="border-l-4 border-gray-200 pl-4">
                      <h3 className="text-xl font-medium mb-2">{pub.title}</h3>
                      <p className="text-gray-700 mb-2">{pub.authors}</p>
                      {'journal' in pub && <p className="text-gray-600 italic mb-2">
                          {pub.journal}, {pub.year}. DOI: {pub.doi}
                        </p>}
                      {'conference' in pub && <p className="text-gray-600 italic mb-2">
                          {pub.conference}, {pub.location}, {pub.year}
                        </p>}
                      {'book' in pub && <p className="text-gray-600 italic mb-2">
                          In: {pub.book}, eds. {pub.editors}. {pub.publisher},{' '}
                          {pub.year}, pp. {pub.pages}
                        </p>}
                      <div className="mt-3 mb-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">
                          Abstract
                        </h4>
                        <p className="text-gray-600 text-sm">{pub.abstract}</p>
                      </div>
                      <div className="flex space-x-4 text-sm">
                        {'pdfLink' in pub && <a href={pub.pdfLink} className="text-blue-700 hover:underline">
                            PDF
                          </a>}
                        {'bibLink' in pub && <a href={pub.bibLink} className="text-blue-700 hover:underline">
                            BibTeX
                          </a>}
                        {'presentationLink' in pub && <a href={pub.presentationLink} className="text-blue-700 hover:underline">
                            Presentation
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