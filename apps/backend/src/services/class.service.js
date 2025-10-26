import Class from '../models/class.model';

export const classService = {
  getClasses: async () => {
    return await Class.find();
  },
};
