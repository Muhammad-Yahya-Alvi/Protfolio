const config = {
  title: "Muhammad Yahya Alvi | Software Engineer",
  description: {
    long: "Explore Muhammad Yahya Alvi's portfolio: a Software Engineering student building Java, MySQL, TypeScript, and AI-focused projects with a practical, maintainable approach.",
    short:
      "Muhammad Yahya Alvi is a Software Engineering student building practical software systems and developer tools.",
  },
  keywords: [
    "Muhammad Yahya Alvi",
    "Software Engineering student",
    "Java developer",
    "MySQL",
    "TypeScript",
    "YAX-AI",
    "ERP Bridge",
    "portfolio",
  ],
  author: "Muhammad Yahya Alvi",
  email: "yahyaalvi727@gmail.com",
  site: "http://localhost:3000",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/muhammad-yahya-alvi-35a893433/",
    instagram: "https://www.instagram.com/its.yahya_alvi/",
    github: "https://github.com/Muhammad-Yahya-Alvi",
  },
};
export { config };
