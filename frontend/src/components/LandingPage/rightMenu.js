import "./style/rightMenu.css";
import SearchComponent from "./search";
function RightMenu() {
  let menuItems = [{ name: "hello" }];
  const data = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];
  return (
    <>
      <h1 className="rightMenu-h1">Right Menu</h1>
      <div className="rightMenu-container">
        <menu className="menu-item-container">
          <SearchComponent data={data} />
          {menuItems ? (
            <span className="menu-item-cluster">
              <button>Item name</button>
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
