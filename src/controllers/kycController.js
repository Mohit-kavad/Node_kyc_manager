const { message, codes } = require("./../utils/constants");
const { Kyc, User } = require("./../../models");

const kycDetails = async (req, res, next) => {
  try {
    const kycDocs = await Kyc.create({ ...req.body, userID: req.user.id });

    const kyc = await Kyc.findByPk(kycDocs.id, {
      include: [User],
    });

    res.status(codes.SUCCESS_CODE).json({
      status: message.SUCCESS,
      data: {
        kyc,
      },
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  kycDetails,
};
