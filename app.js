import  express  from "express";
import  mongoose from 'mongoose';
import blogRouter from "./routes/blogroutes.js";
import router from "./routes/user-routes.js";
const app = express();
app.use(express.json());
app.use("/api/user",router);
app.use('/api/blog',blogRouter);

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/blog', {useNewUrlParser: true})
.then(
        ()=>app.listen(9000)
    )
.then(
    ()=>
        console.log("Connected to  database  and listen  to port 9000")
    )
    .catch(
    (error)=>console.log(error));


