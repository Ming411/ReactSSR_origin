import app from './http';
import render from './renderer';
app.get('*', (req, res) => {
  res.send(render(req));
});
