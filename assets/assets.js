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
import kubernetes from "./Kubernetes.png";
import linux from "./Linux.png";
import prometheus from "./Prometheus.png";
import python from "./python.png";
import full_arc_cat_agency from "./Full_architecture.png";
import MyPic from "./mypic.jpeg";
import linkedin_icon from "./linkedin.png";
import github_icon from "./github.png";

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
};

export const workData = [
  {
    title: "Cat Agency – Cloud-Native DevOps Project",
    description:
      "End-to-end cloud-native system including application, infrastructure as code, and GitOps-based delivery. Built and operated as a production-like DevOps environment.",
    bgImage: "/Full_architecture.png",
  },
  {
    title: "Cat Agency – Infrastructure as Code (AWS & GCP)",
    description:
      "Provisioned cloud infrastructure using Terraform, including networking, compute, IAM, and managed Kubernetes clusters.",
    bgImage: "/HashiCorp_Terraform.png",
  },
  {
    title: "Cat Agency – CI/CD & GitOps",
    description:
      "Designed CI/CD pipelines and GitOps workflows to automate build, test, and deployment processes using modern DevOps practices.",
    bgImage: "/k8s2.png",
  },
  {
    title: "Cat Agency – Monitoring & Observability",
    description:
      "Implemented monitoring and logging using Prometheus, Grafana, and centralized logging to ensure system reliability and visibility.",
    bgImage: "/work-monitoring.png",
  },
];

export const serviceData = [
  {
    icon: assets.kubernetes,
    title: "Container Orchestration",
    description:
      "Hands-on experience designing and deploying Kubernetes clusters. Built and operated containerized microservices using Docker and Kubernetes with a focus on scalability and reliability.",
    link: "",
  },
  {
    icon: assets.githubActions,
    title: "CI/CD Pipelines",
    description:
      "Designed and implemented CI/CD pipelines using GitHub Actions, Jenkins, and ArgoCD to automate build, test, and deployment workflows in project-based environments.",
    link: "",
  },
  {
    icon: assets.googleCloud,
    title: "Cloud Infrastructure & IaC",
    description:
      "Implemented cloud infrastructure on AWS and GCP using Terraform and Ansible, including networking, compute, IAM, and managed Kubernetes services.",
    link: "",
  },
  {
    icon: assets.prometheus,
    title: "Monitoring & Observability",
    description:
      "Implemented monitoring and logging solutions using Prometheus, Grafana, and ELK stack to gain system visibility and troubleshoot production-like environments.",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Core Technologies",
    description: "Kubernetes, Docker, Terraform, Python, Bash",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Cloud Platforms",
    description: "AWS, GCP - Multi-cloud expertise",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "CI/CD Tools",
    description: "Jenkins, GitHub Actions, ArgoCD",
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
