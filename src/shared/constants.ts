import biscuitsToast300 from "../images/biscuits-toast-300w.jpeg";
import biscuitsToast from "../images/biscuits-toast.jpeg";
import cake300 from "../images/cake-300w.jpeg";
import cake from "../images/cake.jpeg";
import others300 from "../images/others-300w.jpeg";
import others from "../images/others.jpeg";
import pastryCupPastryTart300 from "../images/pastry-cup-pastry-tart-300w.jpeg";
import pastryCupPastryTart from "../images/pastry-cup-pastry-tart.jpeg";
import sweets300 from "../images/sweets-300w.jpeg";
import sweets from "../images/sweets.jpeg";

export const CATEGORIES = [
  {
    name: "Pastry, Cup Pastry & Tart",
    slug: "pastry-cup-pastry-tart",
    src: pastryCupPastryTart,
    srcSet: `${pastryCupPastryTart300} 300w, ${pastryCupPastryTart} 1200w`,
  },
  {
    name: "Cake",
    slug: "cake",
    src: cake,
    srcSet: `${cake300} 300w, ${cake} 1200w`,
  },
  {
    name: "Sweets",
    slug: "sweets",
    src: sweets,
    srcSet: `${sweets300} 300w, ${sweets} 1200w`,
  },
  {
    name: "Biscuits & Toast",
    slug: "biscuits-toast",
    src: biscuitsToast,
    srcSet: `${biscuitsToast300} 300w, ${biscuitsToast} 1200w`,
  },
  {
    name: "Others",
    slug: "others",
    src: others,
    srcSet: `${others300} 300w, ${others} 1200w`,
  },
];
