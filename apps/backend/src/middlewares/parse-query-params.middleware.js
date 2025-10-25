//Expands request with parsedQuery property
export function parseQueryParams(req, res, next) {
  const parsedQuery = {};

  for (const key in req.query) {
    let value = req.query[key];

    if (value === 'true') value = true;
    else if (value === 'false') value = false;
    else if (typeof value === 'string' && value.includes(',')) {
      const items = value.split(',');
      if (items.every((item) => !isNaN(item))) {
        value = items.map(Number);
      }
    } else if (!isNaN(value) && value.trim() !== '') {
      value = Number(value);
    }

    parsedQuery[key] = value;
  }

  if ('classes' in parsedQuery) {
    if (!Array.isArray(parsedQuery.classes)) {
      parsedQuery.classes = [parsedQuery.classes];
    }
  }

  req.parsedQuery = parsedQuery;

  next();
}
