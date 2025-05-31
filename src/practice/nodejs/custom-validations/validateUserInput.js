const validateUserInput = (req, res, next) => {
  console.log("test", req.body);
  try {
    if (!req.body) {
      return res.status(400).json({
        status: "error",
        message: "No body was provided",
      });
    }

    // Check if name exists
    if (!req.body.name) {
      return res.status(400).json({
        status: "error",
        message: "Name is required",
      });
    }

    // Check if name is string
    if (typeof req.body.name !== "string") {
      return res.status(400).json({
        status: "error",
        message: "Name must be a string",
      });
    }

    // If all validations pass
    next();
  } catch (error) {
    next(error);
  }
};

export { validateUserInput };
