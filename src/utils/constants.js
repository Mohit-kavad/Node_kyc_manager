const codes = {
  FAIL_CODE: 400,
  UNAUTHORIZED_CODE: 401,
  FORBUDDEN_RES: 403,
  NOT_FOUND_CODE: 404,
  SUCCESS_CODE: 200,
  INTERNAL_SERVER_ERROR_CODE: 500,
  INTERNAL_ERROR: 5001,
  SUCCESS_STATUS_CODE: 2000,
  VALIDATION_ERR_CODE: 4000,
  ALREADY_EXISTS: 409,
  BAD_REQUEST: 400,
};

const message = {
  // success Messages
  SUCCESS: "success",
  LOGIN_SUCCESS: "Logged in successfully",
  DELETE_SUCCESS: "Deleted successfully",

  // Error Messages
  USER_NOT_FOUND: "user not found",
  PASS_INCORRECT: "Password Incorect",
};

module.exports = {
  codes,
  message,
};
