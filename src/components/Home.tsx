import React from 'react';
export function Home() {
  return <div className="max-w-3xl mx-auto">
      <div className="mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-4">
          Advancing Knowledge in [Your Field]
        </h1>
        <p className="text-xl text-gray-600">
          PhD Researcher at [Your University]
        </p>
      </div>
      <div className="prose prose-lg mx-auto">
        <p>
          Welcome to my academic portfolio. I am a researcher focused on [brief
          description of your research focus]. My work examines [key research
          themes] to address [important challenges or questions in your field].
        </p>
        <p className="mt-4">
          Through my research, I aim to [describe your research goals and the
          impact you hope to achieve]. This website showcases my academic
          journey, research interests, and contributions to the field.
        </p>
        <div className="mt-8 border-t border-gray-200 pt-6">
          <h2 className="text-xl font-semibold mb-4">Recent Highlights</h2>
          <ul className="space-y-3">
            <li>
              <span className="text-gray-500 text-sm">June 2023</span>
              <p className="mt-1">
                Published paper on [Paper Title] in [Journal Name]
              </p>
            </li>
            <li>
              <span className="text-gray-500 text-sm">March 2023</span>
              <p className="mt-1">Presented research at [Conference Name]</p>
            </li>
            <li>
              <span className="text-gray-500 text-sm">January 2023</span>
              <p className="mt-1">Received grant for [Project Name]</p>
            </li>
          </ul>
        </div>
      </div>
    </div>;
}