const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  // Method to check if the provided password matches the user's password
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    // User model fields and data types
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Hooks for password hashing before creating and updating user data
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false, // Disable timestamps
    freezeTableName: true, // Use the same table name as the model name
    underscored: true, // Use underscores in column names
    modelName: 'user', // Model name
  }
);

module.exports = User;