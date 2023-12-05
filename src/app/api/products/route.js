import { NextResponse } from "next/server";

// const products = {
//   data: [
//     {
//       id: 1,
//       name: "Product 1",
//       price: 19.99,
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vestibulum in odio eu elit fermentum consequat.",
//       category: "mugs",
//       brand: "brand 1",
//       tags: ["tag 1", "tag 2", "tag 3"],
//     },
//     {
//       id: 2,
//       name: "Product 2",
//       price: 29.99,
//       description:
//         "Sed ullamcorper libero sed cursus ultrices. Proin ut tortor nec dui cursus cursus. Nunc lacinia ullamcorper sapien, at rhoncus elit ultricies id.",
//       category: "mugs",
//       brand: "brand 2",
//       tags: ["tag 1", "tag 2", "tag 3"],
//     },
//     {
//       id: 3,
//       name: "Product 3",
//       price: 39.99,
//       description:
//         "Vivamus nec enim non augue dignissim fermentum. Fusce bibendum mi vel velit aliquet, id ultrices nisl tincidunt.",
//       category: "mugs",
//       brand: "brand 3",
//       tags: ["tag 1", "tag 5", "tag 4"],
//     },
//     {
//       id: 4,
//       name: "Product 4",
//       price: 49.99,
//       description:
//         "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
//       category: "mugs",
//       brand: "brand 4",
//       tags: ["tag 2", "tag 5", "tag 3"],
//     },

//     {
//       id: 5,
//       name: "Product 5",
//       price: 59.99,
//       description:
//         "Integer sit amet urna at nulla tincidunt volutpat. Quisque tincidunt turpis vitae ligula bibendum, at volutpat ante aliquet.",
//       category: "mugs",
//       brand: "brand 1",
//       tags: ["tag 1", "tag 4", "tag 3"],
//     },
//     {
//       id: 6,
//       name: "Product 1",
//       price: 19.99,
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vestibulum in odio eu elit fermentum consequat.",
//       category: "shirts",
//       brand: "brand 2",
//       tags: ["tag 1", "tag 2", "tag 3"],
//     },
//     {
//       id: 7,
//       name: "Product 2",
//       price: 29.99,
//       description:
//         "Sed ullamcorper libero sed cursus ultrices. Proin ut tortor nec dui cursus cursus. Nunc lacinia ullamcorper sapien, at rhoncus elit ultricies id.",
//       category: "shirts",
//       brand: "brand 3",
//       tags: ["tag 1", "tag 2", "tag 3"],
//     },
//     {
//       id: 8,
//       name: "Product 3",
//       price: 39.99,
//       description:
//         "Vivamus nec enim non augue dignissim fermentum. Fusce bibendum mi vel velit aliquet, id ultrices nisl tincidunt.",
//       category: "shirts",
//       brand: "brand 4",
//       tags: ["tag 1", "tag 5", "tag 4"],
//     },
//     {
//       id: 9,
//       name: "Product 4",
//       price: 49.99,
//       description:
//         "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
//       category: "shirts",
//       brand: "brand 1",
//       tags: ["tag 2", "tag 5", "tag 3"],
//     },
//     {
//       id: 10,
//       name: "Product 5",
//       price: 59.99,
//       description:
//         "Integer sit amet urna at nulla tincidunt volutpat. Quisque tincidunt turpis vitae ligula bibendum, at volutpat ante aliquet.",
//       category: "shirts",
//       brand: "brand 2",
//       tags: ["tag 1", "tag 4", "tag 3"],
//     },
//   ],
// };

const products = {
  data: [
    ...Array(400)
      .fill()
      .map((_, index) => {
        const randomDate = new Date(
          Date.now() - Math.floor(Math.random() * 30 * 24 * 60 * 60 * 1000)
        );

        return {
          id: 11 + index,
          name: `Mug ${index + 1}`,
          price: (index + 1) * 5,
          description: `Description for Mug ${index + 1}`,
          category: "mugs",
          brand: `Brand ${(index % 4) + 1}`,
          tags: `Tag ${(index % 5) + 1}`,
          date: randomDate.toISOString(), // Convert the date to a string
        };
      }),
    ...Array(400)
      .fill()
      .map((_, index) => {
        const randomDate = new Date(
          Date.now() - Math.floor(Math.random() * 30 * 24 * 60 * 60 * 1000)
        );

        return {
          id: 31 + index,
          name: `Shirt ${index + 1}`,
          price: (index + 1) * 9,
          description: `Description for Shirt ${index + 1}`,
          category: "shirts",
          brand: `Brand ${(index % 4) + 1}`,
          tags: `Tag ${(index % 5) + 1}`,
          date: randomDate.toISOString(), // Convert the date to a string
        };
      }),
  ],
};

export async function GET() {
  return NextResponse.json(products);
}
