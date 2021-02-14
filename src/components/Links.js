import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/about",
    text: "about",
  },
  {
    id: 3,
    url: "/projects",
    text: "projects",
  },
  {
    id: 4,
    url: "/resume",
    text: "resume",
  },
  {
    id: 5,
    url: "/contact",
    text: "contact",
  },
];

export const social = [
  {
    id: 1,
    url: "mailto:indra_kurniawan@u.nus.edu",
    icon: <FaEnvelope />,
  },
  {
    id: 2,
    url: "https://www.linkedin.com/in/indra-kurniawan-762aa2180/",
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    url: "https://www.github.com/indra4837",
    icon: <FaGithub />,
  },
];
