function authorize(permissionKey) {
  return (req, res, next) => {
    const user = req.user;
    if (!user) return res.status(401).json({ status:0, message:'Unauthenticated' });
    const perms = user.permissions || []; // assign at login (array of permission_key)
    if (perms.includes(permissionKey)) return next();
    return res.status(403).json({ status:0, message:'Forbidden' });
  };
}

module.exports = { authorize };
