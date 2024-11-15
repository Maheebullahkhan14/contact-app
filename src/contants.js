// export const categories2 = ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'];


import { MdOutlineHealthAndSafety } from "react-icons/md";
import { MdSportsScore } from "react-icons/md";
import { MdOutlineScience } from "react-icons/md";
import { GiMaterialsScience } from "react-icons/gi";
import { MdBusinessCenter } from "react-icons/md";
import { RiMovie2Line } from "react-icons/ri";


export const categories = [
  { name: "Business", icon: <MdBusinessCenter /> },
  { name: "Health", icon: <MdOutlineHealthAndSafety /> },
  { name: "Entertainment", icon: <RiMovie2Line /> },
  { name: "General", icon: <MdOutlineHealthAndSafety /> },
  { name: "Sports", icon: <MdSportsScore /> },
  { name: "Science", icon: <MdOutlineScience /> },
  { name: "Technology", icon: <GiMaterialsScience /> },
];

