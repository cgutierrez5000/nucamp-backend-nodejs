export default (x, y, callback) => {
  if (x <= 0 || y <= 0) {
    callback(
      new Error(
        `Rectangle dimensions must be geater than zero. Recieved: ${x}, ${y}`
      )
    );
  } else {
    setTimeout(
      () =>
        callback(null, {
          perimeter: (x, y) => 2 * (x + y),
          area: (x, y) => x * y,
        }),
      2000
    );
  }
};
