import ItemModel from "../ModalComponents/ItemModal";
import OpenModalDiv from "../Navigation/OpenModalButton/modalDiv";
import "./style/mainContent.css";

function MainContent({ item }) {
  console.log(item);
  if (item) {
    return (
      <>
        <h1 className="mainContent-container-h1">About Us</h1>
        <div className="mainContent-container">
          <div className="about-container">
            <h1 className="about-container-h1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              eget odio in velit feugiat faucibus. Sed ac nisi vel nunc laoreet
              suscipit.
            </h1>
          </div>
          <div className="reviewed-container">
            <OpenModalDiv modalComponent={<ItemModel item={item} />}>
              <h2 className="reviewed-content-name">{item.name}</h2>
              <img className="reviewed-image" src={`${item.itemImage}`}></img>
              <span className="reviewed-image-container">
                <p className="reviewed-content-description">
                  {item.description}
                </p>
              </span>
            </OpenModalDiv>
          </div>
        </div>
      </>
    );
  }
}

export default MainContent;
