const { User } = require("../models");

const userData = [
  {
    username: "John",
    password: "john123",
  },
  {
    username: "Jake",
    password: "jake123",
  },
  {
    username: "Joe",
    password: "joe123",
  },
  {
    username: "Alice",
    password: "alice123",
  },
  {
    username: "Bob",
    password: "bob123",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
