let itemDetails = [
  {
    itemId: "1",
    itemName: "Chicken Biryani",
    itemPrice: 150,
    itemDescription: "Steamed rice with Chicken and blended spices",
    itemImage: "chickenBiryani",
  },
  {
    itemId: "2",
    itemName: "Mutton Biryani",
    itemPrice: 200,
    itemDescription: "Steamed rice with Mutton and blended spices",
    itemImage: "muttonBiryani",
  },
  {
    itemId: "3",
    itemName: "Garlic Naan",
    itemPrice: 5,
    itemDescription: "Naan's made of Wheat and Garlic heated on iron pan",
    itemImage: "garlicNaan",
  },
  {
    itemId: "4",
    itemName: "Paneer Butter Masala",
    itemPrice: 225,
    itemDescription: "Paneer roasted and mixed with tomato curry and butter",
    itemImage: "paneerButterMasala",
  },
];

let jsonArray = JSON.stringify(itemDetails);
localStorage.setItem("itemDetails", jsonArray);
