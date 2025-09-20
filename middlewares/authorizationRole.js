// Authorize role

// To handle role by access.

const authorizeRole = (allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res
        .status(401)
        .redirect("/login");
    }
    if (!allowedRoles.includes(req.session.user.role)) {
      return res.redirect("/login");
    }
    next();
  };
};

module.exports = authorizeRole;
