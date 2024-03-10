import "./style/rightMenu.css";

function RightMenu() {

  let menuItems = [{ name: "hello" }];

  return (
    <>
      <h1 className="rightMenu-h1">Right Menu</h1>
      <div className="rightMenu-container">
        <menu className="menu-item-container">
          {menuItems ? (
            <span className="menu-item-cluster">
              <button>Item name</button>
              <button>Item info link</button>
              <button>Item module button</button>
              <button>Item add to cart</button>
            </span>
          ) : (
            menuItems.map((item) => {
              <span className="menu-item-cluster">
                <button>{item.name}</button>
                <button>img</button>
                <button>img</button>
                <button>img</button>
              </span>;
            })
          )}
        </menu>
      </div>
    </>
  );
}

export default RightMenu;
