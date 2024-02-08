const f2l = [
  {
    name: "F2L 1",
    subset: "Free Pairs",
    setup: "F R' F' R",
    algorithm: {
      fr: ["{U} <R U' R'>"],
      fl: ["<F' r U r'>"],
      bl: ["{U} <L U' L'>"],
      br: ["{U} <f R' f'>", "<r' U' R U M'>"],
    },
    image: require("./../assets/f2l/F2L 1.svg").default,
  },
  {
    name: "F2L 2",
    subset: "Free Pairs",
    setup: "R' F R F'",
    algorithm: {
      fr: ["<F R' F' R>"],
      fl: ["{U'} <L' U L>"],
      bl: ["{U'} <f' L f>"],
      br: ["{U'} <R' U R>"],
    },
    image: require("./../assets/f2l/F2L 2.svg").default,
  },
  {
    name: "F2L 3",
    subset: "Free Pairs",
    setup: "F' U F",
    algorithm: {
      fr: ["(y' <R' U' R>) | (y <L' U' L>)"],
      fl: ["<L' U' L>"],
      bl: ["<f' L' f>"],
      br: ["<R' U' R>"],
    },
    image: require("./../assets/f2l/F2L 3.svg").default,
  },
  {
    name: "F2L 4",
    subset: "Free Pairs",
    setup: "R U' R'",
    algorithm: {
      fr: ["<R U R'>"],
      fl: ["(y' <R U R'>) | (y <L U L'>)"],
      bl: ["<L U L'>"],
      br: ["<f R f'>"],
    },
    image: require("./../assets/f2l/F2L 4.svg").default,
  },
  {
    name: "F2L 5",
    subset: "Disconnected Pairs",
    setup: "R U R' U2' R U' R' U",
    algorithm: {
      fr: ["{U'} R U R' U2 <R U' R'>"],
      fl: ["{U} R' F r U' r' F' R"],
      bl: ["{U'} L U L' U2 <L U' L'>"],
      br: ["{U'} R' F R U R' U' F' R"],
    },
    image: require("./../assets/f2l/F2L 5.svg").default,
  },
  {
    name: "F2L 6",
    subset: "Disconnected Pairs",
    setup: "F' U' F U2' F' U F U'",
    algorithm: {
      fr: ["{U'} r U' R' U R U r'"],
      fl: ["{U} L' U' L U2 <L' U L>"],
      bl: ["{U} r U' r' U' L U F L'"],
      br: ["{U} R' U' R U <R' U2 R>"],
    },
    image: require("./../assets/f2l/F2L 6.svg").default,
  },
  {
    name: "F2L 7",
    subset: "Disconnected Pairs",
    setup: "R U R' U2' R U2' R' U",
    algorithm: {
      fr: ["{U'} R U2 R' U2 <R U' R'>"],
      fl: ["F U R U2 R' U F'"],
      bl: ["{U'} L U2 L' U' <L U2 L'>"],
      br: ["r U2 R2 U' R2 U' r'"],
    },
    image: require("./../assets/f2l/F2L 7.svg").default,
  },
  {
    name: "F2L 8",
    subset: "Disconnected Pairs",
    setup: "r' U' R2 U' R2' U2' r",
    algorithm: {
      fr: ["r' U2 R2 U R2 U r"],
      fl: ["{U} L' U2 L U2 <L' U L>"],
      bl: ["l' U2 L2 U L2 U l"],
      br: ["{U} R' U2 R U <R' U2 R>"],
    },
    image: require("./../assets/f2l/F2L 8.svg").default,
  },
  {
    name: "F2L 9",
    subset: "Disconnected Pairs",
    setup: "F' U F U' R U R' U",
    algorithm: {
      fr: ["{U2} r U' r' U r U r' <R U R'>"],
      fl: ["{U} L' U' L U' <L' U' L>"],
      bl: ["{U'} L U' L' U <f' L' f>"],
      br: ["{U2} R' U R U <R' U' R>"],
    },
    image: require("./../assets/f2l/F2L 9.svg").default,
  },
  {
    name: "F2L 10",
    subset: "Disconnected Pairs",
    setup: "R U' R' U' R U' R' U",
    algorithm: {
      fr: ["{U'} R U R' U <R U R'>"],
      fl: ["{U2} R' F R U' R' F' R <L' U' L>"],
      bl: ["{U2} L U' L' U' <L U L'>"],
      br: ["{U} R' U R U' <f R f'>"],
    },
    image: require("./../assets/f2l/F2L 10.svg").default,
  },
  {
    name: "F2L 11",
    subset: "Connected Pairs",
    setup: "F' U F U' R U2' R' U",
    algorithm: {
      fr: [
        "F R' F' R U' R U' R' U <R U' R'>",
        "{U'} R U2 R' U (y' <R' U' R>) | (y <L' U' L>)",
      ],
      fl: ["L' U L U' L' U L U2 <L' U L>"],
      bl: ["{U'} L U2 L' U <f' L' f>"],
      br: ["R U2 R2 U' R2 U' R'"],
    },
    image: require("./../assets/f2l/F2L 11.svg").default,
  },
  {
    name: "F2L 12",
    subset: "Connected Pairs",
    setup: "R U R' U2' R U R' U' R U R'",
    algorithm: {
      fr: ["R U' R' U R U' R' U2 <R U' R'>"],
      fl: ["F' r U r U L' U L U' <L' U L>"],
      bl: ["L' U2 L2 U L2 U L"],
      br: ["{U} R' U2 R U' <f R f'>"],
    },
    image: require("./../assets/f2l/F2L 12.svg").default,
  },
  {
    name: "F2L 13",
    subset: "Connected Pairs",
    setup: "r U2' R' U R U' R' U M",
    algorithm: {
      fr: ["{U} R U' R' U R U' R' <F R' F' R>"],
      fl: ["{U} L' U L U' <L' U' L>"],
      bl: ["L U' L' U2 L U' L' U <f' L f>"],
      br: ["{U} R' U R U' R' U' R"],
    },
    image: require("./../assets/f2l/F2L 13.svg").default,
  },
  {
    name: "F2L 14",
    subset: "Connected Pairs",
    setup: "R U' R' U' R U R' U",
    algorithm: {
      fr: ["{U'} R U' R' U R U R'"],
      fl: ["{U'} L' U L U' L' U L <F' L F L'>"],
      bl: ["{U'} L U' L' U L U L'"],
      br: ["R' U R U2 R' U R U' f R' f'"],
    },
    image: require("./../assets/f2l/F2L 14.svg").default,
  },
  {
    name: "F2L 15",
    subset: "Connected Pairs",
    setup: "R U R' U' R U R' U2' R U' R'",
    algorithm: {
      fr: ["R' D' R U' R' D R U R U' R'"],
      fl: ["F U2 R U R' U F'"],
      bl: ["L U L' U2 L U' L' U <L U' L'>"],
      br: ["R' U R U2 f R f'"],
    },
    image: require("./../assets/f2l/F2L 15.svg").default,
  },
  {
    name: "F2L 16",
    subset: "Connected Pairs",
    setup: "F' U F U2' R U R'",
    algorithm: {
      fr: ["F' U2 L' U' L U' F", "{U} F U R U' R' F' R U R'"],
      fl: ["F U' R U' R' U2 F'", "L D L' U L D' L' U' <L' U L>"],
      bl: ["L U' L' U2 f' L' f"],
      br: ["R' U' R U2 R' U R U' R' U R"],
    },
    image: require("./../assets/f2l/F2L 16.svg").default,
  },
  {
    name: "F2L 17",
    subset: "Connected Pairs",
    setup: "R U' R' U R U2' R'",
    algorithm: {
      fr: ["R U2 R' U' R U R'"],
      fl: ["L F' L' F L' U L U' <L' U L>"],
      bl: ["L U2 L' U' L U L'"],
      br: ["R' U2 F R U R' U' F' R"],
    },
    image: require("./../assets/f2l/F2L 17.svg").default,
  },
  {
    name: "F2L 18",
    subset: "Connected Pairs",
    setup: "R U R' U' R U R' F R' F' R",
    algorithm: {
      fr: ["R' F R F' R U' R' U R U' R'"],
      fl: ["L' U2 L U L' U' L"],
      bl: ["L U2 F' L' U' L U F L'"],
      br: ["R' U2 R U R' U' R"],
    },
    image: require("./../assets/f2l/F2L 18.svg").default,
  },
  {
    name: "F2L 19",
    subset: "Disconnected Pairs",
    setup: "R U R' U' R U2' R' U'",
    algorithm: {
      fr: ["{U} R U2 R' U R U' R'"],
      fl: ["{U} L' U L2 F' L' F <L' U L>"],
      bl: ["{U} L U2 L' U <L U' L'>"],
      br: ["{U} R' F' U2 F R U R' U' R"],
    },
    image: require("./../assets/f2l/F2L 19.svg").default,
  },
  {
    name: "F2L 20",
    subset: "Disconnected Pairs",
    setup: "R U R' F R' F' R2' U R' U",
    algorithm: {
      fr: ["{U'} R U' R2 F R F' R U' R'"],
      fl: ["{U'} L' U2 L U' <L' U L>"],
      bl: ["{U'} L F U2 F' L' U' L U L'"],
      br: ["{U'} R' U2 R U' R' U R"],
    },
    image: require("./../assets/f2l/F2L 20.svg").default,
  },
  {
    name: "F2L 21",
    subset: "Disconnected Pairs",
    setup: "R U' R' U2' R U R'",
    algorithm: {
      fr: ["R U' R' U2 R U R'", "R B U2 B' R'"],
      fl: ["F R U2 R' F'", "l' U l U2 l' U' l"],
      bl: ["L U' L' U2 L U L'", "r U B2 U' r'"],
      br: ["r' U r U2 r' U' r", "f U R2 U' f'"],
    },
    image: require("./../assets/f2l/F2L 21.svg").default,
  },
  {
    name: "F2L 22",
    subset: "Disconnected Pairs",
    setup: "F' L' U2' L F",
    algorithm: {
      fr: ["F' L' U2 L F", "r U' r' U2 r U r'"],
      fl: ["L' U L U2 L' U' L", "r' U' F2 U r"],
      bl: ["l U' l' U2 l U l'", "f' U' L2 U f"],
      br: ["R' U R U2 R' U' R", "R' F' U2 F R"],
    },
    image: require("./../assets/f2l/F2L 22.svg").default,
  },
  {
    name: "F2L 23",
    subset: "Connected Pairs",
    setup: "R U' R' U R U' R' U2' R U' R'",
    algorithm: {
      fr: ["R U' R2 D' R U2 R' D R", "{U} F R' F' R U R U R'"],
      fl: ["{U} L' U' L2 F' L' F <L' U L>", "F U' R U R' U R U2 R' F'"],
      bl: ["L' U' L U' L' U2 L2 U2 L'"],
      br: ["{U2} l' U' L U' L' U2 B' l2'"],
    },
    image: require("./../assets/f2l/F2L 23.svg").default,
  },
  {
    name: "F2L 24",
    subset: "Connected Pairs",
    setup: "R U R' F R U R' U' F'",
    algorithm: {
      fr: ["{U'} R U R2 F R F' <R U' R'>", "F U R U' R' F' <R U' R'>"],
      fl: ["{U'} F' r U r' U' <L' U' L>", "{U'} L' U L U L' U L U' <L' U L>"],
      bl: ["{U2} r U R' U R U2 B r'"],
      br: ["R U R' U R U2 R2 U2 R", "R' U' R' F R F' U2 R"],
    },
    image: require("./../assets/f2l/F2L 24.svg").default,
  },
  {
    name: "F2L 25",
    subset: "Corner In Slot",
    setup: "F' R U R' U' R' F R",
    algorithm: {
      fr: ["{U'} F' R U R' U' R' F R"],
      fl: ["{U'} L' U L F' r U r'"],
      bl: ["L U' L' U' L U' L' U L U L'"],
      br: ["{U'} R' U R U f R' f'"],
    },
    image: require("./../assets/f2l/F2L 25.svg").default,
  },
  {
    name: "F2L 26",
    subset: "Corner In Slot",
    setup: "F' U' F U R U R' U'",
    algorithm: {
      fr: ["{U} R U' R' F R' F' R"],
      fl: ["r U r' U' r' F r F'"],
      bl: ["{U} L U' L' U' f' L f"],
      br: ["R' U R U R' U R U' R' U' R"],
    },
    image: require("./../assets/f2l/F2L 26.svg").default,
  },
  {
    name: "F2L 27",
    subset: "Corner In Slot",
    setup: "R U R' U' R U R'",
    algorithm: {
      fr: ["R U' R' U <R U' R'>"],
      fl: ["L' U' L U <F' r U r'>"],
      bl: ["L U' L' U <L U' L'>"],
      br: ["R' U2 R' F R F' R"],
    },
    image: require("./../assets/f2l/F2L 27.svg").default,
  },
  {
    name: "F2L 28",
    subset: "Corner In Slot",
    setup: "R' F R F' U R U' R'",
    algorithm: {
      fr: ["R U R' U' <F R' F' R>"],
      fl: ["L' U L U' <L' U L>"],
      bl: ["L U2 L F' L' F L'"],
      br: ["R' U R U' <R' U R>"],
    },
    image: require("./../assets/f2l/F2L 28.svg").default,
  },
  {
    name: "F2L 29",
    subset: "Corner In Slot",
    setup: "F R' F' R F R' F' R",
    algorithm: {
      fr: ["R' F R F' U <R U' R'>"],
      fl: ["L' U' L U <L' U' L>"],
      bl: ["{U2} L U' L' <f' L' f>"],
      br: ["R' U' R U <R' U' R>"],
    },
    image: require("./../assets/f2l/F2L 29.svg").default,
  },
  {
    name: "F2L 30",
    subset: "Corner In Slot",
    setup: "R U' R' U R U' R'",
    algorithm: {
      fr: ["R U R' U' <R U R'>"],
      fl: ["L F' L' F U' <L' U L>"],
      bl: ["L U L' U' <L U L'>"],
      br: ["{U2} R' U R <f R f'>"],
    },
    image: require("./../assets/f2l/F2L 30.svg").default,
  },
  {
    name: "F2L 31",
    subset: "Edge In Slot",
    setup: "R U R' F R' F' R U",
    algorithm: {
      fr: ["{U'} R' F R F' <R U' R'>"],
      fl: ["{U} L F' L' F <L' U L>"],
      bl: ["L U' L' U <f' L f>"],
      br: ["R' U R U' <f R' f'>"],
    },
    image: require("./../assets/f2l/F2L 31.svg").default,
  },
  {
    name: "F2L 32",
    subset: "Edge In Slot",
    setup: "R U' R' U R U' R' U R U' R'",
    algorithm: {
      fr: ["{U} R U' R' U R U' R' U <R U' R'>"],
      fl: ["{U'} L' U L U' L' U L U' <L' U L>"],
      bl: ["L U L' U' L U L' U' <L U L'>"],
      br: ["R' U' R U R' U' R U <R' U' R>"],
    },
    image: require("./../assets/f2l/F2L 32.svg").default,
  },
  {
    name: "F2L 33",
    subset: "Edge In Slot",
    setup: "R U R' U2' R U R' U",
    algorithm: {
      fr: ["{U'} R U' R' U2 <R U' R'>"],
      fl: ["{U'} L' U' L U2 <L' U' L>"],
      bl: ["{U'} L U' L' U' <L U2 L'>"],
      br: ["{U'} R' U' R U2 <R' U' R>"],
    },
    image: require("./../assets/f2l/F2L 33.svg").default,
  },
  {
    name: "F2L 34",
    subset: "Edge In Slot",
    setup: "R U' R' U2' R U' R' U'",
    algorithm: {
      fr: ["{U} R U R' U2 <R U R'>"],
      fl: ["{U} L' U L U2 <L' U L>"],
      bl: ["{U} L U L' U2 <L U L'>"],
      br: ["{U} R' U R U <R' U2 R>"],
    },
    image: require("./../assets/f2l/F2L 34.svg").default,
  },
  {
    name: "F2L 35",
    subset: "Edge In Slot",
    setup: "F' U F U' R U' R' U",
    algorithm: {
      fr: ["{U2} R U R' <F R' F' R>"],
      fl: ["{U2} L F' L' F U2 <L' U' L>"],
      bl: ["{U'} L U L' U <f' L' f>"],
      br: ["{U'} f R f' U <R' U' R>"],
    },
    image: require("./../assets/f2l/F2L 35.svg").default,
  },
  {
    name: "F2L 36",
    subset: "Edge In Slot",
    setup: "R U' R' U2' F R' F' R U2'",
    algorithm: {
      fr: ["{U2} R' F R F' U2 <R U R'>"],
      fl: ["{U2} L' U' L <F' L F L'>"],
      bl: ["{U} f' L' f U' <L U L'>"],
      br: ["{U} R' U' R U' <f R f'>"],
    },
    image: require("./../assets/f2l/F2L 36.svg").default,
  },
  {
    name: "F2L 37",
    subset: "Pieces In Slot",
    setup: "R U' R U2' F R2' F' U2' R2'",
    algorithm: {
      fr: ["R' F R F' R' U2 R2 U R2 U R"],
      fl: ["L F' L' F L U2 L2 U' L2 U' L'"],
      bl: ["L U' L' l' U2 L2 U L2 U l"],
      br: ["R' U R r U2 R2 U' R2 U' r'"],
    },
    image: require("./../assets/f2l/F2L 37.svg").default,
  },
  {
    name: "F2L 38",
    subset: "Pieces In Slot",
    setup: "R U' R' U R U2' R' U R U' R'",
    algorithm: {
      fr: ["R U' R' U' R U R' U2 <R U' R'>"],
      fl: ["L' U L U' L' U2 L U' <L' U L>"],
      bl: ["L U' L' U' L U L' U' <L U2 L'>"],
      br: ["R' U' R U2 R' U R U' <R' U' R>"],
    },
    image: require("./../assets/f2l/F2L 38.svg").default,
  },
  {
    name: "F2L 39",
    subset: "Pieces In Slot",
    setup: "R U' R' U' R U R' U2' R U' R'",
    algorithm: {
      fr: ["R U' R' U R U2 R' U <R U' R'>"],
      fl: ["L' U L U L' U' L U2 <L' U L>"],
      bl: ["L U L' U2 L U' L' U <L U L'>"],
      br: ["R' U R U R' U' R U <R' U2 R>"],
    },
    image: require("./../assets/f2l/F2L 39.svg").default,
  },
  {
    name: "F2L 40",
    subset: "Pieces In Slot",
    setup: "R U R' F U R U' R' F' R U R'",
    algorithm: {
      fr: ["r U' r' U2 r U r' <R U R'>"],
      fl: ["L' U L R' F R U2 R' F' R"],
      bl: ["l U' l' U2 l U l' <L U L'>"],
      br: ["R' U R r' U r U2 r' U' r"],
    },
    image: require("./../assets/f2l/F2L 40.svg").default,
  },
  {
    name: "F2L 41",
    subset: "Pieces In Slot",
    setup: "R F U R U' R' F' U' R'",
    algorithm: {
      fr: ["R U' R' r U' r' U2 r U r'"],
      fl: ["R' F R U2 R' F' R <L' U' L>"],
      bl: ["L U' L' l U' l' U2 l U l'"],
      br: ["r' U r U2 r' U' r <R' U' R>"],
    },
    image: require("./../assets/f2l/F2L 41.svg").default,
  },
];

export { f2l };
