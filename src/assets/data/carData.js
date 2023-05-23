// import all images from assets/images directory
import img01 from "../all-images/cars-img/dacia-sandero.jpg";
import img02 from "../all-images/cars-img/dacia-logan-.jpg";
import img03 from "../all-images/cars-img/clio4.png";
import img04 from "../all-images/cars-img/dacia-dokker.png";

const carData = [
  {
    id: 1,
    brand: "Dacia",
    rating: 45,
    carName: "Dacia Sandero",
    imgUrl: img01,
    model: "Stepway",
    price: 500,
    speed: "18kmpl",
    gps: "No GPS",
    seatType: "Cloth seats",
    automatic: "Manual",
    description:
      "The Dacia Sandero is a compact car produced by the Romanian manufacturer Dacia. It was introduced in 2007 and has since become a popular choice for drivers who want an affordable and practical car. The Sandero Stepway model offers a higher ground clearance and rugged looks, making it a great option for those who want a car that can handle rough roads.",
  },
  {
    id: 2,
    brand: "Dacia",
    rating: 45,
    carName: "Dacia Logan Diesel",
    imgUrl: img02,
    model: "Diesel",
    price: 300,
    speed: "15kmpl",
    gps: "No GPS",
    seatType: "Standard seats",
    automatic: "Manual",
    description:
      "The Dacia Logan Diesel is a practical and reliable car that delivers impressive fuel efficiency, making it an ideal choice for long drives and daily commutes. With its spacious interior and comfortable seating, it offers a comfortable and enjoyable ride. The car is also equipped with a range of advanced safety features, ensuring the safety of passengers and drivers alike.",
  },

  {
    id: 11,
    brand: "Renault",
    rating: 55,
    carName: "Renault Clio4 Diesel",
    imgUrl: img03,
    model: "Diesel",
    price: 350,
    speed: "19kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Clio4 Diesel is a high-performance car that offers excellent fuel efficiency and superior driving dynamics. Equipped with a range of advanced features, including a powerful engine, advanced suspension, and responsive brakes, it offers an unparalleled driving experience. The car is also equipped with advanced safety features, ensuring that you and your passengers stay safe on the road.",
  },
  {
    id: 4,
    brand: "Dacia",
    rating: 40,
    carName: "Dacia Logan Essence",
    imgUrl: img02,
    model: "Essence",
    price: 250,
    speed: "17kmpl",
    gps: "No GPS",
    seatType: "Standard seats",
    automatic: "Manual",
    description:
      "The Dacia Logan Essence is a stylish and affordable car that offers excellent performance and fuel efficiency. It is equipped with a range of advanced features, including air conditioning, power windows, and central locking, ensuring that you enjoy a comfortable and convenient ride. With its sleek design and reliable engine, it is a great choice for those looking for a practical and stylish car.",
  },
  {
    id: 5,
    brand: "Dacia",
    rating: 48,
    carName: "Dacia Dokker Diesel",
    imgUrl: img04,
    model: "Diesel",
    price: 400,
    speed: "18kmpl",
    gps: "GPS Navigation",
    seatType: "Standard seats",
    automatic: "Manual",
    description:
      "The Dacia Dokker Diesel is a versatile and practical car that is perfect for those who need extra space for their cargo or passengers. With its spacious interior and flexible seating arrangements, it can accommodate up to seven passengers or carry large items with ease. The car is also equipped with a range of advanced features, including air conditioning, power windows, and central locking, making it a comfortable and convenient choice for everyday use.",
  },
];

export default carData;
