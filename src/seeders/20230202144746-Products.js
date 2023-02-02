"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("products", [
      {
        id: "20ecb13c-755e-45b0-91f4-0a3d5db0d2bf",
        name: "Double Cheese Burger",
        price: 59,
        image: "https://foodingly.netlify.app/assets/img/tab-img/item1.png",
        category: "BURGER",
        discount: 50,
      },
      {
        id: "3946c9a1-dbcf-48af-b251-776207cf5cbe",
        name: "LEANguini Lemon Parmesan",
        price: 55,
        image:
          "https://images.noodles.com/f00000000269542/www.noodles.com/wp-content/uploads/2022/05/76961-ML_LNGLemonParm_72dpi_rgb_OLO_OH-1050x700.png",
        category: "NOODLES",
        discount: 20,
      },
      {
        id: "4908fae1-9bb6-44d1-9477-b5e97e0f3396",
        name: "New Arrival Ice cream",
        price: 17,
        image: "https://foodingly.netlify.app/assets/img/tab-img/item9.png",
        category: "ICE_CREAM",
        discount: null,
      },
      {
        id: "5755e3bf-af55-4b9d-a34f-4a7804f71c02",
        name: "",
        price: 0,
        image: null,
        category: "CHICKEN",
        discount: null,
      },
      {
        id: "5df3155a-0749-484a-8ca0-d2ae8b5b0f05",
        name: "Spaghetti & Meatballs",
        price: 50,
        image:
          "https://images.noodles.com/f00000000269542/www.noodles.com/wp-content/uploads/2018/04/Spageatbas72dpirgbOOOH-1050x700.png",
        category: "NOODLES",
        discount: null,
      },
      {
        id: "70530fb1-9b2f-4acf-b97c-1d4aea5b2e38",
        name: "Buttered Noodles",
        price: 50,
        image:
          "https://images.noodles.com/f00000000269542/www.noodles.com/wp-content/uploads/2018/04/ButteredNoodes72dpirgbOOOH-1050x700.png",
        category: "NOODLES",
        discount: 18,
      },
      {
        id: "8005d67e-2fa5-4444-99e3-ebaced33c9ba",
        name: "DOUBLE WESTERN BACON CHEESEBURGER",
        price: 18,
        image:
          "https://res.cloudinary.com/amecar/image/upload/f_auto,w_849/v1591307573/ALAPARRILLA-DoubleWesternBaconCheeseburger-min_l4q26i.jpg",
        category: "BURGER",
        discount: 10,
      },
      {
        id: "8e7ca219-08d9-477f-919b-8012f607031c",
        name: "Seafood pizza",
        price: 18,
        image: "https://foodingly.netlify.app/assets/img/tab-img/item11.png",
        category: "DEFAULT",
        discount: 25,
      },
      {
        id: "a9d5fede-cf3f-4bf8-8457-29d1bc9e4350",
        name: "MONSTER ANGUS BURGER",
        price: 18,
        image:
          "https://www.hardees.com/-/media/project/cke/hardees/products/charboiled-burgers/hardees_site_705x742_monsterthickburger/h_site_705x501_monsterthickburger/cke_w4_monsterangus_705x501.jpg",
        category: "BURGER",
        discount: 15,
      },
      {
        id: "ab9a2ffa-c777-487f-9c8f-dd7ff0f8e221",
        name: "full chicken grill",
        price: 45,
        image: "https://foodingly.netlify.app/assets/img/tab-img/item7.png",
        category: "CHICKEN",
        discount: 35,
      },
      {
        id: "abf8095a-34f5-49df-8458-1d2f494569fc",
        name: "Chicken Cutlet",
        price: 32,
        image: "https://foodingly.netlify.app/assets/img/tab-img/item5.png",
        category: "CHICKEN",
        discount: null,
      },
      {
        id: "bb313128-d574-4418-bc6e-1ca2bc2a16e2",
        name: "Noodles With Cheese",
        price: 60,
        image: "https://foodingly.netlify.app/assets/img/tab-img/item4.png",
        category: "NOODLES",
        discount: 30,
      },
      {
        id: "bdf0b111-a19d-4a2a-b21f-d3df348f107c",
        name: "MUSHROOM AND SWISS ANGUS BURGER",
        price: 15,
        image:
          "https://www.hardees.com/-/media/project/cke/hardees/products/charboiled-burgers/hardees_site_705x742_mushroomswissthickburger/h_site_705x501_mushroomswissthickburger/cke_w4_mushroomswissangus_705x501.jpg",
        category: "BURGER",
        discount: 15,
      },
      {
        id: "ff1bc3f2-4346-4340-b763-274461c3ba8f",
        name: "Glass of cola with ice",
        price: 25,
        image: "https://foodingly.netlify.app/assets/img/tab-img/item10.png",
        category: "DRINKS",
        discount: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};
