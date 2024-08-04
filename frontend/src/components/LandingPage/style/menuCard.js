const MenuCard = (settings) => {



    let display = settings.display;
    let mode = settings.mode;
  
  return (
    <>
      {" "}
      <div className={`menu-card-${display}`}>
        <div className={`menu-card-image-${display}`}>
          <h3> </h3>
          {/* <img src={`${randomImage()}`} /> */}
        </div>
      </div>
    </>
  );
};

export default MenuCard;
