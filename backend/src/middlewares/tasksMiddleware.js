const validateFieldTitle = (req, res, next) => {
  const { body } = req;
  // Body validation (can use zod, joi, etc...)
  if (body.title === undefined) {
    return res.status(400).json({ message: "The field title is required!" });
  } else if (body.title === "") {
    return res.status(400).json({ message: "Title cannot be empty!" });
  }
  next();
};

const validateFieldStatus = (req, res, next) => {
  const { body } = req;
  // Body validation (can use zod, joi, etc...)
  if (body.status === undefined) {
    return res.status(400).json({ message: "The field status is required!" });
  } else if (body.status === "") {
    return res.status(400).json({ message: "Status cannot be empty!" });
  }
  next();
};

module.exports = {
  validateFieldTitle,
  validateFieldStatus,
};
