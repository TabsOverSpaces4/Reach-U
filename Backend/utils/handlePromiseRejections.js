module.exports = (server) => {
  process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err}`);

    // Close server and exit
    server.close(() => {
      process.exit(1);
    });
  });
};
