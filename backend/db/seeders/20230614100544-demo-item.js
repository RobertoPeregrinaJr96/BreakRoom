"use strict";
/** @type {import('sequelize-cli').Migration} */
let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA;
}
const items = [
  {
    name: "Espresso",
    price: 2.5,
    description:
      "Our signature espresso blend, carefully crafted from a rich combination of Arabica beans. This shot of pure indulgence delivers a bold and intense flavor with hints of dark chocolate and a velvety crema. A true coffee lover's delight.",
    defaultModifiers: "Small-Vanilla Sweet Cream-Hot-No Espresso shot",
    itemImg:
      "https://freeawsbucket.s3.us-west-1.amazonaws.com/coffee_seeders/4k_espresso.jpg",
    waitTiem: 3,
  },
  {
    name: "Cappuccino",
    price: 3.5,
    description:
      " Indulge in the perfect balance of rich espresso, velvety steamed milk, and a luscious layer of frothy foam. Our Classic Cappuccino is expertly crafted to deliver a harmonious blend of flavors, with each sip awakening your senses and leaving you craving for more. The robust aroma of freshly ground beans and the delicate artistry of latte art on the surface make this a truly captivating experience. Savor the essence of Italian coffee culture in every cup.",
    defaultModifiers: "Small-Whole Mlik-Hot-Signature Espresso Roast",
    itemImg:
      "https://freeawsbucket.s3.us-west-1.amazonaws.com/coffee_seeders/4k_Cappuccino.jpg",
    waitTiem: 3,
  },
  {
    name: "Americano",
    price: 2.75,
    description:
      "Our signature blend of rich espresso and hot water creates the perfect balance of bold flavors. This timeless favorite boasts a smooth and robust taste, with a hint of caramel undertones. Savor the intense aroma and indulge in the velvety texture of this traditional Americano.",
    defaultModifiers: "Small-Whole Mlik-Hot-Signature Espresso Roast",
    itemImg:
      "https://freeawsbucket.s3.us-west-1.amazonaws.com/coffee_seeders/4k_americano.jpg",
    waitTiem: 3,
  },
  {
    name: "Latte",
    price: 4.0,
    description:
      "Indulge in the rich, smooth flavors of our Classic Latte. Our expertly crafted espresso shots are expertly blended with velvety steamed milk, creating a harmonious balance of robust coffee and creamy goodness. Savor the delicate hints of caramel and chocolate that dance on your palate, while the frothy milk adds a touch of luxury. Perfectly topped with a sprinkling of cocoa or cinnamon, this timeless beverage is a true coffee lover's delight.  ",
    defaultModifiers: "Small-Whole Mlik-Hot-Signature Espresso Roast",
    itemImg:
      "https://freeawsbucket.s3.us-west-1.amazonaws.com/coffee_seeders/4k_Latte1.jpg",
    waitTiem: 3,
  },
  {
    name: "Mocha",
    price: 4.25,
    description:
      " Indulge in the perfect blend of rich espresso and smooth, velvety chocolate with our signature Mocha. This luscious creation starts with a double shot of our finest Arabica coffee, expertly brewed to perfection. We then delicately blend in a generous portion of premium, Belgian dark chocolate, creating a harmonious fusion of flavors that will satisfy even the most discerning palate. ",
    defaultModifiers: "Small-Whole Mlik-Hot-Signature Espresso Roast",
    itemImg:
      "https://freeawsbucket.s3.us-west-1.amazonaws.com/coffee_seeders/4k_Mocha.jpg",
    waitTiem: 3,
  },
  {
    name: "Macchiato",
    price: 3.99,
    description:
      "Enjoy the perfect balance of bold espresso and velvety steamed milk with our Classic Macchiato. Our expertly pulled shots of espresso are delicately `marked` with a dollop of foamed milk, creating a harmonious blend of robust flavors and a creamy texture. This traditional Italian favorite is the ideal choice for those seeking a simple yet satisfying coffee experience. ",
    defaultModifiers: "Small-Whole Mlik-Hot-Signature Espresso Roast",
    itemImg:
      "https://freeawsbucket.s3.us-west-1.amazonaws.com/coffee_seeders/4k_Macchiato.jpg",
    waitTiem: 3,
  },
  {
    name: "Flat White",
    price: 4.5,
    description:
      "Smooth and velvety, our Flat White is the ultimate espresso-based indulgence. We carefully craft a double shot of rich, full-bodied espresso, combined with perfectly steamed milk, creating a harmonious balance of flavors. This luxurious beverage offers a subtle hint of caramel and a delicate, creamy texture that will leave you craving for more. Savor every sip of our Flat White, a true coffee connoisseur's delight ",
    defaultModifiers: "Small-Whole Mlik-Hot-Signature Espresso Roast",
    itemImg:
      "https://freeawsbucket.s3.us-west-1.amazonaws.com/coffee_seeders/4K_flatwhite1.jpg",
    waitTiem: 3,
  },
  {
    name: "Affogato",
    price: 5.0,
    description:
      " Indulge in our heavenly Affogato - a delightful union of rich, smooth espresso and velvety vanilla gelato. A symphony of flavors awaits as a single shot of our freshly brewed espresso is poured over a generous scoop of luscious, artisanal vanilla gelato. Watch as the steam rises, mingling with the cold creaminess of the gelato, creating a tantalizing dance of temperature and texture.   ",
    defaultModifiers: "Small-Whole Mlik-Cold-1/3 Decaf Espresso Roast",
    itemImg:
      "https://freeawsbucket.s3.us-west-1.amazonaws.com/coffee_seeders/4k_Affogato.jpg",
    waitTiem: 3,
  },
  {
    name: "Turkish Coffee",
    price: 3.25,
    description:
      "Experience the rich and authentic flavors of Turkey with our signature Turkish Coffee. Served in a traditional copper cezve, this exquisite blend of finely ground Arabica beans and cardamom is brewed to perfection. Indulge in the velvety texture and intense aroma as you savor each sip of this time-honored delicacy  ",
    defaultModifiers: "Small-No Creamer-Hot-Blond Espresso Roast",
    itemImg:
      "https://freeawsbucket.s3.us-west-1.amazonaws.com/coffee_seeders/4k_Turkish+Coffee.jpg",
    waitTiem: 3,
  },
  {
    name: "Irish Coffee",
    price: 5.5,
    description:
      " Indulge in the perfect blend of rich flavors and warm sensations with our signature Irish Coffee. This classic combination of smooth Irish whiskey, robust coffee, velvety whipped cream, and a touch of sweetness is sure to delight your taste buds.",
    defaultModifiers: "Small-Vanilla Sweet Cream-Warm-No Espresso shot",
    itemImg:
      "https://freeawsbucket.s3.us-west-1.amazonaws.com/coffee_seeders/4k_Irish+Coffee.jpg",
    waitTiem: 3,
  },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = "Items";
    return queryInterface.bulkInsert(options, items, {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = "Items";
    return queryInterface.bulkDelete(options, items, {});
  },
};
