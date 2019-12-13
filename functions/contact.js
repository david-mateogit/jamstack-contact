exports.handler = (event, _context, callback) => {
  console.log({ event });

  callback('errrrroooor', {
    statusCode: 200,
    body: JSON.stringify({ boop: true }),
  });
};
