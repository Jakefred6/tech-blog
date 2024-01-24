const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "Great insights into the advancements of AI!",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text:
      "Blockchain is truly changing the game in various industries.",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text:
      "The importance of robust cybersecurity cannot be overstated.",
    user_id: 3,
    post_id: 3,
  },
  {
    comment_text:
      "Quantum computing is mind-blowing! Can't wait to see its applications unfold.",
    user_id: 4,
    post_id: 4,
  },
  {
    comment_text:
      "Excited about the possibilities that 5G brings to the table.",
    user_id: 3,
    post_id: 5,
  },
  {
    comment_text:
      "Augmented Reality is reshaping how we perceive and interact with the world.",
    user_id: 3,
    post_id: 6,
  },
  {
    comment_text:
      "Open Source Software has played a key role in driving innovation.",
    user_id: 2,
    post_id: 7,
  },
  {
    comment_text:
      "Cloud computing is the backbone of modern IT infrastructure.",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text:
      "Artificial Neural Networks are fascinating in their ability to learn and adapt.",
    user_id: 3,
    post_id: 1,
  },
  {
    comment_text: "IoT is connecting the world in ways we never imagined!",
    user_id: 1,
    post_id: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
