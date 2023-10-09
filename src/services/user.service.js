const { User } = require("../models");

const createUser = async (reqBody) => {
  return User.create(reqBody);
};


const getUserList = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return User.find(filter).skip(skip).limit(options.limit).select("-password");
};


const getUserByEmail = async (email) => {
  return User.findOne({ email });
};


const getUserById = async (userId) => {
  return User.findById(userId);
};


const updateDetails = async (userId, updateBody) => {
  return User.findByIdAndUpdate(userId, { $set: updateBody });
};


const deleteUser = async (userId) => {
  return User.findByIdAndDelete(userId);
};

module.exports = {
  createUser,
  getUserList,
  getUserById,
  updateDetails,
  getUserByEmail,
  deleteUser,
};