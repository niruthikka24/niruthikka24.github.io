import data from "../../data/index.json";
import { useState } from "react";
import Modal from "./Modal";
import { MdArticle } from "react-icons/md";

export default function Achievements() {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [filters, setFilters] = useState([]);

  const openGitHub = (gitHubUrl) => {
    // const gitHubUrl = "https://github.com/niruthikka24"
    window.open(gitHubUrl, '_blank')
  }

  const openModal = (item) => {
    setSelectedProject(item)
    setIsModalOpen(true)
  };

  const closeModal = () => {
    setSelectedProject(null)
    setIsModalOpen(false);
  };

  const toggleFilter = (filter) => {
    if (filters.includes(filter)) {
      // If filter is already selected, remove it
      setFilters(filters.filter((f) => f !== filter));
    } else {
      // If filter is not selected, add it
      setFilters([...filters, filter]);
    }
  };

  return (
    <section className="portfolio--section" id="achievements">
        <h2 className="portfolio--heading">Achievements</h2>
      <div className="portfolio--section--container">
        {data?.achievements?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img" onClick={() => openModal(item)}>
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content" onClick={() => openModal(item)}>

              <h3 className="portfolio--section--title">{item.title}</h3>
              <p className="text-md">
                {item.description.split(' ').slice(0, 15).join(' ')}
                {item.description.split(' ').length > 15 && '...'}
              </p>
            </div>
            <div className="achievements--section--btndiv">
              <MdArticle className="btn btn-primary" onClick={() => openGitHub(item.articleUrl)} />
            </div>

          </div>
        ))}
      </div>
      {isModalOpen && <Modal project={selectedProject} closeModal={closeModal} />}
    </section>
  );
}
