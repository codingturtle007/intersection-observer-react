export function fakeAPI(start_index) {
  return new Promise((resolve, reject) => {
    const new_array = [];
    const last_index = start_index + 10;
    for(let i = start_index;i < last_index;i++) {
      new_array.push({
        index: i,
        url: 'https://iili.io/jBAOas.png'
      });
    }

    resolve(new_array);
  });
}