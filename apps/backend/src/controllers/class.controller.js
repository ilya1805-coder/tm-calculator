import { classService } from '@/services/class.service.js';

export const getClasses = async (req, res, next) => {
  try {
    const classes = await classService.getClasses();
    res.json(classes);
  } catch (err) {
    next(err);
  }
};
