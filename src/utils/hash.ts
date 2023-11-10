import * as bcrypt from 'bcrypt';

export const hash = async (plainText: string): Promise<string> => {
  const saltOrRounds = 10;
  return bcrypt.hash(plainText, saltOrRounds);
};

export const isHashValid = async (
  password: string,
  hashPassword: string,
): Promise<boolean> => {
  return bcrypt.compare(password, hashPassword);
};
