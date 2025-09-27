export const siteConfig = {
  name: "Immanuel Bintang Putra Widianto",
  title: "System Administrator | Exploring DevOps & Cloud",
  description: "Portfolio website of Immanuel Bintang",
  accentColor: "#1d4ed8",
  profileImage: "https://avatars.githubusercontent.com/u/106735816?v=4",
  social: {
    email: "mail@immanuelbint.com",
    linkedin: "https://linkedin.com/in/immanuelbint",
    github: "https://github.com/immanuelbint",
  },
  aboutMe: [
    "Hi, I’m a System Administrator with 3 years of experience in automation, monitoring, and support.",
    "My work has focused on automating infrastructure, providing tier 2 support, maintaining system documentation and setting up monitoring solutions to improve system stability.",
    "I enjoy working with teams to build systems that are faster, more reliable, and easier to scale. Recently, I’ve been diving deeper into DevOps practices and AWS cloud services, aiming to grow into cloud engineering roles."
  ],
  skills: [
    "Linux",
    "Bash",
    "AWS",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Ansible",
    "Prometheus & Grafana",
    "Networking & Security",
  ],
  projects: [
    {
      name: "AWS Labs",
      description:
        "A collection of hands-on AWS labs and mini-projects documenting my journey in cloud engineering. Focused on learning AWS services, scripting, monitoring, and automation while building a foundation in DevOps practices.",
      link: "https://github.com/immanuelbint/aws-cloud-labs",
      skills: ["AWS", "CloudWatch", "IAM", "EC2", "S3", "VPC"],
      status: "done",
    },
    {
      name: "IaC Labs",
      description:
        "A set of Infrastructure as Code labs and experiments to explore automation, Terraform, and CloudFormation. Designed to strengthen IaC fundamentals and apply best practices in managing infrastructure.",
      link: "https://github.com/immanuelbint/iac-labs",
      skills: ["Automation", "IaC", "Terraform", "CloudFormation"],
      status: "done",
    },
    {
      name: "Terraform Tier-3 Web Deployment",
      description:
        "Work-in-progress deployment of a 3-tier web application (frontend, backend, database) on AWS. Built with Terraform modules, following cloud architecture best practices.",
      skills: ["Terraform", "AWS", "IaC", "Cloud Architecture"],
      status: "wip",
    },
  ],
  experience: [
    {
      company: "PT Labs Digital & Elektronik Teknologi",
      title: "System Administrator",
      dateRange: "Jun 2022 - Present",
      bullets: [
        "Automated infrastructure provisioning with Terraform and configuration workflows with Ansible, leading to faster and more consistent deployments.",
        "Built and tested GitLab CI/CD pipelines in staging and personal projects, collaborating with DevOps engineers for production exposure.",
        "Implemented monitoring and alerting with Prometheus, Grafana, and Uptime Kuma, improving reliability and response times.",
        "Administered Linux (RHEL/Debian) and Windows servers in a hybrid environment.",
        "Supported and maintained a Hadoop-based data platform for real-time and batch workflows.",
        "Secured systems through regular patching, audits, and compliance checks.",
        "Handled backup and recovery operations and contributed to disaster recovery planning for critical systems.",
        "Provided Tier 2/3 support and maintained system documentation and knowledge bases.",
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
