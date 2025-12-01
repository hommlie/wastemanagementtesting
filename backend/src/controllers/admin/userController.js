const db = require("../../models");
const User = db.User;
const Role = db.Role;
const Permission = db.Permission;
const RolePermission = db.RolePermission;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// -----------------------------
// Helper → Fetch permissions for a role
// -----------------------------
async function getPermissionsForRole(roleId) {
  const rolePerms = await RolePermission.findAll({
    where: { role_id: roleId },
    include: [
      {
        model: Permission,
        as: "permission",
        attributes: ["id", "permission_key"]
      }
    ]
  });

  return rolePerms.map(rp => rp.permission.permission_key);
}

// -----------------------------
// Create User
// -----------------------------
exports.createUser = async (req, res) => {
  try {
    const { username, email, password, role_id } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ status: 0, message: "All fields are required" });
    }

    const exist = await User.findOne({ where: { email } });
    if (exist) {
      return res.status(409).json({ status: 0, message: "Email already exists" });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashed,
      role_id: role_id || null,
      status: 1,
    });

    res.status(201).json({ status: 1, message: "User created successfully", data: user });
  } catch (err) {
    return res.status(500).json({ status: 0, message: err.message });
  }
};

// -----------------------------
// User Login
// -----------------------------
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email },
      include: [
        { model: Role, as: "role" }
      ]
    });

    if (!user) {
      return res.status(404).json({ status: 0, message: "Invalid email or password" });
    }

    const passMatch = await bcrypt.compare(password, user.password);
    if (!passMatch) {
      return res.status(401).json({ status: 0, message: "Invalid email or password" });
    }

    // Get permission list for this user
    let permissions = [];
    if (user.role_id) {
      permissions = await getPermissionsForRole(user.role_id);
    }

    // Create JWT
    const token = jwt.sign(
      {
        id: user.id,
        role_id: user.role_id,
        permissions
      },
      process.env.JWT_SECRET || "SECRET_KEY",
      { expiresIn: "1d" }
    );

    res.status(200).json({
      status: 1,
      message: "Login successful",
      token,
      data: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role ? user.role.name : null,
        permissions
      }
    });

  } catch (err) {
    return res.status(500).json({ status: 0, message: err.message });
  }
};

// -----------------------------
// Get All Users
// -----------------------------
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      include: [{ model: Role, as: "role", attributes: ["id", "name"] }]
    });

    return res.status(200).json({ status: 1, data: users });
  } catch (err) {
    return res.status(500).json({ status: 0, message: err.message });
  }
};

// -----------------------------
// Get Single User
// -----------------------------
exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id, {
      include: [{ model: Role, as: "role", attributes: ["id", "name"] }]
    });

    if (!user) {
      return res.status(404).json({ status: 0, message: "User not found" });
    }

    return res.status(200).json({ status: 1, data: user });

  } catch (err) {
    return res.status(500).json({ status: 0, message: err.message });
  }
};

// -----------------------------
// Update User
// -----------------------------
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email, role_id, status } = req.body;

    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ status: 0, message: "User not found" });

    user.username = username ?? user.username;
    user.email = email ?? user.email;
    user.role_id = role_id ?? user.role_id;
    user.status = status ?? user.status;

    await user.save();

    return res.status(200).json({ status: 1, message: "User updated", data: user });

  } catch (err) {
    return res.status(500).json({ status: 0, message: err.message });
  }
};

// -----------------------------
// Delete User
// -----------------------------
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ status: 0, message: "User not found" });

    await user.destroy();

    return res.status(200).json({ status: 1, message: "User deleted" });

  } catch (err) {
    return res.status(500).json({ status: 0, message: err.message });
  }
};

// -----------------------------
// Assign Role to User
// -----------------------------
exports.assignRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { role_id } = req.body;

    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ status: 0, message: "User not found" });

    user.role_id = role_id;
    await user.save();

    res.status(200).json({ status: 1, message: "Role updated", data: user });

  } catch (err) {
    return res.status(500).json({ status: 0, message: err.message });
  }
};
