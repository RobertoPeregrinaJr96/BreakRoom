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
          {/* <SearchComponent data={data} /> */}
          <span className="menu-search-container">
            <input className="menu-search-input"></input>
          </span>
          {menuItems ? (
            <span className="menu-item-cluster">
              <span className="menu-item-button-container">
                <button className="menu-item-button-name">Item name</button>
              </span>
              <span className="menu-item-button-container">
                <button className="menu-item-button-info">
                  <i class="fa-solid fa-circle-info"></i>
                </button>
              </span>
              <span className="menu-item-button-container">
                <button className="menu-item-button-cart">
                  <i class="fa-solid fa-cart-shopping"></i>
                </button>
              </span>
            </span>
          ) : (
            menuItems.map((item) => {
              <span className="menu-item-cluster">
                <button>{item.name}</button>
                <button>
                  <i class="fa-solid fa-circle-info"></i>
                </button>
                <button>
                  {" "}
                  <i class="fa-solid fa-cart-shopping"></i>
                </button>
              </span>;
            })
          )}
        </menu>
      </div>
    </>
  );
}

export default RightMenu;
