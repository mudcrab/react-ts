import { format, parse } from 'date-fns';

const javascriptDateFormat = 'yyyy-MM-dd\'T\'HH:mm:ss.SSSxxx';

export const dateToYearMonthDay = (date: string | Date) =>
  format(parse(`${date}`, javascriptDateFormat, new Date()), 'yyyy/MM/dd');

export const userToName = user => `${user.first} ${user.last}`;

export const chunkArray = <T>(array: T[], size: number): T[][] => {
  let index = 0;
  const tempArray = [];

  for (index = 0; index < array.length; index += size) {
    const arr = array.slice(index, index + size);

    tempArray.push(arr.length === size ? arr : arr.concat(Array(size - arr.length).fill(null)));
  }

  return tempArray;
};
