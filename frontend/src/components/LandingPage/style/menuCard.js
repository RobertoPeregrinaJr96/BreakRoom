const MenuCard = (settings) => {



    let display = settings.display;
    let mode = settings.mode;
  
  return (
    <>
      {" "}
      <div className={`menu-card-${display}-${mode}`}>
        <div className={`menu-card-image-${display}-${mode}`}>
          <h3> </h3>
          {/* <img src={`${randomImage()}`} /> */}
        </div>
      </div>
    </>
  );
};

export default MenuCard;
