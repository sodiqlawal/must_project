export const getPaginatedData = <T extends unknown>(
  data: T[],
  page: number,
  limit: number
) => {
  if (!data || !data.length) return [];
  return [...data].slice((page - 1) * limit, page * limit);
};
