function MainContent() {
  return (
    <>
      <h1>Main Content</h1>
      <div className="mainContent-container">
        <div>about content</div>
        <div>
          <h3 className="reviewed-content-description">
            Highest Reviewed Content
          </h3>

          <img
            className="reviewed-image"
            src="frontend/images/cup_of_coffee.png"
          ></img>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default MainContent;
