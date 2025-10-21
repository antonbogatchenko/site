import { Project } from "./types";

export const projects: Project[] = [
  {
    name: "Woods Photography",
    description:
      "A collection of serene photographs capturing the beauty of the woods.",
    items: [
      { src: "/projects/woods/woods_1.jpg", description: "Woods Photo 1" },
      { src: "/projects/woods/woods_2.jpg", description: "Woods Photo 2" },
      { src: "/projects/woods/woods_3.jpg", description: "Woods Photo 3" },
      { src: "/projects/woods/woods_4.jpg", description: "Woods Photo 4" },
      { src: "/projects/woods/woods_5.jpg", description: "Woods Photo 5" },
    ],
  },
  {
    name: "Cityscapes",
    description:
      "A vibrant series showcasing the dynamic energy of urban life.",
    items: [
      {
        src: "/projects/woods/woods_5.jpg",
        description: "Cityscape Photo 1",
      },
      { src: "/projects/woods/woods_1.jpg", description: "Cityscape Photo 2" },
      { src: "/projects/woods/woods_4.jpg", description: "Cityscape Photo 3" },
    ],
  },
];
