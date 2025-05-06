import express from 'express';
const PORT=5000;
const app=express();
app.use(express);

app.listen(PORT, console.log(`"welcome to node server ${PORT}` ));