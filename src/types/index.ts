import { ReactNode } from "react";

export type SectionType = "about" | "experience" | "skills" | "education" | "contact";

export interface Skill {
  name: string;
  level: number;
}

export interface Experience {
  title: string;
  role: string;
  period: string;
  location: string;
  description: string;
  icon: ReactNode;
  iconBg: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  location: string;
}

import React from "react";
import { Award, BookOpen, Cpu, Server } from "lucide-react";

export const CONTACT_INFO: ContactInfo = {
  email: "renan.s.frr@gmail.com",
  phone: "+55 (48) 99672-9400",
  linkedin: "https://www.linkedin.com/in/renansfrr/",
  location: "Curitiba, Paraná, Brazil"
};

export const PROGRAMMING_SKILLS: Skill[] = [
  { name: "C/C++", level: 90 },
  { name: "Python", level: 85 },
  { name: "JavaScript", level: 75 },
  { name: "HTML/CSS", level: 80 },
  { name: "SQL", level: 70 }
];

export const HARDWARE_SKILLS: Skill[] = [
  { name: "Arduino", level: 95 },
  { name: "ESP8266", level: 90 },
  { name: "Raspberry Pi", level: 80 },
  { name: "RFID Technology", level: 85 },
  { name: "IoT Systems", level: 75 }
];

export const EXPERIENCES: Experience[] = [
  {
    title: "Cargon",
    role: "Intern",
    period: "Jan 2021",
    location: "Curitiba, PR",
    description:
      "Worked as an intern at Cargon, gaining practical experience in software development.",
    icon: React.createElement(Server, { className: "text-blue-600" }),
    iconBg: "bg-blue-100"
  },
  {
    title: "Plus Energy",
    role: "Developer and Social Media Manager",
    period: "Jul 2020 – Present",
    location: "Araranguá, SC",
    description:
      "Responsible for establishing communication between wind towers and their control centers, developing web interfaces for data control and analysis, and managing the project's social media presence.",
    icon: React.createElement(Award, { className: "text-green-600" }),
    iconBg: "bg-green-100"
  },
  {
    title: "Quantum Team",
    role: "Microprocessor Programmer",
    period: "Jul 2019 – Present",
    location: "Araranguá, SC",
    description:
      "Program and develop robots using Arduino, ESP8266, and other microprocessors for regional and national robotics competitions as part of the Quantum Team.",
    icon: React.createElement(Cpu, { className: "text-purple-600" }),
    iconBg: "bg-purple-100"
  },
  {
    title: "Automation and Mobile Robotics Lab",
    role: "Researcher",
    period: "Apr 2018 – Dec 2018",
    location: "Araranguá, SC",
    description:
      "Utilized ESP8266 microprocessors and RFID technology to develop an automated attendance system for students and campus employees.",
    icon: React.createElement(BookOpen, { className: "text-yellow-600" }),
    iconBg: "bg-yellow-100"
  }
];

export const WEB_TECHNOLOGIES = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Node.js",
  "REST APIs",
  "MongoDB",
  "SQL"
];

export const IOT_TECHNOLOGIES = [
  "Circuit Design",
  "Sensors",
  "Actuators",
  "MQTT",
  "Embedded C",
  "PlatformIO",
  "I2C",
  "SPI"
];

export const PROJECT_TOOLS = [
  "Git",
  "JIRA",
  "Agile",
  "Scrum",
  "VS Code",
  "Linux",
  "Docker",
  "CI/CD"
];

export const EXPERTISE_AREAS = [
  "Arduino",
  "ESP8266",
  "Raspberry Pi",
  "Python",
  "C/C++",
  "Web Development",
  "IoT",
  "RFID Technology",
  "Robotics"
];

export const COURSEWORK = [
  "Computer Architecture",
  "Algorithms and Data Structures",
  "Embedded Systems",
  "Database Systems",
  "Web Development",
  "IoT Technologies",
  "Digital Signal Processing",
  "Operating Systems"
];