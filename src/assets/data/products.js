// All Bags
// Importing images for product items.
import productImg01 from "../images/TeddyBag1.webp";

import productImg02 from "../images/Stormi1.webp";

import productImg03 from "../images/AtlasJade.webp";

import productImg04 from "../images/FlexBag1.webp";

import productImg05 from "../images/Helix1.webp";

import productImg06 from "../images/MicroPandor.webp";

import productImg07 from "../images/LanternBag2.webp";

import productImg08 from "../images/SeraTote1.webp";

import productImg09 from "../images/StudioBag.webp";

import productImg10 from "../images/MiniEddy.webp";

import productImg11 from "../images/MiniEddy2.webp";

import productImg12 from "../images/NaomiMiniWllet.webp";

import productImg13 from "../images/AirpodsCase.webp";

import productImg14 from "../images/ArtDeco.webp";

import productImg15 from "../images/WaveWallet.webp";

// All Shoes
import productImg16 from "../images/PleatedHeelBoat1.webp";

import productImg17 from "../images/Sandal1.webp";

import productImg18 from "../images/Thelma1.webp";

import productImg19 from "../images/Boot1.webp";

import productImg20 from "../images/PleatedHeelMule1.webp";

import productImg21 from "../images/OttiCompat.webp";

import productImg22 from "../images/PuffyPinkCloud.webp";

import productImg23 from "../images/ThongSandalWhite.webp";

import productImg24 from "../images/MultiColor.webp";

import productImg25 from "../images/HeeliedSlide.webp";

import productImg26 from "../images/Sandalblue.webp"

import productImg27 from "../images/Sandal5.webp"

import productImg28 from "../images/SandalBlack.webp"

// Creating an array named 'products' to store information about various products.
const products = [
  // Bags
  {
    id: "01",
    productName: "Convertible Teddy Bag - Gummy ",
    imgUrl: productImg01,
    category: "bag",
    price:"$889.00",
    shortDesc:
      "Reminiscent of a teddy bear, the convertible style has a flap magnetic closure, comes with a detachable strap that allows multiple carrying options; backpack, crossbody or as a top handle bag.",
    description:
      "Reminiscent of a teddy bear, the convertible style has a flap magnetic closure, comes with a detachable strap that allows multiple carrying options; backpack, crossbody or as a top handle bag.The new form features expandable side wings which can be folded inside. The Convertible teddy fits all your daily needs and more: Phone, Lipstick, AirPods, Cardholder and your favorite nano playdate toy. Available in brown, black and our signature gummy colorway",
    reviews: [
      {
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "02",
    productName: "Stormi - Cognac ",
    imgUrl: productImg02,
    category: "bag",
    price:"$941.00",
    shortDesc:
      "“Stormi is Objet d'art with its unique and sculptural design inspired by nature’s favorite form - swirl.",
    description:
      "“Stormi is Objet d'art with its unique and sculptural design inspired by nature’s favorite form - swirl. It is the form of constant movement and transmitting energy from galactic scales to the double helix structure of DNA. To make this project happen, we went through a challenging development and used new techniques never used in the industry previously.” says Meb Rure, Creative Director at Mlouye.",
    reviews: [
      {
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "03",
    productName: "Atlas - Jade ",
    imgUrl: productImg03,
    category: "bag",
    price:"$906.00",
    shortDesc:
      "Our new Atlas is the representation of kaleidoscope patterns put into a symmetrical geometry to create a mesmerizing mirrored effect on the bag.",
    description:
      "Atlas arrives just in time with 4 different color options for the upcoming autumn season.Features a fold-over magnet closure in smooth calf leather and interior lined in microsuede. The new starry shaped bag can be carried from casual settings to after work parties.",
    reviews: [
      {
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "04",
    productName: "Mini Flex Bag - Gummy",
    imgUrl: productImg04,
    category: "bag",
    price:"$682.00",
    shortDesc:
      "Our architectural, origami-inspired Flex Bag is now available in mini size.",
    description:
      "Our architectural, origami-inspired Flex Bag is now available in mini size. This compact and convertible design sits perfectly on your shoulder or in the palm of your hand. Handcrafted from Italian calf leather, it features a suede top with zip closure, and a detachable shoulder strap. It is roomy enough for the essentials including a large phone, mini wallet, keys and lipstick.",
    reviews: [
      {
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "05",
    productName: "Helix - Multicolor",
    imgUrl: productImg05,
    category: "bag",
    price:"$682.00",
    shortDesc:
      "Featuring a unique combination of modern art and minimalist perspective, our Helix Bag is perfectly sized to fit just the essentials - think small wallet, keys, sunglasses and large phone.",
    description:
      "Featuring a unique combination of modern art and minimalist perspective, our Helix Bag is perfectly sized to fit just the essentials - think small wallet, keys, sunglasses and large phone. It has a wind spinner silhouette that will remind you summer breezes out on the porch. The top handle is cleverly linked to the body through its hidden joint; it can fall down when you use the bag with shoulder strap. Made from smooth leather and has a suede internal with a drawstring top to keep all you have stowed inside safe and secure.",
    reviews: [
      {
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "06",
    productName: "Micro Pandora - Gummy",
    imgUrl: productImg06,
    category: "bag",
    price:"$751.00",
    shortDesc:
      "Our beloved Pandora is now available in micro size.",
    description:
      "This design is inspired by modernist architect Oscar Niemeyer's aesthetic, and it's a bag fit for any ballerina. The exquisite curvilinear geometry of this design is sure to turn heads as you walk down the street—and then, when you open it up, you'll be surprised by how bright and airy the interior is. It's padded to protect your daily essentials and covered with soft sheepskin for a luxurious finish. The bag comes with a detachable shoulder strap and is trimmed with silver hardware. This size does not fit a phone.",
    reviews: [
      {
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "07",
    productName: "Mini Lantern Bag Pleated - Olive Leaf",
    imgUrl: productImg07,
    category: "bag",
    price:"$794.00",
    shortDesc:
      "Our coveted design gets a dramatic look and textured surface quality by folding leather in an elegant zig-zag pattern.",
    description:
      " This mini version of the Lantern Bag is designed to fit just the essentials - keys, lipstick and a large phone. You can carry it by the top handle or go hands-free with the shoulder strap.",
    reviews: [
      {
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "08",
    productName: "Mini Sera Tote - Mirror",
    imgUrl: productImg08,
    category: "bag",
    price:"$751.00",
    shortDesc:
      "Mix of symmetry and fluid, clean lines, Mini Sera Tote is designed to carry your daily essentials, a large phone(like iPhone Pro Max), mini wallet or cardholder, and lipstick, etc.",
    description:
      "Its exterior design is a surrealist dream, reminiscent of a maze-like structure protruding outwards, with sharp, clean lines, and a 3D façade. It has a suede drawstring top, securing your belongings on the go.Folding inwards like an accordion and then stretching outwards to store those last-minute belongings. The Sera Tote also features a detachable shoulder strap. Carry it your way and relish every thoughtful detail.",
    reviews: [
      {
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "09",
    productName: "Studio - Oyster",
    imgUrl: productImg09,
    category: "bag",
    price:"$803.00",
    shortDesc:
      "Both pragmatically perfect in design and a unique style statement, The Studio is made for avid fans of 90’s fashion, modern and geometric shapes, and versatile handbags for every occasion.",
    description:
      " The Studio is easily thrown over the shoulder with a short, removable strap and nestled under the arm, or carried as a clutch with a sturdy acetate handle. As any new style edition should, The Studio fits seamlessly into any wardrobe, with just the right dash of playful femininity. It’s expertly crafted from calf leather with velvet lining and sized to stow your wallet, phone, 500ml water bottle, and sunglasses.",
    reviews: [
      {
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "10",
    productName: "Mini Eddy - Cappuccino",
    imgUrl: productImg10,
    category: "bag",
    price:"$682.00",
    shortDesc:
      "We wanted to evoke nostalgia this time and recreate a classic school satchel with an elaborate approach of the 2000s.",
    description:
      "We wanted to evoke nostalgia this time and recreate a classic school satchel with an elaborate approach of the 2000s. This small mood booster bag is soft, fun, and practical with multiple storage units. It has more than one would expect from a micro bag. ",
    reviews: [
      {
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "11",
    productName: "Mini Eddy - Milky",
    imgUrl: productImg11,
    category: "bag",
    price:"$682.00",
    shortDesc:
      "We wanted to evoke nostalgia this time and recreate a classic school satchel with an elaborate approach of the 2000s.",
    description:
      "We wanted to evoke nostalgia this time and recreate a classic school satchel with an elaborate approach of the 2000s. This small mood booster bag is soft, fun, and practical with multiple storage units. It has more than one would expect from a micro bag. ",
    reviews: [
      {
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "12",
    productName: "Naomi Mini Wallet - Gummy",
    imgUrl: productImg12,
    category: "bag",
    price:"$337.00",
    shortDesc:
      "The new member of our Naomi family.",
    description:
      "The new member of our Naomi family.The neat twisted polygon shape of Naomi Wallet opens to reveal five card slots and one spacious compartment that you can stow your lipstick or car keys.It comes with a detachable and adjustable strap so you can let it rest on your shoulder like a mini bag, use it as a belt bag or just slip into your tote like a wallet.",
    reviews: [
      {
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "13",
    productName: "Naomi AirPods Case - Black & Gray",
    imgUrl: productImg13,
    category: "bag",
    price:"$154.00",
    shortDesc:
      "Attached to a belt loop or a bag, our Naomi Airpods Case provides a decorative way to conceal your tech as an accessory.",
    description:
      "Attached to a belt loop or a bag, our Naomi Airpods Case provides a decorative way to conceal your tech as an accessory. An included detachable strap allows ease of wear around the neck or waist or as a crossbody. Fits both Airpods and Airpods Pro and has a puller inside for easy removal of device.",
    reviews: [
      {
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "14",
    productName: "Art Deco Camera Bag - Pink",
    imgUrl: productImg14,
    category: "bag",
    price:"$718.00",
    shortDesc:
      "The new Art Deco Camera Bag is updated with a refined shoulder strap and complementary colors.",
    description:
      "Product and Size Information.The new Art Deco Camera Bag is updated with a refined shoulder strap and complementary colors. Spacious square body features open wide dual top zip closure, interior slip pocket and brand’s iconic logo embossed on the bottom. All the intertwined frontal pockets are imagined securing your personal belongings like credit cards, key cards, or passport with quick access. The spacious interior is designed to give it enough room allowing to carry everything you need such as your large phone, wallet, sunglasses, compact mirror, hand cream, and a small water bottle. ",
    reviews: [
      {
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "15",
    productName: "Wave Wallet - Milky",
    imgUrl: productImg15,
    category: "bag",
    price:"$389.00",
    shortDesc:
      "A wallet-turned-shoulder-bag, the Wave Wallet features two conjoined leather flaps that open to reveal space for all your financial essentials.",
    description:
      "A wallet-turned-shoulder-bag, the Wave Wallet features two conjoined leather flaps that open to reveal space for all your financial essentials. A leather divider creates two compartments, with one side for notes and cards, and the other large enough to fit the iPhone Max, and your passport.",
    reviews: [
      {
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
  },
  // Shoes
  {
    id: "16",
    productName: "Pleated Heel Boot",
    imgUrl: productImg16,
    category: "shoes",
    price:"$585.00",
    shortDesc:
      "The Pleated Heel Boots take a cue from our iconic Pleated Lantern Bag, but this time, reimagining pleats using solid oak. Features a square toe and a padded insole for extra comfort.",
    description:
      "The Pleated Heel Boots take a cue from our iconic Pleated Lantern Bag, but this time, reimagining pleats using solid oak. Features a square toe and a padded insole for extra comfort.",
    reviews: [
      {
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "17",
    productName: "Louise Slide Sandal - Buttermilk",
    imgUrl: productImg17,
    category: "shoes",
    price:"$717.00",
    shortDesc:
      "Our experimentation with texture continues. Elevated sense of design and craftsmanship manifests in our Italian-made Louise sandals",
    description:
      "Our experimentation with texture continues. Elevated sense of design and craftsmanship manifests in our Italian-made Louise sandals. They have a square-toed silhouette with a wide band formed with leather pleats and extra comfortable leather-wrapped fussbett for day-long wear.",
    reviews: [
      {
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "18",
    productName: "Thelma Sandal - Black",
    imgUrl: productImg18,
    category: "shoes",
    price:"$682.00",
    shortDesc:
      "Italian-made Thelma sandals. ",
    description:
      "Our experimentation with texture continues. Elevated sense of design and craftsmanship manifests in our Italian-made Thelma sandals. Square-toed flat pair sits on extra comfortable leather-wrapped fussbett for day-long wear while two straps around the vamps and toes keep your feet in place.",
    reviews: [
      {
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "19",
    productName: "Otti Summer Boot",
    imgUrl: productImg19,
    category: "shoes",
    price:"$479.00",
    shortDesc:
      "The Summer Boots feature a lace up front, high neck with mesh throat, and a leather toe..",
    description:
      "The Summer Boots feature a lace up front, high neck with mesh throat, and a leather toe. For the woman who needs to make every second count, inner zippers make running out the door easy. Worn with warm weather essentials, the Summer Boots ooze comfort, stability and style.",
    reviews: [
      {
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "20",
    productName: "Pleated Heel Mule",
    imgUrl: productImg20,
    category: "shoes",
    price:"$495.00",
    shortDesc:
      "The Pleated Heel Mules take a cue from our iconic Pleated Lantern Bag",
    description:
      "The Pleated Heel Mules take a cue from our iconic Pleated Lantern Bag, but this time, reimagining pleats using solid oak. Features a square toe and a padded insole for extra comfort.",
    reviews: [
      {
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "21",
    productName: "Otti Combat Boot",
    imgUrl: productImg21,
    category: "shoes",
    price:"$595.00",
    shortDesc:
      "Derby-style high neck ankle boots features a 6cm chunky sole, and a rebellious style that perfectly suits a 90s dress or combat jean and tee combination.",
    description:
      "Derby-style high neck ankle boots features a 6cm chunky sole, and a rebellious style that perfectly suits a 90s dress or combat jean and tee combination.Derby-style high neck ankle boots features a 6cm chunky sole, and a rebellious style that perfectly suits a 90s dress or combat jean and tee combination.",
    reviews: [
      {
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "22",
    productName: "Puffy Sandal - Pink Cloud",
    imgUrl: productImg22,
    category: "shoes",
    price:"$751.00",
    shortDesc:
      "Made from super soft nappa like our Puff clutches, they're set on our signature pleated heels.",
    description:
      "Made from super soft nappa like our Puff clutches, they're set on our signature pleated heels. The cushioning leather insoles and 50mm low heels are primed for long-lasting comfort.",
    reviews: [
      {
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "23",
    productName: "Thong Sandal - White",
    imgUrl: productImg23,
    category: "shoes",
    price:"$596.00",
    shortDesc:
      "A thong silhouette blending our signature pleated heels and chic toe straps.",
    description:
      "A thong silhouette blending our signature pleated heels and chic toe straps. Thanks to the 50mm low heels and added pads for cushioning support you will find them practical and comfortable.",
    reviews: [
      {
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "24",
    productName: "Pleated Heel Mule - Multicolor",
    imgUrl: productImg24,
    category: "shoes",
    price:"$855.00",
    shortDesc:
      "The Pleated Heel Mules take a cue from our iconic Pleated Lantern Bag, but this time, reimagining pleats using solid oak. Features a square toe and a padded insole for extra comfort.",
    description:
      "The Pleated Heel Mules take a cue from our iconic Pleated Lantern Bag, but this time, reimagining pleats using solid oak. Features a square toe and a padded insole for extra comfort.",
    reviews: [
      {
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "25",
    productName: "Louise Heeled Slide - Multicolor",
    imgUrl: productImg25,
    category: "shoes",
    price:"$751.00",
    shortDesc:
      "Our experimentation with texture continues. Elevated sense of design and craftsmanship manifests in our Italian-made Louise sandals.",
    description:
      "Our experimentation with texture continues. Elevated sense of design and craftsmanship manifests in our Italian-made Louise sandals. They have a square-toed silhouette with a wide band formed with leather pleats and extra comfortable leather-wrapped fussbett for day-long wear.",
    reviews: [
      {
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "26",
    productName: "Louise Slide Sandal - Denim",
    imgUrl: productImg26,
    category: "shoes",
    price:"$59.00",
    shortDesc:
      "Our experimentation with texture continues.",
    description:
      "Our experimentation with texture continues. Elevated sense of design and craftsmanship manifests in our Italian-made Louise sandals. They have a square-toed silhouette with a wide band formed with leather pleats and extra comfortable leather-wrapped fussbett for day-long wear.",
    reviews: [
      {
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "27",
    productName: "Louise Slide Sandal - Denim",
    imgUrl: productImg27,
    category: "shoes",
    price:"$717.00",
    shortDesc:
      "Our experimentation with texture continues.",
    description:
      "Our experimentation with texture continues. Elevated sense of design and craftsmanship manifests in our Italian-made Louise sandals. They have a square-toed silhouette with a wide band formed with leather pleats and extra comfortable leather-wrapped fussbett for day-long wear.",
    reviews: [
      {
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "28",
    productName: "Thong Sandal - Black",
    imgUrl: productImg28,
    category: "shoes",
    price:"$556",
    shortDesc:
      "A thong silhouette blending our signature pleated heels and chic toe straps.",
    description:
      "A thong silhouette blending our signature pleated heels and chic toe straps. Thanks to the 50mm low heels and added pads for cushioning support you will find them practical and comfortable.",
    reviews: [
      {
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
  },


];

// Exporting the 'products' array to be used in other parts of the application.
export default products;


