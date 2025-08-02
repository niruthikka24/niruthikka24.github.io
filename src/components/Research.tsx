import React from 'react';
export function Research() {
  const researchAreas = [{
    title: 'Research Area 1',
    description: 'A brief description of your first research area. This should explain the focus, methodology, and significance of this line of inquiry in your field.',
    topics: ['Specific topic or question within this research area', "Another aspect of this research domain you're exploring", 'Theoretical or practical applications of this research']
  }, {
    title: 'Research Area 2',
    description: 'Description of your second major research focus. Explain how this connects to your broader research agenda and its importance in advancing knowledge in your field.',
    topics: ['Key concept or methodology in this research area', 'Collaborative aspects or interdisciplinary connections', "Outcomes or applications you're working toward"]
  }, {
    title: 'Research Area 3',
    description: 'Overview of your third research direction. This might be an emerging interest or a complementary area to your primary research focus.',
    topics: ['Central question or problem being addressed', 'Unique approach or perspective you bring to this area', 'Potential impact of this research direction']
  }];
  return <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold mb-8">Research</h1>
      <div className="prose prose-lg mb-10">
        <p>
          My research focuses on [broad description of your research field and
          interests]. I am particularly interested in understanding [specific
          phenomena, questions, or challenges] through [your methodological
          approach or theoretical framework].
        </p>
      </div>
      <div className="space-y-12">
        {researchAreas.map((area, index) => <div key={index} className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-medium mb-4">{area.title}</h2>
            <p className="text-gray-700 mb-6">{area.description}</p>
            <h3 className="text-lg font-medium mb-3">Key Topics:</h3>
            <ul className="list-disc pl-5 space-y-2">
              {area.topics.map((topic, topicIndex) => <li key={topicIndex} className="text-gray-700">
                  {topic}
                </li>)}
            </ul>
          </div>)}
      </div>
      <div className="mt-12 border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-medium mb-4">Research Philosophy</h2>
        <p className="text-gray-700">
          My approach to research is guided by [your research philosophy or
          principles]. I believe in [key values or methodological commitments
          that shape your work]. Through my research, I aim to [broader goals or
          impacts you hope to achieve].
        </p>
      </div>
    </div>;
}