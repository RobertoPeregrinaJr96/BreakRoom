import "./style/mainContent.css";

function MainContent({ item }) {
  if (item) {
    return (
      <>
        <h1 className="mainContent-container-h1">Main Content</h1>
        <div className="mainContent-container">
          <div className="about-container">
            <h1>about content</h1>
          </div>
          <div className="reviewed-container">
            <h2 className="reviewed-content-description">{item.name}</h2>
            <p>{item.description}</p>
            <span className="reviewed-image-container">
              <img className="reviewed-image" src={`${item.itemImage}`}></img>
            </span>
          </div>
          <div></div>
        </div>
      </>
    );
  }
}

export default MainContent;
