const conn = require('../connect')
const { DataTypes } = require("sequelize");
const PackageModel = require('../models/PackageModel')

const MemberModel = conn.define("member", {

  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  packageId: {
    type: DataTypes.BIGINT,
  },
  name: {
    type: DataTypes.STRING(255),
  },
  phone: {
    type: DataTypes.STRING(255),
  },
  pass: {
    type: DataTypes.STRING(255),
  }
});

MemberModel.belongsTo(PackageModel);

MemberModel.sync({ alter: true }); // sync สร้างอัตโนมัต
module.exports = MemberModel;
