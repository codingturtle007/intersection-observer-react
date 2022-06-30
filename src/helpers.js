export function fakeAPI(start_index) {
  return new Promise((resolve, reject) => {
    const new_array = [];
    for(let i = start_index;i<(start_index + 10);i++) {
      new_array.push({
        index: i,
        url: 'https://iili.io/jBAOas.png'
      });
    }

    resolve(new_array);
  });
}