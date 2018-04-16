import app from './app';

const port = process.env.PORT || 8080;

// Ensure server is running only one instance during testing
if (!module.parent) {
  app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
  });
}
