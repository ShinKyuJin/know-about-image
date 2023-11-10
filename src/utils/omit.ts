export const omit = (obj: Object, ...properties: string[]) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => properties.includes(key)),
  );
};
