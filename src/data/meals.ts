import { Meal } from '@/entities/meal';

async function getMealsData(): Promise<Meal[]> {
  // Fetch data from your API here.
  return [
    {
      id: '656ef3eb9dbec800814e5a52',
      name: 'Jollof Rice with Chicken and Plantain',
      description:
        'A specially cooked rice recipe from West Africa. Delicious dish with ingredients including rice, tomatoes, onion, salt, and red pepper. Served with plantain, and beef or chicken.',
      image:
        'https://res.cloudinary.com/dd2omgwtx/image/upload/v1701770225/dabmljrxslrulacvsrad.jpg',
      price: 13,
      category: {
        id: '6595744074c630efdc5df947',
        name: 'Combo Meals',
        __v: 0,
      },
      dateCreated: '2023-12-05T09:56:59.801Z',
      __v: 0,
      isVisible: true,
    },
    {
      id: '6575389fc92842c755609b74',
      name: 'Fried Rice with Coleslaw and Chicken.',
      description:
        'Special Fried Rice; cooked with peas, tomatoes, onion and salt. Served with plantain, and beef or chicken.',
      image:
        'https://res.cloudinary.com/dd2omgwtx/image/upload/v1703510756/bbsxsayisddohr7jxycq.jpg',
      price: 13,
      category: {
        id: '656ef3539dbec800814e5a49',
        name: 'African Meal',
        __v: 0,
      },
      dateCreated: '2023-12-10T04:03:43.120Z',
      __v: 0,
      isVisible: true,
    },
    {
      id: '657af910952fa4cc0fe2966d',
      name: 'Amala with Gbegiri; Ewedu and Assorted meat.',
      description:
        'Amala is a swallow food made up of yam, cassava flour or unripe plantain flour. This is served with gbegiri and assorted meat',
      image:
        'https://res.cloudinary.com/dd2omgwtx/image/upload/v1703511387/upmoblx3rdprhvdezeed.jpg',
      price: 15,
      category: {
        id: '656ef3539dbec800814e5a49',
        name: 'African Meal',
        __v: 0,
      },
      dateCreated: '2023-12-14T12:46:08.949Z',
      __v: 0,
      isVisible: true,
    },
    {
      id: '657af95e952fa4cc0fe29681',
      name: 'Rice and Beans with Peppered Assorted Stew',
      description:
        'The Assorted Stew is Made with Red peppers ( red bell peppers, red chili peppers ) and palm oil. This stew is served with rice. Plantain can also be added',
      image:
        'https://res.cloudinary.com/dd2omgwtx/image/upload/v1703513118/jdhsxjuixy9xpbfkpfez.jpg',
      price: 13,
      category: {
        id: '656ef3539dbec800814e5a49',
        name: 'African Meal',
        __v: 0,
      },
      dateCreated: '2023-12-14T12:47:26.662Z',
      __v: 0,
      isVisible: true,
    },
    {
      id: '657af98a952fa4cc0fe2968b',
      name: 'Yam and Fish Stew',
      description: 'Yam and peppered fish stew',
      image:
        'https://res.cloudinary.com/dd2omgwtx/image/upload/v1703513284/i0xdecf0cx6catqhbe7h.jpg',
      price: 12,
      category: {
        id: '656ef3539dbec800814e5a49',
        name: 'African Meal',
        __v: 0,
      },
      dateCreated: '2023-12-14T12:48:10.291Z',
      __v: 0,
      isVisible: true,
    },
    {
      id: '65898ed70eeb1b8e3f8c417a',
      name: 'Eba with Efo Riro',
      description:
        'Eba is made from dried grated cassava flour, commonly known as garri. This is served with Assorted Efo Stew garnished with two pieces of meat',
      image:
        'https://res.cloudinary.com/dd2omgwtx/image/upload/v1703513814/cdegvxznzy81eo1w2wys.jpg',
      price: 13,
      category: {
        id: '656ef3539dbec800814e5a49',
        name: 'African Meal',
        __v: 0,
      },
      dateCreated: '2023-12-25T14:16:55.258Z',
      __v: 0,
      isVisible: true,
    },
    {
      id: '658be177a6486290f573b2c5',
      name: 'Rice with Assorted Egusi Soup',
      description: 'White Rice with Assorted Egusi Soup',
      image:
        'https://res.cloudinary.com/dd2omgwtx/image/upload/v1703666038/w4p4grpcq9ocq7bg7qos.jpg',
      price: 12,
      category: {
        id: '656ef3539dbec800814e5a49',
        name: 'African Meal',
        __v: 0,
      },
      dateCreated: '2023-12-27T08:33:59.245Z',
      __v: 0,
      isVisible: true,
    },
    {
      id: '658be3d2a6486290f573b2e3',
      name: 'Rice and Plantain with Egg',
      description: 'Rice and Plantain with Red Stew and Egg',
      image:
        'https://res.cloudinary.com/dd2omgwtx/image/upload/v1703666642/flnq2b00hva4qnat9rui.jpg',
      price: 13,
      category: {
        id: '656ef3539dbec800814e5a49',
        name: 'African Meal',
        __v: 0,
      },
      dateCreated: '2023-12-27T08:44:02.650Z',
      __v: 0,
      isVisible: true,
    },
    {
      id: '658be436a6486290f573b2ef',
      name: 'Eba and Okra',
      description: 'Eba and  Okra',
      image:
        'https://res.cloudinary.com/dd2omgwtx/image/upload/v1703666741/ssf7wvsequz29wnplr3t.jpg',
      price: 15,
      category: {
        id: '656ef3539dbec800814e5a49',
        name: 'African Meal',
        __v: 0,
      },
      dateCreated: '2023-12-27T08:45:42.313Z',
      __v: 0,
      isVisible: true,
    },
    {
      id: '658be49da6486290f573b2f6',
      name: 'Ewa Aganyin and Plantain',
      description:
        'Black Eyed beans served with special designer stew ganished with plantain. Ewa Aganyin is a street food commonly eaten across Nigeria. The beans are made to be extremely soft or mashed. It is commonly eaten with barely ground pepper and tomato sauce which is very spicy, but peppery.',
      image:
        'https://res.cloudinary.com/dd2omgwtx/image/upload/v1703666844/vfdyepyxbtluomhzr2zg.jpg',
      price: 15,
      category: {
        id: '656ef3539dbec800814e5a49',
        name: 'African Meal',
        __v: 0,
      },
      dateCreated: '2023-12-27T08:47:25.404Z',
      __v: 0,
      isVisible: true,
    },
    {
      id: '658be581a6486290f573b2fd',
      name: 'Rice and Plantain with Vegetable',
      description: 'Rice and Plantain with Assorted Vegetable Soup',
      image:
        'https://res.cloudinary.com/dd2omgwtx/image/upload/v1703667073/cg4ugmexjvry9ojmtwbs.jpg',
      price: 15,
      category: {
        id: '656ef3539dbec800814e5a49',
        name: 'African Meal',
        __v: 0,
      },
      dateCreated: '2023-12-27T08:51:13.694Z',
      __v: 0,
      isVisible: true,
    },
    {
      id: '658be5c1a6486290f573b304',
      name: 'Plantain',
      description: 'Rice, Beans and Plantain with Goat meat stew',
      image:
        'https://res.cloudinary.com/dd2omgwtx/image/upload/v1705077543/orklx4k3whjbusnd5rwf.png',
      price: 5,
      category: {
        id: '65c31d96dee299370dc1c5b6',
        name: 'Extras',
        __v: 0,
      },
      dateCreated: '2023-12-27T08:52:17.452Z',
      __v: 0,
      isVisible: true,
    },
    {
      id: '65a170148e06ca09bc6ad27e',
      name: 'Chicken',
      description: 'Stewed Quarter Chicken with Vegetables.',
      image:
        'https://res.cloudinary.com/dd2omgwtx/image/upload/v1705078980/nvrvdx56nov6fgn16fol.jpg',
      price: 4,
      category: {
        id: '65c31d96dee299370dc1c5b6',
        name: 'Extras',
        __v: 0,
      },
      dateCreated: '2024-01-12T17:00:04.449Z',
      __v: 0,
      isVisible: true,
    },
    {
      id: '65a171388e06ca09bc6ad2bd',
      name: 'White Rice',
      description: 'A portion of White rice (Meal for one)',
      image:
        'https://res.cloudinary.com/dd2omgwtx/image/upload/v1705079095/do9j20wivlcrvg3fr5f6.jpg',
      price: 8,
      category: {
        id: '65c31d96dee299370dc1c5b6',
        name: 'Extras',
        __v: 0,
      },
      dateCreated: '2024-01-12T17:04:56.341Z',
      __v: 0,
      isVisible: true,
    },
    {
      id: '65a172d58e06ca09bc6ad2cb',
      name: 'White Rice and Beans ',
      description: 'White Rice and Beans (Meal for 1)',
      image:
        'https://res.cloudinary.com/dd2omgwtx/image/upload/v1705082025/enel8gnemgm4szpzoixp.jpg',
      price: 12,
      category: {
        id: '65c31d96dee299370dc1c5b6',
        name: 'Extras',
        __v: 0,
      },
      dateCreated: '2024-01-12T17:11:49.208Z',
      __v: 0,
      isVisible: true,
    },
    {
      id: '65a5a949e965cd6b614e3839',
      name: 'Beef',
      description: 'Peppered Stew Beef',
      image:
        'https://res.cloudinary.com/dd2omgwtx/image/upload/v1705355593/rgpi2su5loo2mlxajagx.jpg',
      price: 4,
      category: {
        id: '65c31d96dee299370dc1c5b6',
        name: 'Extras',
        __v: 0,
      },
      dateCreated: '2024-01-15T21:53:13.934Z',
      __v: 0,
      isVisible: true,
    },
    {
      id: '65a5aad8e965cd6b614e3861',
      name: 'Jollof Rice',
      description: 'Jollof Rice (1 litre)',
      image:
        'https://res.cloudinary.com/dd2omgwtx/image/upload/v1705355992/kkbgc2njvog9dzlasxgd.jpg',
      price: 12,
      category: {
        id: '656ef3539dbec800814e5a49',
        name: 'African Meal',
        __v: 0,
      },
      dateCreated: '2024-01-15T21:59:52.790Z',
      __v: 0,
      isVisible: true,
    },
    {
      id: '65a5afdbe965cd6b614e388c',
      name: 'Coconut Fried Rice',
      description: 'Special Coconut Fried Rice',
      image:
        'https://res.cloudinary.com/dd2omgwtx/image/upload/v1705357275/gz0uouhzd5dovgcwtmq3.jpg',
      price: 10,
      category: {
        id: '656ef3539dbec800814e5a49',
        name: 'African Meal',
        __v: 0,
      },
      dateCreated: '2024-01-15T22:21:15.719Z',
      __v: 0,
      isVisible: true,
    },
    {
      id: '65a5b1a7e965cd6b614e3899',
      name: 'Fried Yam and Plantain with Tilapia Fish',
      description: 'Fried Yam and Plantain with Peppered Tilapia Fish.',
      image:
        'https://res.cloudinary.com/dd2omgwtx/image/upload/v1705357734/fbmrgk3xpicsn5thmoqa.jpg',
      price: 20,
      category: {
        id: '656ef3539dbec800814e5a49',
        name: 'African Meal',
        __v: 0,
      },
      dateCreated: '2024-01-15T22:28:55.473Z',
      __v: 0,
      isVisible: true,
    },
    {
      id: '65a5b73ce965cd6b614e38a2',
      name: 'Rice and Plantain with Ofada Stew ',
      description: 'Rice and Plantain with Assorted Ofada Stew',
      image:
        'https://res.cloudinary.com/dd2omgwtx/image/upload/v1705359164/anms2wjih5ojrbsimdnm.jpg',
      price: 17,
      category: {
        id: '656ef3539dbec800814e5a49',
        name: 'African Meal',
        __v: 0,
      },
      dateCreated: '2024-01-15T22:52:44.961Z',
      __v: 0,
      isVisible: true,
    },
    {
      id: '65a7f05e011ac01322bd76ce',
      name: 'PuffPuff (20 Pieces)',
      description:
        'Traditional snack made of fried dough and eaten across Africa',
      image:
        'https://res.cloudinary.com/dd2omgwtx/image/upload/v1705504862/qyngbyfeigv7funyft9q.jpg',
      price: 10,
      category: {
        id: '656ef3539dbec800814e5a49',
        name: 'African Meal',
        __v: 0,
      },
      dateCreated: '2024-01-17T15:21:02.678Z',
      __v: 0,
      isVisible: true,
    },
    {
      id: '65a7f2cf011ac01322bd76e5',
      name: 'Meat Pie ( 12 pieces)',
      description:
        'This famous meat pie is buttery and flaky, filled with savory meat sauce.',
      image:
        'https://res.cloudinary.com/dd2omgwtx/image/upload/v1705505487/udkotn2afkzgdka95puk.jpg',
      price: 24,
      category: {
        id: '656ef3539dbec800814e5a49',
        name: 'African Meal',
        __v: 0,
      },
      dateCreated: '2024-01-17T15:31:27.647Z',
      __v: 0,
      isVisible: true,
    },
    {
      id: '65a966c196ca78d27efa51ae',
      name: 'Efo Riro (1 Litre)',
      description:
        "Efo riro (Nigerian Spinach Stew) is a mouthwatering African stew made with 'Efo Shoko' (Lagos spinach) or 'Efo Tete' (African spinach).",
      image:
        'https://res.cloudinary.com/dd2omgwtx/image/upload/v1705600704/xfxokdmissn2zshxy3uz.jpg',
      price: 17,
      category: {
        id: '656ef3539dbec800814e5a49',
        name: 'African Meal',
        __v: 0,
      },
      dateCreated: '2024-01-18T17:58:25.033Z',
      __v: 0,
      isVisible: true,
    },
    {
      id: '65a9678796ca78d27efa51b5',
      name: 'Fried Rice (1 Litre)',
      description:
        "A rice dish that's made with meats, mixed veggies (carrots, peas, sweet corn, green beans) and spices.",
      image:
        'https://res.cloudinary.com/dd2omgwtx/image/upload/v1705600903/l9gdmp84a5bklqzfeesv.jpg',
      price: 12,
      category: {
        id: '656ef3539dbec800814e5a49',
        name: 'African Meal',
        __v: 0,
      },
      dateCreated: '2024-01-18T18:01:43.806Z',
      __v: 0,
      isVisible: true,
    },
    {
      id: '65a967b296ca78d27efa51bc',
      name: 'Gizdodo',
      description:
        'Delicacy of peppered gizzards and plantains tossed in a delicious sauce of tomatoes, onions, hot peppers and bell peppers.',
      image:
        'https://res.cloudinary.com/dd2omgwtx/image/upload/v1705600945/a9vojwgsrjmxyfz09z1t.jpg',
      price: 15,
      category: {
        id: '656ef3539dbec800814e5a49',
        name: 'African Meal',
        __v: 0,
      },
      dateCreated: '2024-01-18T18:02:26.039Z',
      __v: 0,
      isVisible: true,
    },
    {
      id: '65a9686f96ca78d27efa51cc',
      name: 'Mix Tray- PuffPuff, Sausage, MeatPie (10 each)',
      description: 'PuffPuff ;Sausage Rolls; and MeatPie',
      image:
        'https://res.cloudinary.com/dd2omgwtx/image/upload/v1705601134/cn2b5cswq1ivxnwzqj7i.jpg',
      price: 40,
      category: {
        id: '656ef3539dbec800814e5a49',
        name: 'African Meal',
        __v: 0,
      },
      dateCreated: '2024-01-18T18:05:35.702Z',
      __v: 0,
      isVisible: true,
    },
    {
      id: '65a968fe96ca78d27efa51db',
      name: 'Egusi(1 Litre)',
      description:
        ' Egusi made with a higher quantity of green vegetables like spinach, ugu, kale etc.',
      image:
        'https://res.cloudinary.com/dd2omgwtx/image/upload/v1705601277/ahtpgfrmwfyg82zgwnut.jpg',
      price: 18,
      category: {
        id: '65c31d96dee299370dc1c5b6',
        name: 'Extras',
        __v: 0,
      },
      dateCreated: '2024-01-18T18:07:58.362Z',
      __v: 0,
      isVisible: true,
    },
    {
      id: '65a969ad96ca78d27efa51e2',
      name: 'Moi Moi',
      description:
        'Traditional Nigerian meal made from beans, onions, peppers, spices, and other ingredients.',
      image:
        'https://res.cloudinary.com/dd2omgwtx/image/upload/v1705601452/ajv9otm154fqo9hxzibl.jpg',
      price: 4,
      category: {
        id: '65c31d96dee299370dc1c5b6',
        name: 'Extras',
        __v: 0,
      },
      dateCreated: '2024-01-18T18:10:53.122Z',
      __v: 0,
      isVisible: false,
    },
    {
      id: '65c328e2dee299370dc1c640',
      name: 'Efo Riro (1 litre)',
      description:
        'Efo Riro is a vegetable soup with layers of flavour vanished with fish or meat.',
      image:
        'https://res.cloudinary.com/dd2omgwtx/image/upload/v1707288801/zpukrnfmsyhuk7opa7jc.jpg',
      price: 17,
      category: {
        id: '65c31d96dee299370dc1c5b6',
        name: 'Extras',
        __v: 0,
      },
      isVisible: true,
      dateCreated: '2024-02-07T06:53:22.190Z',
      __v: 0,
    },
    {
      id: '65c32acedee299370dc1c64a',
      name: 'Red pepper stew(1 litre) plus Assorted',
      description: 'Pepper-based sauce stew with assorted meat ',
      image:
        'https://res.cloudinary.com/dd2omgwtx/image/upload/v1707289294/vqaxgwwfmnx4fi02favz.jpg',
      price: 20,
      category: {
        id: '65c31d96dee299370dc1c5b6',
        name: 'Extras',
        __v: 0,
      },
      isVisible: true,
      dateCreated: '2024-02-07T07:01:34.663Z',
      __v: 0,
    },
    {
      id: '65c3719154df67269df65ad8',
      name: 'Garri Eba',
      description:
        'Garri also known as Eba , Swallow meal made from garri with hot boiling water. ',
      image:
        'https://res.cloudinary.com/dd2omgwtx/image/upload/v1707307408/idjgolhnllkijdssbztr.jpg',
      price: 4,
      category: {
        id: '65c31d96dee299370dc1c5b6',
        name: 'Extras',
        __v: 0,
      },
      isVisible: true,
      dateCreated: '2024-02-07T12:03:29.098Z',
      __v: 0,
    },
    {
      id: '65c3727854df67269df65ae4',
      name: 'Pounded Yam',
      description: '1 wrap of Pounded yam',
      image:
        'https://res.cloudinary.com/dd2omgwtx/image/upload/v1707307639/eoctmolbssjwikrslzk1.jpg',
      price: 4,
      category: {
        id: '65c31d96dee299370dc1c5b6',
        name: 'Extras',
        __v: 0,
      },
      isVisible: true,
      dateCreated: '2024-02-07T12:07:20.224Z',
      __v: 0,
    },
    {
      id: '65c38a4654df67269df65b47',
      name: 'Ayamase (1 litre)',
      description:
        "Ayamase (pronounced 'ha-yah-ma-shay') is a blended mixture of green peppers and chillies fried in palm oil and locust beans. It comes with small chunks of beef, cow foot and tripe.",
      image:
        'https://res.cloudinary.com/dd2omgwtx/image/upload/v1707313734/buulymkzg8j23zkaob0j.jpg',
      price: 25,
      category: {
        id: '65c31d96dee299370dc1c5b6',
        name: 'Extras',
        __v: 0,
      },
      isVisible: true,
      dateCreated: '2024-02-07T13:48:54.855Z',
      __v: 0,
    },
    {
      id: '65f315770377bb558e0eea43',
      name: 'Moi-Moi',
      description:
        'Moin-moin or moi-moi is a steamed or boiled bean pudding made from a mixture of washed and peeled beans and onions, fresh red peppers, and spices',
      image:
        'https://res.cloudinary.com/dd2omgwtx/image/upload/v1710429559/rbanben20mb2gukwowcf.jpg',
      price: 4,
      category: {
        id: '65c31d96dee299370dc1c5b6',
        name: 'Extras',
        __v: 0,
      },
      isVisible: true,
      dateCreated: '2024-03-14T15:19:19.423Z',
      __v: 0,
    },
    {
      id: '6612bbc4779d5e80dff85c9e',
      name: 'Chineese Fried Rice and Beef Stir Fry',
      description:
        'This is a classic dish combining stir-fried rice with vegetables and eggs, alongside thinly sliced beef cooked with vegetables in a savory sauce.',
      image:
        'https://res.cloudinary.com/dd2omgwtx/image/upload/v1712503748/edt1esrqfenakv1ijv5b.jpg',
      price: 15,
      category: {
        id: '656ef3539dbec800814e5a49',
        name: 'African Meal',
        __v: 0,
      },
      isVisible: true,
      dateCreated: '2024-04-07T15:29:08.701Z',
      __v: 0,
    },
  ];
}

export default getMealsData;
