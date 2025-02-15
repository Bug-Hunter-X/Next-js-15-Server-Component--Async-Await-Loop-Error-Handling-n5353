// pages/api/data.js (Server Component)
export default async function handler() {
  const dataPromises = [Promise.resolve(1), Promise.reject('Error!'), Promise.resolve(3)];

  const results = [];
  for (const promise of dataPromises) {
    try {
      const result = await promise;
      results.push(result);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Halt the loop on error
      throw new Error('One or more data fetches failed');
    }
  }
  return results;
}
//Alternative solution using break
// export default async function handler() {
//   const dataPromises = [Promise.resolve(1), Promise.reject('Error!'), Promise.resolve(3)];
// 
//   const results = [];
//   for (const promise of dataPromises) {
//     try {
//       const result = await promise;
//       results.push(result);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       // Break the loop on error
//       break;
//     }
//   }
//   return results; // Returns only [1] in this case. 
// }
