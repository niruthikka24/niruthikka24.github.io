import React from 'react';
import { Mail, Linkedin, Download, ExternalLink, GraduationCap } from 'lucide-react';

export function Home() {
  return <div className="max-w-3xl mx-auto">
      {/* Header Section with Photo and Contact */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <img 
              src="/images/me.JPG" 
              alt="Profile photo"
              className="w-48 h-48 rounded-full object-cover border-4 border-gray-100 shadow-lg"
            />
          </div>
          
          {/* Name, Title, and Contact Info */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl font-semibold mb-2">
              Exploring Human-Centered AI
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              PhD Researcher at Nanyang Technological University (NTU), Singapore
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 justify-center md:justify-start">
              <a 
                href="mailto:SR0001KA@e.ntu.edu.sg" 
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail size={18} />
                <span className="text-sm">Email</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/niruthikka-sritharan/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={18} />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a 
                href="https://scholar.google.com/citations?user=JvNceVgAAAAJ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <GraduationCap size={18} />
                <span className="text-sm">Google Scholar</span>
              </a>
              <a 
                href="https://orcid.org/0009-0007-3322-3218" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947 0 .525-.422.947-.947.947-.525 0-.946-.422-.946-.947 0-.516.421-.947.946-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 3.588-1.303 3.588-3.722 0-2.359-1.303-3.722-3.644-3.722h-2.241z"/>
                </svg>
                <span className="text-sm">ORCID</span>
              </a>
            </div>
            
            {/* CV View Button */}
            <button 
              onClick={() => window.open('/resume.pdf', '_blank')}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <ExternalLink size={18} />
              View CV
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="prose prose-lg mx-auto">
        <p>
          Welcome to my academic portfolio. I am a PhD student at the{" "} 
          <a
            href="https://www.ntu.edu.sg/computing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            College of Computing and Data Science (CCDS) 
          </a>,{" "}
          <a
            href="https://www.ntu.edu.sg/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Nanyang Technological University (NTU)
          </a>, Singapore, fully funded by the SINGA scholarship, under the supervision of{" "} 
          <a
            href="https://yong-wang.org/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Prof. Yong Wang 
          </a>. 
          Prior to this, I earned my Bachelor's degree in{" "} 
          <a
            href="https://cse.mrt.ac.lk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Computer Science and Engineering
          </a>
          {" "}from{" "} 
          <a
            href="https://uom.lk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            University of Moratuwa
          </a>, Sri Lanka. 
        </p>
        <p className="mt-4">
          During my undergraduate studies, I conducted research at the intersection of Artificial Intelligence, Explainable AI (XAI), and Biomedical Imaging, 
          with a strong emphasis on building interpretable models for medical decision support. Currently, my research is more focused on leveraging AI to 
          enhance data visualization and enrich human-computer interaction, aiming to design intelligent, human-centered tools that support explainability, 
          insight discovery, and data-driven decision-making in complex domains. This website showcases my academic
          journey, research interests, and contributions to the field.
        </p>
        <div className="mt-8 border-t border-gray-200 pt-6">
          <h2 className="text-xl font-semibold mb-4">Highlights</h2>
          <ul className="space-y-3">
            <li>
              <span className="text-gray-500 text-sm">August 2025</span>
              <p className="mt-1">
                🎓 Started PhD at College of Computing and Data Science, Nanyang Technological University, Singapore, under the SINGA Scholarship
              </p>
            </li>
            <li>
              <span className="text-gray-500 text-sm">April 2025</span>
              <p className="mt-1">
                📄 Published{" "}
                <a
                  href="https://ieeexplore.ieee.org/document/10965629"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Explainable Artificial Intelligence Driven Segmentation for Cervical Cancer Screening
                </a>{" "} in {" "}
                <a
                  href="https://ieeexplore.ieee.org/xpl/tocresult.jsp?isnumber=10820123&punumber=6287639"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  IEEE Access (Vol. 13)
                </a>
              </p>
            </li>
            <li>
              <span className="text-gray-500 text-sm">December 2024</span>
              <p className="mt-1">
                🏆 UNESCO Gold Medal Winner - Best Academic Performance across University of Moratuwa, Sri Lanka</p>
            </li>
            <li>
              <span className="text-gray-500 text-sm">December 2024</span>
              <p className="mt-1">
                🏆 IBM Gold Medal Winner - Highest Overall GPA in the department of Computer Science and Engineering, University of Moratuwa, Sri Lanka</p>
            </li>
            <li>
              <span className="text-gray-500 text-sm">July 2024</span>
              <p className="mt-1">
                🎓 Graduated with First-Class Honours (4.13/4.2) in Computer Science and Engineering at University of Moratuwa, Sri Lanka</p>
            </li>
            <li>
              <span className="text-gray-500 text-sm">June 2024</span>
              <p className="mt-1">
                👩‍💻 Joined{" "} 
                <a
                  href="https://cutanddry.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Cut+Dry
                </a>, a USA-based food service e-commerce platform, as a Software Engineer (AI-ML) </p>
            </li>
            <li>
              <span className="text-gray-500 text-sm">April 2024</span>
              <p className="mt-1">
                🏅 Best Paper Award in the Smart Computing Track for {" "}
                <a
                  href="https://ieeexplore.ieee.org/document/10550859"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  EnsembleCAM: Unified Visualization for Explainable Cervical Cancer Identification
                </a>
                {" "}at{" "} 
                <a
                  href="https://ieeexplore.ieee.org/xpl/conhome/10550188/proceeding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  International Research Conference on Smart Computing and Systems Engineering (SCSE) 2024
                </a></p>
            </li>
            <li>
              <span className="text-gray-500 text-sm">February 2024</span>
              <p className="mt-1">
                🎤 Presented Research -{" "}
                <a
                  href="https://ieeexplore.ieee.org/document/10499737"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Interpretable Cervical Cell Classification: A Comparative Analysis
                </a>
                {" "}at the{" "} 
                <a
                  href="https://ieeexplore.ieee.org/xpl/conhome/10499696/proceeding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  4th International Conference on Advanced Research in Computing (ICARC) 2024
                </a></p>
            </li>
            <li>
              <span className="text-gray-500 text-sm">May 2023</span>
              <p className="mt-1">
                🏆 Winner of ChallengerX, Sri Lanka's first AI/ML Incubator programme and competition organized by{" "} 
                <a
                  href="https://www.ifs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  IFS
                </a>
                {" "}x{" "} 
                <a
                  href="https://hatch.lk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Hatch
                </a></p>
            </li>
          </ul>
        </div>
      </div>
    </div>;
}