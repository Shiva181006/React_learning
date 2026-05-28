export const data = [
  {
    id: 1,
    title: "Happy birds",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg",
    price: "200",
    inner_image: [
      "https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg",
      "https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg",
      "https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg",
    ],
  },
  {
    id: 2,
    title: "Owl",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg",
    price: "150",
    inner_image: [
      "https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg",
      "https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg",
      "https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg",
    ],
  },
  {
    id: 3,
    title: "Pegin",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg",
    price: "300",
    inner_image: [
      "https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg",
      "https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg",
      "https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg",
    ],
  },
  {
    id: 4,
    title: "Parrot",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg",
    price: "180",
    inner_image: [
      "https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg",
      "https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg",
      "https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg",
    ],
  },

  {
    id: 5,
    title: "Crow",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg",
    price: "40",
    inner_image: [
      "https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg",
      "https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg",
      "https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg",
    ],
  },
  {
    id: 6,
    title: "Peacock",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg",
    price: "280",
    inner_image: [
      "https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg",
      "https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg",
      "https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg",
    ],
  },
];

export const getProductById = (id) => {
  const filteredProduct = data.filter((item) => item.id === id);
  return filteredProduct;
};
