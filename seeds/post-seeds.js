const { Post } = require("../models");

const postData = [
  {
    title: "The Rise of Artificial Intelligence",
    content:
      "Artificial Intelligence is transforming industries and changing the way we interact with technology. From machine learning to neural networks, the future is now.",
    user_id: 1,
  },
  {
    title: "Blockchain Technology and Its Impact",
    content:
      "Blockchain has disrupted traditional industries, providing secure and transparent transactions. Learn how this technology is revolutionizing finance, supply chain, and more.",
    user_id: 2,
  },
  {
    title: "The Role of Cybersecurity in Modern Business",
    content:
      "As technology advances, so do cybersecurity threats. Explore the importance of robust cybersecurity measures to protect sensitive data and maintain trust in the digital age.",
    user_id: 3,
  },
  {
    title: "Quantum Computing: A Glimpse into the Future",
    content:
      "Quantum computing has the potential to revolutionize computation as we know it. Delve into the principles behind quantum computing and its applications in various fields.",
    user_id: 4,
  },
  {
    title: "The Evolution of 5G Technology",
    content:
      "5G technology is unlocking new possibilities for communication and connectivity. Discover how this high-speed, low-latency network is reshaping the way we connect and communicate.",
    user_id: 5,
  },
  {
    title: "Augmented Reality: Bridging the Physical and Digital Worlds",
    content:
      "Augmented Reality (AR) is changing the way we experience the world. Explore the applications of AR in gaming, education, healthcare, and beyond.",
    user_id: 1,
  },
  {
    title: "The Impact of Open Source Software on Tech Innovation",
    content:
      "Open Source Software (OSS) has fueled innovation in the tech industry. Learn about the collaborative nature of open source projects and their influence on modern software development.",
    user_id: 1,
  },
  {
    title: "The Future of Cloud Computing",
    content:
      "Cloud computing is becoming the backbone of modern IT infrastructure. Explore the trends and innovations shaping the future of cloud technology.",
    user_id: 2,
  },
  {
    title: "Artificial Neural Networks: Mimicking the Human Brain",
    content:
      "Dive into the world of artificial neural networks, the building blocks of deep learning. Understand how these structures emulate the human brain to solve complex problems.",
    user_id: 3,
  },
  {
    title: "The Internet of Things (IoT): Connecting the World",
    content:
      "The Internet of Things is creating a connected world where devices communicate and share data. Explore the potential and challenges of this interconnected ecosystem.",
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
