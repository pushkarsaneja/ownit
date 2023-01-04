exports.useServerSentEventsMiddleware = (req, res, next) => {
  //   res.set({
  //     "Content-Type": "text/event-stream",
  //     "Cache-Control": "no-cache",
  //     Connection: "keep-alive",

  //     // enabling CORS
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Headers":
  //       "Origin, X-Requested-With, Content-Type, Accept",
  //   });

  // only if you want anyone to access this endpoint

  //   res.setHeader(
  //     "Access-Control-Allow-Headers",
  //     "Origin, X-Requested-With, Content-Type, Accept"
  //   );

  //   const headers = {
  //     "Content-Type": "text/event-stream",
  //     Connection: "keep-alive",
  //     "Cache-Control": "no-cache",
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Credentials": "true",
  //   };
  //   res.writeHead(200, headers);
  const headers = {
    "Content-Type": "text/event-stream",
    Connection: "keep-alive",
    "Cache-Control": "no-cache",
  };
  res.writeHead(200, headers);

  const sendEventStreamData = (data) => {
    const sseFormattedResponse = `data: ${JSON.stringify(data)}\n\n`;
    res.write("event: message\n");
    res.write(sseFormattedResponse);
  };

  // we are attaching sendEventStreamData to res, so we can use it later
  Object.assign(res, {
    sendEventStreamData,
  });

  next();
};
