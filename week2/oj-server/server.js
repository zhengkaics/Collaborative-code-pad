const express = require('express')
const app = express()
var restRouter=require("./routes/rest");
var mongoose =require("mongoose");
var indexRouter=require("./routes/index");
var path=require("path");
mongoose.connect("mongodb://user:zzj90518@ds135382.mlab.com:35382/zhengkaioj");
app.use(express.static(path.join(__dirname,'../public')));
app.use("/",indexRouter);
app.use("/api/v1",restRouter);
app.listen(3000, () => console.log('Example app listening on port 3000!'))