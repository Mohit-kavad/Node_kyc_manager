const { message, codes } = require("./../utils/constants");
const { Kyc, User } = require("./../../models");
const { user } = require("pg/lib/defaults");

// const addKyc = async (req, res, next) => {
//   try {
//     const user = await User.findByPk(req.user.id);
//     const kyc = await Kyc.findAll({ ...req.body, userID: req.user.id });
//     if (user.id !== kyc.userID) {
//       // verify doc. uploaded in database or not
//       // if yes than give error and no than upload
//       const { details } = req.body;
//       const kycExist = await Kyc.findOne({ where: { details: details } });
//       if (!kycExist) {
//         const kycDocs = await Kyc.create({ ...req.body, userID: req.user.id });
//         res.status(codes.SUCCESS_CODE).json({
//           status: message.SUCCESS,
//           data: {
//             kycDocs,
//           },
//         });
//       } else {
//         res.status(codes.FAIL_CODE).json({ error: message.KYC_ERROR });
//       }
//     } else {
//       res
//         .status(codes.FAIL_CODE)
//         .json({ message: "You can post only one time" });
//     }
//   } catch (error) {
//     return next(error);
//   }
// };

const getAllKyc = async (req, res, next) => {
  try {
    const kyc = await Kyc.findAll({ include: ["user"] });

    res.status(codes.SUCCESS_CODE).json({
      status: message.SUCCESS,
      results: kyc.length,
      data: {
        kyc,
      },
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const updateKyc = async (req, res, next) => {
  try {
    const id = req.user.id;
    const kyc = await Kyc.findByPk(id);
    console.log(kyc);

    if (kyc.status !== "approve") {
      // verify doc. uploaded in database or not
      // if yes than give error and no than upload
      const { pandetails } = req.body;
      const kycExist = await Kyc.findOne({ where: { pandetails: pandetails } });
      if (!kycExist) {
        await Kyc.update(req.body, { where: { id: id } });
        res.status(codes.SUCCESS_CODE).json({
          status: message.SUCCESS,
          message: message.UPDATE_SUCCESS,
        });
      } else {
        res.status(codes.FAIL_CODE).json({ error: message.KYC_ERROR });
      }
    } else {
      res.status(codes.FORBIDDEN_RES).json({ message: message.KYC_STATUS });
    }
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const KycUpdateByAdmin = async (req, res, next) => {
  try {
    const id = req.params.id;

    await Kyc.update(req.body, { where: { id: id } });
    res.status(codes.SUCCESS_CODE).json({
      status: message.SUCCESS,
      message: message.UPDATE_SUCCESS,
    });
  } catch (error) {
    console.log("plese enter pan details");
    return next(error);
  }
};

module.exports = {
  // addKyc,
  getAllKyc,
  updateKyc,
  KycUpdateByAdmin,
};
