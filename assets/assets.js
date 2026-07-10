import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import AWS from "./AWS.png";
import argoCD from "./Argo CD.png";
import bash from "./Bash.png";
import docker from "./Docker.png";
import githubActions from "./GitHub Actions.png";
import googleCloud from "./Google Cloud.png";
import grafana from "./Grafana.png";
import terraform from "./HashiCorp Terraform.png";
import jenkins from "./Jenkins.png";
import kibana from "./Kibana.png";
import kubernetes from "./kubernetes.png";
import linux from "./Linux.png";
import prometheus from "./Prometheus.png";
import python from "./python.png";
import full_arc_cat_agency from "./Full_architecture.png";
import MyPic from "./mypic.jpeg";
import linkedin_icon from "./linkedin.png";
import github_icon from "./github.png";
import javaScript from "./javascript.png";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  AWS,
  argoCD,
  bash,
  docker,
  githubActions,
  googleCloud,
  grafana,
  terraform,
  jenkins,
  kibana,
  kubernetes,
  linux,
  prometheus,
  python,
  full_arc_cat_agency,
  MyPic,
  linkedin_icon,
  github_icon,
  javaScript,
};

export const workData = [
  {
    title: "Leaderteam - NDT company website ",
    description:
      "A modern, responsive website for Leaderteam, showcasing their services and solutions with multiple language support.",    bgImage: "/leaderteam-images/1bg.jpeg",
    techTags: ["React", "Vite", "JavaScript", "Tailwind CSS"],
    slug: "leaderteam",
    link: "https://lt-site-seven.vercel.app",
  },
  {
    title: "Cloud-Native DevOps Platform",
    description:
      "End-to-end cloud-native multirepo platform featuring Terraform-provisioned infrastructure on AWS & GCP, Kubernetes orchestration, CI/CD pipelines with GitHub Actions & ArgoCD, and full observability with Prometheus, Grafana, and ELK stack.",
    bgImage: "/Full_architecture.png",
    techTags: ["Kubernetes", "Docker", "Terraform", "AWS", "GCP", "ArgoCD", "GitHub Actions", "Prometheus", "Grafana"],
    slug: "cat-agency",
    github: "https://github.com/dori654/Cat-Agency-App",
  },
  {
    title: "AI Drone Surveillance",
    description:
      "Drone surveillance system designed to revolutionize the way we approach security and monitoring tasks.",    bgImage: "/zeusvision-images/zeusvision.jpg",
    techTags: ["Python", "Django", "Real Time", "Object Detection", "DJI MSDK"],
    slug: "zeusvision",
    link: "https://youtu.be/hUxDe4Vgb9U?si=E2dynK2b8nZNKavK",
    github: "https://github.com/dori654/ZeusVision",
  },
  {
    title: "Movihoot - Movie Recommendation Engine",
    description:
      "A Kahoot-style group movie selection app where friends join a session, vote on AI-curated movie suggestions in real time, and finally agree on what to watch. Built with NestJS, React, Socket.io, Firebase, and the Claude API.",    bgImage: "/movihoot-images/host-1.jpeg",
    techTags: ["React", "NestJS", "Firebase", "Socket.io", "Claude API", "TMDB API", "Docker", "GitHub Actions"],
    slug: "movihoot",
    github: "https://github.com/dori654/Movihoot",
  },
  {
    title: "Coming Soon",
    description:
      "A new project is in the works. Stay tuned!",
    bgImage: "",
    techTags: [],
    placeholder: true,
  },
];

export const projectDetails = {
  "cat-agency": {
    title: "Cloud-Native DevOps Platform",
    subtitle: "End-to-end cloud-native system built with production-grade DevOps practices",
    techTags: ["Kubernetes", "Docker", "Terraform", "AWS", "GCP", "ArgoCD", "GitHub Actions", "Prometheus", "Grafana", "ELK Stack", "Jenkins"],
    overview:
      "A comprehensive cloud-native platform designed and operated as a production-like DevOps environment. The project covers the full lifecycle — from application development and infrastructure provisioning to automated deployments and real-time monitoring.",
    sections: [
      {
        title: "Architecture Overview",
        description:
          "The platform follows a microservices architecture deployed on Kubernetes clusters across AWS and GCP. The system includes containerized application services, a GitOps-based delivery pipeline, infrastructure as code, and a full observability stack.",
        image: "/Full_architecture.png",
      },
      {
        title: "Infrastructure as Code (AWS & GCP)",
        description:
          "Provisioned multi-cloud infrastructure using Terraform, including VPCs, subnets, security groups, IAM roles, compute instances, and managed Kubernetes clusters (EKS & GKE). Modular Terraform configurations enable repeatable, version-controlled infrastructure deployments.",
        image: "/HashiCorp_Terraform.png",
      },
      {
        title: "CI/CD & GitOps",
        description:
          "Designed CI/CD pipelines using GitHub Actions for build and test automation, and ArgoCD for GitOps-based continuous delivery to Kubernetes. The pipeline automates Docker image builds, vulnerability scanning, and rolling deployments with zero-downtime strategies.",
        image: "/k8s2.png",
      },
      {
        title: "Monitoring & Observability",
        description:
          "Implemented a full observability stack with Prometheus for metrics collection, Grafana for dashboards and alerting, and the ELK stack (Elasticsearch, Logstash, Kibana) for centralized logging. Custom dashboards provide real-time visibility into cluster health, application performance, and resource utilization.",
        image: "/work-monitoring.png",
      },
    ],
  },

  "zeusvision": {
    title: "AI Drone Surveillance",
    subtitle: "Drone surveillance system designed to revolutionize security and monitoring tasks",
    techTags: ["Python", "Django", "Real Time", "Object Detection", "DJI MSDK"],
    overview:
      "ZeusVision is an AI-powered drone surveillance system that leverages real-time object detection and tracking to enhance security operations. The system integrates with DJI drones and provides a web-based interface for monitoring and controlling drone flights.",
    sections: [
      {
        title: "Real-Time Object Detection",
        description:
          "The system uses a deep learning model for real-time object detection, allowing drones to identify and track objects of interest during flight. The model is optimized for performance on edge devices, ensuring low latency and high accuracy.",
        image: "/zeusvision-images/zeusvision.jpg",
      },
      {
        title: "Web-Based Control Interface",
        description:
          "A Django-based web application provides a user-friendly interface for controlling drone operations, viewing live video feeds, and accessing detected object data. The interface supports multiple users and role-based access control.",
        image: "/zeusvision-images/web-interface.png",
      },
      {
        image: "/zeusvision-images/uidashborad.png",
      },
    ],
  },
  "movihoot": {
  title: "Movihoot - Group Movie Night Decider",
  subtitle: "Real-time multiplayer app that helps friend groups agree on what to watch",
  techTags: ["React", "NestJS", "Firebase", "Socket.io", "Claude API", "TMDB API", "Docker", "GitHub Actions"],
  overview:
    "Movihoot is a Kahoot-style group movie selection app where a host creates a session, friends join via code, and everyone votes on movies in real time. Claude AI powers smart movie recommendations based on group preferences, while TMDB provides rich movie metadata.",
  sections: [
    {
      title: "How It Works",
      description:
        "A host creates a room and shares a join code. Participants answer a short preference questionnaire, and Claude generates a tailored movie shortlist for the group. Players then vote in real-time Kahoot-style rounds until a winner is chosen — making movie night decisions fun instead of painful.",
      image: "/movihoot-images/host-1.jpeg",
    },
    {
      title: "Real-Time Architecture",
      description:
        "Built on NestJS with Socket.io for bidirectional real-time communication between all session participants. Firebase handles session state persistence, ensuring players can rejoin seamlessly and the host maintains full control over the game flow.",
      image: "/movihoot-images/parti-join.jpeg",
    },
    {
      title: "AI-Powered Recommendations",
      description:
        "Claude API analyzes the group's collective preferences — genres, moods, languages, and viewing history — to generate a curated shortlist from the TMDB catalog. The recommendations balance individual tastes with group overlap, surfacing movies everyone is likely to enjoy.",
      image: "/movihoot-images/results.jpeg",
    },
    {
      title: "CI/CD Pipeline",
      description:
        "GitHub Actions handles automated builds and Docker image publishing on every push to main. The containerized NestJS backend and React frontend are independently deployable, with environment-specific configs managed via Docker Compose.",
    },
  ],
},
leaderteam:{
    title: "Leaderteam - NDT company website",
    subtitle: "A modern, responsive website for Leaderteam showcasing their services and solutions",
    techTags: ["React", "Vite", "JavaScript", "Tailwind CSS"],
    overview:
      "A sleek, responsive website built for Leaderteam, a company specializing in Non-Destructive Testing (NDT) services. The site features multiple language support, service showcases, and a contact form for inquiries.",
    sections: [
      {
        title: "Responsive Design",
        description:
          "The website is built with a mobile-first approach using Tailwind CSS, ensuring optimal viewing across devices. The layout adapts seamlessly from desktop to tablet to mobile, providing a consistent user experience.",
        image: "/leaderteam-images/1bg.jpeg",
      },
      {
        title: "Multi-Language Support",
        description:
          "Implemented internationalization (i18n) to support multiple languages, allowing users to switch between English and Hebrew. This enhances accessibility for a global audience.",
          image: "/leaderteam-images/2bg.jpeg",
      },
    ],
},
};

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Full-Stack Development",
    description:
      "Building modern web applications with React, Next.js, and Node.js. From responsive frontends to scalable backend APIs and database design.",
  },
  {
    icon: assets.googleCloud,
    title: "Cloud & Infrastructure",
    description:
      "Designing and provisioning cloud infrastructure on AWS and GCP using Terraform, including networking, compute, IAM, and managed Kubernetes services.",
  },
  {
    icon: assets.kubernetes,
    title: "DevOps & CI/CD",
    description:
      "Containerizing applications with Docker, orchestrating with Kubernetes, and automating deployments through GitHub Actions, Jenkins, and ArgoCD pipelines.",
  },
  {
    icon: assets.grafana,
    title: "System Design & Monitoring",
    description:
      "Architecting scalable systems with observability built-in using Prometheus, Grafana, and ELK stack for reliability and performance insights.",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "JavaScript, TypeScript, Python, Bash, SQL",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Cloud & DevOps",
    description: "AWS, GCP, Kubernetes, Docker, Terraform",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Frameworks & Tools",
    description: "React, Next.js, Node.js, Git, Linux",
  },
];

export const toolsData = [
  { icon: assets.vscode, name: "VS Code" },
  { icon: assets.python, name: "Python" },
  { icon: assets.bash, name: "Bash" },
  { icon: assets.git, name: "Git" },
  { icon: assets.linux, name: "Linux" },
  { icon: assets.AWS, name: "AWS" },
  { icon: assets.googleCloud, name: "Google Cloud" },
  { icon: assets.jenkins, name: "Jenkins" },
  { icon: assets.githubActions, name: "GitHub Actions" },
  { icon: assets.docker, name: "Docker" },
  { icon: assets.kubernetes, name: "Kubernetes" },
  { icon: assets.terraform, name: "Terraform" },
  { icon: assets.argoCD, name: "Argo CD" },
  { icon: assets.grafana, name: "Grafana" },
  { icon: assets.prometheus, name: "Prometheus" },
  { icon: assets.kibana, name: "Kibana" },
];

export const techStackData = [
  {
    category: "Languages",
    items: [
      { icon: assets.python, name: "Python" },
      { icon: assets.bash, name: "Bash" },
      { icon: assets.javaScript, name: "JavaScript" },
      
    ],
  },
  {
    category: "DevOps & Cloud",
    items: [
      { icon: assets.docker, name: "Docker" },
      { icon: assets.kubernetes, name: "Kubernetes" },
      { icon: assets.terraform, name: "Terraform" },
      { icon: assets.AWS, name: "AWS" },
      { icon: assets.googleCloud, name: "GCP" },
      { icon: assets.jenkins, name: "Jenkins" },
      { icon: assets.githubActions, name: "GitHub Actions" },
      { icon: assets.argoCD, name: "ArgoCD" },
    ],
  },
  {
    category: "Monitoring & Tools",
    items: [
      { icon: assets.prometheus, name: "Prometheus" },
      { icon: assets.grafana, name: "Grafana" },
      { icon: assets.kibana, name: "Kibana" },
      { icon: assets.git, name: "Git" },
      { icon: assets.linux, name: "Linux" },
      { icon: assets.vscode, name: "VS Code" },
    ],
  },
];
