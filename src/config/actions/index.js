export const actionCreator = (type, payload = null) => {
  if (payload !== null) {
    return { type, payload };
  } else {
    return { type };
  }
};

export const OPEN = 'OPEN';

export const CLOSE = 'CLOSE';
