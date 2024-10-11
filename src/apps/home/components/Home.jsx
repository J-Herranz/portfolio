import { SubAppCard } from "./SubAppCard";
import PropTypes from 'prop-types';
import "../styles/home.css";

function Home({ t, setCurrentApp }) {
  const sortedApps = t?.subAppInfo.sort((a, b) => {
    if (a.appName < b.appName) return -1;
    if (a.appName > b.appName) return 1;
    return 0;
  });

  return (
    <>
      <div className="homeApp">

        <h1>{t?.subAppInfo?.filter(app => app.appCode === "home")[0].appName}</h1>
        <hr />

        <section>
          <h2>Joel Herranz</h2>
          <h3>{t?.home?.jobTitle}</h3>
          <p>{t?.home?.userDescription}</p>
        </section>

        <hr />
        <section className="subAppCards-section">
          <h2 >{t?.home?.projects}</h2>

          {
            sortedApps && sortedApps.filter((element) => element.appCode !== "home").map((element, index) => (
              <SubAppCard
                key={index}
                appCode={element.appCode}
                src={element.subAppThumbnailFileName}
                subAppTitle={element.appName}
                subAppDescription={element.subAppDescription}
                setCurrentApp={setCurrentApp}
                appUrl={element.appUrl}
              />
            ))
          }
        </section>
      </div>
    </>
  );
}

// Prop validation
Home.propTypes = {
  t: PropTypes.object.isRequired,
  setCurrentApp: PropTypes.func.isRequired,
};

export { Home };
