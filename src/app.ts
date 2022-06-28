import express from 'express';

const app = express();

app.get('/todo', (_, res) => {
  res.json({ success: true });
});

app.listen(3333, () => {
  console.log('>> server listening on port 3333');
});
