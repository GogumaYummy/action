import express from 'express';

express()
  .get('/game', (req, res) => {
    res.send('1');
  })
  .listen(3000, () => {
    console.log('listening on 3000 port');
  });
