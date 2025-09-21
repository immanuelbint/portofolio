export const siteConfig = {
  name: "Immanuel Bintang",
  title: "System Administrator",
  description: "Portfolio website of Immanuel Bintang",
  accentColor: "#1d4ed8",
  profileImage: "/profile.jpg",
  social: {
    email: "mail@immanuelbint.com",
    linkedin: "https://linkedin.com/in/immanuelbint",
    github: "https://github.com/immanuelbint",
  },
  aboutMe:
    "My name is Immanuel, System Administrator with 3 years in tech, experienced in automation, monitoring, and support. Currently exploring DevOps and AWS to move into cloud engineering. I love working with teams and finding ways to make systems faster and more reliable.",
  skills: [
    "Linux",
    "Bash",
    "AWS (EC2, S3, IAM, VPC, CloudWatch",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Prometheus & Grafana",
    "Networking & Security",
  ],
  projects: [
    {
      name: "Personal Documentation site",
      description:
        "Developed and maintained a documentation site using VitePress and GitHub Pages to publish notes and practical guides on Linux, Ansible, and DevOps tooling, aimed at reinforcing hands-on learning.",
      link: "https://docs.immanuelbint.com",
      skills: ["VitePress", "GitHub Pages", "Linux"],
    },
    {
      name: "AWS Labs",
      description:
        "AWS overview, hands-on labs, and mini-projects aimed at building my skills in AWS and cloud engineering. The main goal of this repository is to document my hands-on learning process, keep track of scripts, configurations, and insights gained while practicing AWS services and DevOps-related tasks.",
      link: "https://github.com/immanuelbint/aws-cloud-labs",
      skills: ["AWS", "CloudWatch", "IAM", "EC2", "S3", "VPC"],
    },
    {
      name: "IaC Labs",
      description:
        "IaC overview, hands-on labs, and mini-projects aimed at continuously building my skills in Infrastructure as Code and learn the best practices.",
      link: "https://github.com/immanuelbint/iac-labs",
      skills: ["Automation", "IaC", "Terraform", "CloudFormation"],
    },
    {
      name: "Terraform Tier-3 Web Deployment",
      description:
        "Work-in-progress project to deploy a 3-tier web application (frontend, backend, database) on AWS using Terraform modules and best practices.",
      // link: "",
      skills: ["Terraform", "AWS", "Infrastructure as Code", "Cloud Architecture"],
    },
  ],
  experience: [
    {
      company: "PT Labs Digital & Elektronik Teknologi",
      title: "System Administrator",
      dateRange: "Jun 2022 - Present",
      bullets: [
        "Administer Linux (RHEL/Debian) and Windows servers in a hybrid environment.",
        "Secured systems through regular patching, audits, and compliance checks.",
        "Provided operational support for a Hadoop-based data platform, helping to maintain real-time and batch data workflows.",
        "Handled backup and recovery operations and contributed to disaster recovery planning for critical systems.",
        "Provided Tier 2/3 support and maintained system documentation and knowledge bases.",
        "Implemented monitoring and alerting solutions using Prometheus and Uptime Kuma, and visualized metrics with Grafana to ensure system reliability and performance.",
      ],
    },
  ],
  education: [
    {
      school: "Universitas Teknologi Digital Indonesia",
      degree: "Bachelor of Informatics",
      dateRange: "2023 - 2027",
      achievements: [
        "Current GPA: 3.82/4.0",
      ],
    },
  ],
  certs: [
    {
      name: "AWS Certified SysOps Administrator - Associate",
      issuer: "Amazon Web Services",
      date: "2025 - 2028",
      link: "https://www.credly.com/badges/fd6678d0-748e-4fde-9f95-fc427bba4781/public_url",
    },
  ],
};
