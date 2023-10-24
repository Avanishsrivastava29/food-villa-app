import { useState } from "react";

const Section = ({ title, description, visibleSection, setIsVisibleSection }) => {
  return (
    <div >
      <h3 >{title}</h3>
      {visibleSection === title ? (
        <button
          onClick={() => setIsVisibleSection(null)}
          
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => setIsVisibleSection(title)}
         
        >
          Show
        </button>)
      }

      {visibleSection === title && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setIsVisibleSection] = useState(null); // Use null as initial state
  return (
    <div>
      <h1>Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment..."
        }
        visibleSection={visibleSection}
        setIsVisibleSection={setIsVisibleSection}
      />

      <Section
        title={"Team Instamart"}
        description={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment..."
        }
        visibleSection={visibleSection}
        setIsVisibleSection={setIsVisibleSection}
      />

      <Section
        title={"Careers "}
        description={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment..."
        }
        visibleSection={visibleSection}
        setIsVisibleSection={setIsVisibleSection}
      />
    </div>
  );
};

export default Instamart;
