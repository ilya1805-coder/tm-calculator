import bcrypt from 'bcrypt';

export const authenticateAdmin = async (username, password) => {
  const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
  const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH;

  if (username !== ADMIN_USERNAME) {
    return null;
  }

  const isPasswordValid = await bcrypt.compare(password, ADMIN_PASSWORD_HASH);

  if (!isPasswordValid) {
    return null;
  }

  return username;
};
