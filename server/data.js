const desserts = [
  {
    id: 1,
    name: "Gulab Jamun",
    imageUrl: "https://res.cloudinary.com/dcmotobkr/image/upload/v1735198800/GulabJamun_u3u1oz.jpg",
    price: 5.99,
    description: "Sweet, soft, and syrupy deep-fried dumplings."
  },
  {
    id: 2,
    name: "Halwa",
    imageUrl: "https://res.cloudinary.com/dcmotobkr/image/upload/v1735198795/Moong_Dal_Halwa_kdfyj3.jpg",
    price: 3.99,
    description: "Deliciously sweet and rich dessert made from lentils or carrots."
  },
  {
    id: 3,
    name: "Ras Malai",
    imageUrl: "https://res.cloudinary.com/dcmotobkr/image/upload/v1735198796/Rasmalai_ypdzyf.jpg",
    price: 7.99,
    description: "Creamy milk-based dessert with saffron and cardamom."
  },
  {
    id: 4,
    name: "Rabri",
    imageUrl: "https://res.cloudinary.com/dcmotobkr/image/upload/v1735198796/Rabri_pwx2wb.jpg",
    price: 6.99,
    description: "Thick, creamy dessert made from reduced milk."
  }
];

const chats = [
  {
    id: 5,
    name: "Bhalle Papdi Chaat",
    imageUrl: "https://res.cloudinary.com/dcmotobkr/image/upload/v1735198945/bhallapapdichaat_nkczkf.jpg",
    price: 4.99,
    description: "Crispy papdis topped with spicy yogurt and chutneys."
  },
  {
    id: 6,
    name: "Dahi Ballah",
    imageUrl: "https://res.cloudinary.com/dcmotobkr/image/upload/v1735198945/dahiballa_ld010o.jpg",
    price: 3.49,
    description: "Soft dumplings soaked in yogurt and garnished with spices."
  },
  {
    id: 7,
    name: "Dahi Samosa",
    imageUrl: "https://res.cloudinary.com/dcmotobkr/image/upload/v1735198943/DahiSamosa-chaat_qxsrau.jpg",
    price: 2.99,
    description: "Crispy samosas topped with yogurt, chutneys, and spices."
  },
  {
    id: 8,
    name: "Kachori Chaat",
    imageUrl: "https://res.cloudinary.com/dcmotobkr/image/upload/v1735198943/kachori-chole-chaat-1_qtrn4n.jpg",
    price: 3.99,
    description: "Deep-fried pastry served with yogurt and chutney."
  },
  {
    id: 9,
    name: "Pyaaz Chaat",
    imageUrl: "https://res.cloudinary.com/dcmotobkr/image/upload/v1735198946/pyaazchaat_1_ln6ejk.jpg",
    price: 4.49,
    description: "Onion-based chaat with tangy and spicy flavors."
  },
  {
    id: 10,
    name: "Tikki Chaat",
    imageUrl: "https://res.cloudinary.com/dcmotobkr/image/upload/v1735198945/tikkichat-1_fyg3iq.jpg",
    price: 4.29,
    description: "Spicy potato tikkis served with yogurt and chutney."
  }
];

const bucket = [
  {
    id: 11,
    name: "All Bucket",
    imageUrl: "https://res.cloudinary.com/dcmotobkr/image/upload/v1735199184/allbucket_vegfwq.jpg",
    price: 8.99,
    description: "A variety of delicious items in a single bucket."
  },
  {
    id: 12,
    name: "Kachori Bucket",
    imageUrl: "https://res.cloudinary.com/dcmotobkr/image/upload/v1735199142/kachori-bucket-1_qgwyoo.jpg",
    price: 6.49,
    description: "Freshly made kachoris served in a convenient bucket."
  },
  {
    id: 13,
    name: "Samosa Bucket",
    imageUrl: "https://res.cloudinary.com/dcmotobkr/image/upload/v1735199162/SAMOSA-BUCKET_x2twqf.png",
    price: 5.99,
    description: "Crispy samosas packed in a bucket for sharing."
  }
];

const beverages = [
  {
    id: 14,
    name: "Filter Coffee",
    imageUrl: "https://res.cloudinary.com/dcmotobkr/image/upload/v1735198298/filtcoffee_xdxlnm.jpg",
    price: 2.49,
    description: "Strong and aromatic South Indian filter coffee."
  },
  {
    id: 15,
    name: "Ginger Chai",
    imageUrl: "https://res.cloudinary.com/dcmotobkr/image/upload/v1735198294/ginger-chai-01-1_myfd3q.jpg",
    price: 1.99,
    description: "Spicy tea brewed with fresh ginger."
  },
  {
    id: 16,
    name: "Lemon Masala",
    imageUrl: "https://res.cloudinary.com/dcmotobkr/image/upload/v1735198302/lemonmasala_qcegqn.jpg",
    price: 2.19,
    description: "Refreshing lemon drink with a touch of masala."
  },
  {
    id: 17,
    name: "Masala Chai",
    imageUrl: "https://res.cloudinary.com/dcmotobkr/image/upload/v1735198306/masalachai_hko73l.jpg",
    price: 2.29,
    description: "Spiced tea with aromatic herbs and masala."
  }
];

const assets = {
    desserts,chats,bucket,beverages
  };
  
module.exports = assets;
