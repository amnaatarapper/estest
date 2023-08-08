export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};

export const calcTimeDifferenceInMs = (startDate: string, endDate: string) => {
  return new Date(endDate).getTime() - new Date(startDate).getTime();
};

export const calculateDurationInHours = (
  startDate: string,
  endDate: string
) => {
  return calcTimeDifferenceInMs(startDate, endDate) / (1000 * 60 * 60);
};
