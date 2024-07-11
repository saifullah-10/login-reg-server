const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const db = req.db;
  const { name } = req.body;
  const user = req.user;
  console.log(db, user);
};

const loginUser = async (req, res) => {
  const db = req.db;
  const { name } = req.body;
  console.log(db, name);
};

module.exports = {
  registerUser,
  loginUser,
};
