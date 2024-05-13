"use strict";

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

const review = [
  {
    itemId: 1,
    userId: 2,
    title: "Heavenly Espresso Delight!",
    rating: 5,
    review:
      "I recently had the pleasure of visiting this local 5-star coffee shop and trying their espresso, and let me tell you, it was absolutely heavenly! From the moment I took my first sip, I was transported to a world of rich flavors and aromatic bliss. The espresso was perfectly balanced, with a velvety texture and a bold, yet smooth taste that lingered on my palate. The barista's impeccable skills were evident in every cup, and the attention to detail was outstanding. This coffee shop has truly mastered the art of crafting the perfect espresso, and I cannot recommend it highly enough. A must-visit for all espresso aficionados!",
    reviewImage: "",
  },
  {
    itemId: 1,
    userId: 3,
    title: "Calling all coffee lovers!",
    rating: 5,
    review:
      " If you're on the hunt for an exceptional espresso experience, look no further than this local 5-star coffee shop. Their espresso blew me away with its robust and complex flavors. The aroma alone was enough to captivate my senses, and the taste was nothing short of phenomenal. The crema on top was velvety and luscious, a true sign of a well-crafted espresso. The beans used were clearly of the highest quality, and the attention to detail in the preparation was evident. The staff were friendly, knowledgeable, and passionate about their craft. Treat yourself to a cup of their espresso, and you'll understand why this place is deserving of its 5-star rating. Absolutely outstanding!",
    reviewImage: "",
  },
  {
    itemId: 2,
    userId: 2,
    title: "A Perfect Morning Pick-Me-Up!",
    rating: 5,
    review:
      "I recently had the pleasure of trying the cappuccino at this local 5-star coffee shop, and I must say, it was an absolute delight! From the moment it was served to me, I was captivated by its beautiful presentation and the rich aroma that filled the air. The taste was exquisite, with a perfect balance of espresso and velvety smooth milk foam. Every sip was like a little piece of heaven, providing just the right amount of caffeine kick to start my day. The barista's attention to detail and expert craftsmanship truly shined through in this cup of pure bliss. I can confidently say that this is the best cappuccino I have ever had, and I will definitely be returning for more!",
    reviewImage: "",
  },
  {
    itemId: 2,
    userId: 3,
    title: "A Cappuccino Worth Savoring!",
    rating: 5,
    review:
      "As a coffee aficionado, I hold high standards when it comes to cappuccinos, and this local 5-star coffee shop exceeded all my expectations. From the moment I took my first sip, I knew I had found a true gem. The flavor profile was exceptional, with a robust and smooth espresso base complemented by the perfect amount of steamed milk. The velvety texture of the foam added a luxurious touch to the overall experience. What truly sets this cappuccino apart is the attention to detail in every step of the preparation. The barista's skill in creating latte art atop my cup was a sight to behold. The cozy atmosphere of the shop only enhanced the enjoyment of this delightful beverage. Without a doubt, this coffee shop has mastered the art of making cappuccinos, and I can't wait to indulge in another one soon!",
    reviewImage: "",
  },
  {
    itemId: 3,
    userId: 2,
    title: "A Coffee Haven! Best Place in Town!",
    rating: 5,
    review:
      "I recently discovered this hidden gem of a coffee shop, and I can't get enough of it! The moment I stepped inside, I was greeted by the inviting aroma of freshly brewed coffee. The ambiance is cozy and warm, with comfortable seating and soft lighting. The baristas are incredibly knowledgeable and passionate about their craft, always eager to recommend a new blend or brewing method. I have tried several drinks from their extensive menu, and each one has been a delightful experience. Whether it's a classic cappuccino or a unique seasonal specialty, the coffee is consistently exceptional. The staff's attention to detail and dedication to quality is truly commendable. This local coffee shop has quickly become my go-to place for a perfect cup of joe. I highly recommend it to all coffee lovers!",
    reviewImage: "",
  },
  {
    itemId: 3,
    userId: 3,
    title: "A Taste of Perfection! Unforgettable Coffee Experience",
    rating: 5,
    review:
      "If you're looking for a coffee shop that serves pure perfection in every cup, look no further! This local gem exceeded my expectations in every way possible. From the moment I walked in, I was greeted with warm smiles and a genuine enthusiasm for coffee. The menu offers a wide range of options, and the baristas are true artists when it comes to crafting the perfect brew. I tried their signature Americano, and it was a revelation. The balance of flavors and the smoothness of the espresso left me craving for more. What sets this coffee shop apart is their commitment to sourcing the finest beans and their meticulous attention to detail in the brewing process. Every sip felt like a sensory journey. The atmosphere is charming and cozy, making it the perfect spot to unwind or catch up with friends. If you're a coffee connoisseur, this place is an absolute must-visit. Trust me, you won't be disappointed!",
    reviewImage: "",
  },
  {
    itemId: 4,
    userId: 2,
    title: "Exquisite Latte Delight!",
    rating: 5,
    review:
      "As a coffee lover, I've tasted lattes from various places, but the one I had at this local 5-star coffee shop blew me away! From the moment it was served, I could tell it was going to be a delightful experience. The latte had the perfect balance of rich espresso and velvety steamed milk, creating a smooth and creamy texture that was simply divine. The barista's artistry in creating a beautiful latte art on top was an added bonus. Every sip was a burst of flavor, with the espresso's boldness harmonizing perfectly with the subtle sweetness of the milk. It was like a symphony in my mouth! The ambiance of the coffee shop, along with the friendly staff, made the experience even more enjoyable. If you're a latte enthusiast like me, this place is an absolute must-visit!",
    reviewImage: "",
  },
  {
    itemId: 4,
    userId: 3,
    title: "A Latte to Remember",
    rating: 5,
    review:
      "Having heard great things about this local 5-star coffee shop, I decided to stop by and try their latte. Let me tell you, it lived up to all the hype! From the first sip, I could taste the expertise that went into crafting this delightful beverage. The espresso had a robust flavor that wasn't overpowering, and the perfectly frothed milk added a velvety smoothness that was incredibly satisfying. The latte was served at just the right temperature, allowing me to savor every moment without worrying about it getting cold too quickly. The attention to detail didn't stop there—the latte art on top was a beautiful touch that showed the barista's skill and dedication. The coffee shop itself had a cozy atmosphere, making it the perfect spot to unwind and enjoy a cup of coffee. If you're in search of a memorable latte experience, look no further than this gem of a coffee shop!",
    reviewImage: "",
  },
  {
    itemId: 5,
    userId: 2,
    title: "A Burst of Heavenly Flavors!",
    rating: 5,
    review:
      "I recently had the pleasure of indulging in the most delightful Mocha at my favorite local coffee shop, and it was truly an experience worth raving about. From the moment the barista handed me my cup, the rich aroma of freshly brewed coffee and the velvety scent of chocolate filled the air, instantly tantalizing my senses. As I took my first sip, I was transported to a world of bliss. The creamy, perfectly steamed milk beautifully complemented the robust espresso, while the subtle hints of dark chocolate danced on my palate, leaving me craving more. The barista's expert touch in creating the ideal balance of flavors made this Mocha an absolute masterpiece. I can confidently say that this coffee shop's Mocha is a divine concoction that every coffee lover must try!",
    reviewImage: "",
  },
  {
    itemId: 5,
    userId: 3,
    title: "Best Coffee Shop in Town",
    rating: 5,
    review:
      "My quest for the perfect Mocha led me to the local 5-star coffee shop, and boy, was I in for a treat! From the moment I entered, the friendly ambiance and the enticing aroma of freshly ground coffee beans welcomed me with open arms. I eagerly ordered their signature Mocha, and oh my, it was pure bliss in a cup! The rich, velvety texture of the steamed milk paired flawlessly with the robust espresso, creating a harmonious symphony of flavors. The expertly crafted chocolate swirls added an extra layer of decadence, leaving me with a smile on my face and warmth in my heart. It's safe to say that this coffee shop has perfected the art of making the most indulgent Mocha in town. I highly recommend it to anyone seeking a truly heavenly coffee experience.",
    reviewImage: "",
  },
  {
    itemId: 6,
    userId: 2,
    title: "Delightful Macchiato Experience",
    rating: 5,
    review:
      "I recently had the pleasure of visiting this local 5-star coffee shop, and I must say, their macchiato is out of this world! From the moment I took my first sip, I was transported to coffee heaven. The barista skillfully crafted the macchiato with the perfect balance of rich espresso and velvety steamed milk, creating a harmonious flavor profile that left me craving more. The presentation was impeccable, with a beautiful latte art design that added an extra touch of elegance. The friendly staff and cozy atmosphere only added to the overall experience. If you're a coffee lover like me, I highly recommend visiting this coffee shop and indulging in their macchiato. It's a morning pick-me-up that will leave you smiling all day!",
    reviewImage: "",
  },
  {
    itemId: 6,
    userId: 3,
    title: "A Luxurious Coffee Journey",
    rating: 5,
    review:
      "Stepping into this local 5-star coffee shop was like entering a realm of coffee sophistication, and their macchiato truly lived up to the hype. This divine concoction was a symphony of flavors, expertly crafted to perfection. The smooth, robust espresso formed a solid foundation, while the creamy microfoam delicately rested on top, creating a luxurious sensation with every sip. The barista's attention to detail was evident in the latte art that adorned the macchiato, showcasing their mastery in the coffee arts. The ambience of the coffee shop was elegant and serene, providing the ideal setting for savoring this indulgent beverage. Whether you're a coffee connoisseur or simply seeking a moment of pure bliss, this macchiato is an absolute must-try. Prepare to embark on a delightful journey for your taste buds",
    reviewImage: "",
  },
  {
    itemId: 7,
    userId: 2,
    title: "Perfectly Balanced and Full of Flavor",
    rating: 5,
    review:
      " I recently tried the Flat White at this local 5-star coffee shop, and it was a delightful experience. The barista skillfully crafted the perfect balance between rich espresso and velvety steamed milk. Every sip was a symphony of flavors, with a smooth, creamy texture that left me craving for more. The presentation was impeccable, with a beautiful latte art design that added an artistic touch to the already excellent beverage. The attention to detail and the commitment to quality truly set this coffee shop apart. I highly recommend their Flat White to anyone seeking a satisfying and flavorful coffee experience.",
    reviewImage: "",
  },
  {
    itemId: 7,
    userId: 3,
    title: "A Heavenly Coffee Delight",
    rating: 5,
    review:
      "I cannot express enough how much I adore the Flat White at this local 5-star coffee shop. From the moment I took my first sip, I was transported to coffee heaven. The expertly extracted espresso was robust and bold, complemented by the velvety, microfoamed milk that added a touch of sweetness and smoothness to each sip. The aroma alone was enough to awaken my senses and put a smile on my face. The baristas here truly have mastered the art of making the perfect Flat White. The cozy ambiance of the shop combined with the impeccable taste of their coffee creates an unforgettable experience. If you're a coffee lover, you must try their Flat White; it's a true gem that will leave you craving more with each visit",
    reviewImage: "",
  },
  {
    itemId: 8,
    userId: 2,
    title: "Affogato Experience",
    rating: 5,
    review:
      " I recently visited the local 5-star coffee shop and had the most delightful Affogato ever! The combination of rich espresso poured over creamy vanilla gelato was absolutely divine. The coffee was perfectly brewed, with a robust flavor that complemented the sweetness of the gelato. The presentation was also top-notch, with a beautiful swirl of whipped cream on top. The staff was incredibly friendly and attentive, making sure I had a wonderful time. This Affogato truly exceeded my expectations, and I can't wait to return for another heavenly experience!",
    reviewImage: "",
  },
  {
    itemId: 8,
    userId: 3,
    title: "Affogato Delight",
    rating: 5,
    review:
      "he espresso shot was strong and aromatic, perfectly balanced with the velvety smoothness of the vanilla gelato. The contrasting temperatures of the hot espresso and cold gelato created a delightful sensation in my mouth. The presentation was exquisite, served in a fancy glass with a sprinkle of cocoa powder on top. The attention to detail and the skilled baristas truly made this Affogato a memorable treat. Highly recommended for any coffee enthusiast!",
    reviewImage: "",
  },
  {
    itemId: 9,
    userId: 2,
    title: "I am absolutely blown away by their Turkish coffee",
    rating: 5,
    review:
      "The coffee was brewed to perfection, with a velvety texture and a balanced combination of boldness and smoothness. The attention to detail in the preparation was evident, and the staff's knowledge and passion for their craft were truly admirable. The cozy ambiance of the shop, along with the genuine friendliness of the staff, added to the overall delightful experience.",
    reviewImage: "",
  },
  {
    itemId: 9,
    userId: 3,
    title: "A Hidden Gem for Coffee Connoisseurs!",
    rating: 5,
    review: "Their Turkish coffee is hands down the best I've ever tasted! ",
    reviewImage: "",
  },
  {
    itemId: 10,
    userId: 2,
    title: "Absolutely Delightful Irish Coffee ",
    rating: 5,
    review:
      "I highly recommend this place for anyone looking to savor a fantastic Irish Coffee that hits all the right notes!",
    reviewImage: "",
  },
  {
    itemId: 10,
    userId: 3,
    title: "Best Irish Coffee in Town",
    rating: 5,
    review: "Their Irish Coffee is hands down the best I've ever had. ",
    reviewImage: "",
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    options.tableName = "Reviews";
    return queryInterface.bulkInsert(options, review, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = "Reviews";
    return queryInterface.bulkDelete(options, review, {});
  },
};
