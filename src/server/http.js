import express from 'express';

const app = express();

// 提供静态资源
app.use(express.static('public'));

let port = 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

export default app;
