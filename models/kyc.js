const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Kyc extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      // define association here
      this.belongsTo(User, { foreignKey: "userID", as: "user" });
    }
  }
  Kyc.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      panimage: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      pandetails: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      passbookimg: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      ifsc: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      accountNo: {
        type: DataTypes.INTEGER,
        defaultValue: null,
      },
      holderName: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      branch: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: "pending",
        validate: {
          status(value) {
            const statusArray = ["pending", "approve", "reject"];
            if (!statusArray.includes(value)) {
              throw new Error(
                'plese enter valid status "pending,approve or reject"'
              );
            }
          },
        },
      },
      userID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Kyc",
    }
  );
  return Kyc;
};
