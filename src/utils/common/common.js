export const CreatedAt = (requestDate) => {
  const dateObj = new Date(requestDate);
  const date = dateObj.getDate();
  const month = dateObj.toLocaleString("default", { month: "short" });
  const year = dateObj.getFullYear();
  return `${date}, ${month} ${year}`;
};

export const BEONSCHOOL = 'http://beonschool.test'