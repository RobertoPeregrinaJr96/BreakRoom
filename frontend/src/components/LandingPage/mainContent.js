import "./style/mainContent.css";

function MainContent() {
  return (
    <>
      <h1 className="mainContent-container-h1">Main Content</h1>
      <div className="mainContent-container">
        <div className="about-container">
          <h1>about content</h1>
        </div>
        <div className="reviewed-container">
          <h3 className="reviewed-content-description">
            Highest Reviewed Content
          </h3>
          <span className="reviewed-image-container">
            <img className="reviewed-image"></img>
          </span>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default MainContent;
