import "./style/mainContent.css";

function MainContent() {
  return (
    <>
      <h1>Main Content</h1>
      <div className="mainContent-container">
        <div>about content</div>
        <div className="reviewed-container">
          <h3 className="reviewed-content-description">
            Highest Reviewed Content
          </h3>
          <span className="reviewed-image-container">
            <img
              className="reviewed-image"
              src="frontend/images/cup_of_coffee.png"
            ></img>
          </span>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default MainContent;
