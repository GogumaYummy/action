import express from 'express';

express()
  .get('/main', (req, res) => {
    res.send('hi');
  })
  .listen(3000, () => {
    console.log('listening on 3000 port');
  });
