import React from 'react';
export function About() {
  return <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold mb-8">About</h1>
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/3">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Your Name" className="w-full rounded-md shadow-sm" />
        </div>
        <div className="md:w-2/3 prose prose-lg">
          <p>
            I am a [your position, e.g., "PhD candidate", "Postdoctoral
            Researcher"] at [your institution] specializing in [your field]. My
            research focuses on [brief description of research focus].
          </p>
          <p>
            I received my [previous degree(s)] from [previous institution(s)].
            Before joining [current institution], I [brief description of
            relevant previous experience].
          </p>
          <p>
            My work has been published in [notable journals or conferences] and
            has been recognized with [any awards, grants, or recognitions].
          </p>
        </div>
      </div>
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-medium mb-4 border-b border-gray-200 pb-2">
            Research Interests
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Research interest 1 with brief explanation</li>
            <li>Research interest 2 with brief explanation</li>
            <li>Research interest 3 with brief explanation</li>
            <li>Research interest 4 with brief explanation</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-medium mb-4 border-b border-gray-200 pb-2">
            Education
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">PhD in [Your Field]</h3>
              <p className="text-gray-600">[University Name], [Year]-Present</p>
              <p className="text-gray-700">
                Dissertation: "[Title of Your Dissertation]"
              </p>
              <p className="text-gray-700">
                Advisor: Professor [Advisor's Name]
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Master's in [Your Field]</h3>
              <p className="text-gray-600">[University Name], [Year]</p>
              <p className="text-gray-700">Thesis: "[Title of Your Thesis]"</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">
                Bachelor's in [Your Field]
              </h3>
              <p className="text-gray-600">[University Name], [Year]</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-medium mb-4 border-b border-gray-200 pb-2">
            Contact Information
          </h2>
          <div className="space-y-2">
            <p>
              <span className="font-medium">Email:</span>{' '}
              <a href="mailto:your.email@university.edu" className="text-blue-700 hover:underline">
                your.email@university.edu
              </a>
            </p>
            <p>
              <span className="font-medium">Office:</span> [Building Name, Room
              Number]
            </p>
            <p>
              <span className="font-medium">Address:</span> [Department,
              University, City, State/Province, Country]
            </p>
          </div>
          <div className="mt-4">
            <p className="text-gray-700">
              For research collaborations, speaking engagements, or other
              inquiries, please contact me via email.
            </p>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <a href="#" className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-md transition-colors flex items-center">
            Download CV (PDF)
          </a>
        </div>
      </div>
    </div>;
}