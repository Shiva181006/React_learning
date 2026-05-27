export const data = [
  {
    id: 1,
    title: "Happy birds",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg",
    price: "200",
  },
  {
    id: 2,
    title: "Owl",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg",
    price: "150",
  },
  {
    id: 3,
    title: "Pegin",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg",
    price: "300",
  },
  {
    id: 4,
    title: "Parrot",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg",
    price: "180",
  },

  {
    id: 5,
    title: "Crow",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg",
    price: "40",
  },
  {
    id: 6,
    title: "Peacock",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg",
    price: "280",
  },
];

export const getProductById = (id) => {
  const filteredProduct = data.filter((item) => item.id === id);
  return filteredProduct;
};

export const card_detail_data = [
  {
    id: 1,
    title: "Happy birds",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg",
    price: "200",
  },
  {
    id: 2,
    title: "Owl",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg",
    price: "150",
  },
  {
    id: 3,
    title: "Pegin",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg",
    price: "300",
  },
  {
    id: 4,
    title: "Parrot",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg",
    price: "180",
  },

  {
    id: 5,
    title: "Crow",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg",
    price: "40",
  },
  {
    id: 6,
    title: "Peacock",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg",
    price: "280",
  },
]

export const getCardDetailById = (id) => {
  const filteredProduct = data.filter((item) => item.id === id);
  return filteredProduct;
};
