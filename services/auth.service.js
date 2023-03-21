const User = require("../models/User");

exports.signUpService = async (userInfo) => {
  const user = await User.create(userInfo);
  return user;
};

exports.signInService = async (email) => {
  const user = await User.findOne({ email: email });
  return user;
};

exports.getAllUsersService = async () => {
  const users = await User.find({});
  return users;
};

exports.getSingleUserByIdService = async (userId) => {
  const user = await User.findOne({ _id: userId });
  return user;
};
exports.updateUserService = async (userId, data) => {
  const result = await User.updateOne({ _id: userId }, data, {
    runValidators: true,
  });
  return result;
};

exports.deleteUserService = async (userId) => {
  const result = await User.deleteOne({ _id: userId });
  return result;
};
