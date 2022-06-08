"use strict";
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("Kycs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
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
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable("Kycs");
  },
};
