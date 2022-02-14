const express = require("express");
const cors =require("cors");
const contactRoutes = require("./contact");
const app =express();
app.use(express.json());
app.use(cors());
app.set("port", process.env.port || 2627);


app.get("/", function(req, res){
    res.send("This is home page");
});
app.use("/contact",contactRoutes);



const port = process.env.PORT || 2627;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
