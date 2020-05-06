export const chunkArray = <T>(array: T[], size: number): T[][] => {
  let index = 0;
  const tempArray = [];

  for (index = 0; index < array.length; index += size) {
    const arr = array.slice(index, index + size);

    tempArray.push(arr.length === size ? arr : arr.concat(Array(size - arr.length).fill(null)));
  }

  return tempArray;
};
