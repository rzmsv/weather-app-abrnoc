import bcrypt from 'bcrypt';

class Bcrypt {
  private readonly saltRounds: number;

  constructor(saltRounds = 10) {
    this.saltRounds = saltRounds;
  }

  hashPassword = async (password: string): Promise<string> => {
    return await bcrypt.hash(password, this.saltRounds);
  }

  comparePassword = async (password: string, hash: string): Promise<boolean> => {
    return await bcrypt.compare(password, hash);
  }
}

export default new Bcrypt;