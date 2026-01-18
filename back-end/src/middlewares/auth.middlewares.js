import jwt from "jsonwebtoken";

export function verifyAccessToken(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    // 1. Check header existence
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Access token missing",
        code: "NO_TOKEN",
      });
    }

    // 2. Extract token
    const token = authHeader.split(" ")[1];

    // 3. Verify token
    const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);

    // 4. Attach user info to request
    req.user = {
      id: decoded.userId,
    };

    // 5. Continue to controller
    next();
  } catch (error) {
    // 🔴 Token expired
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        message: "Access token expired",
        code: "TOKEN_EXPIRED",
      });
    }

    // 🔴 Token invalid / tampered
    return res.status(401).json({
      message: "Invalid access token",
      code: "INVALID_TOKEN",
    });
  }
}
