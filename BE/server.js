import dotenv from 'dotenv';
dotenv.config({ quiet: true });
import mongoose from 'mongoose';
import app from './app.js'

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("kết nối thành công")
}).catch((err) => {
        console.log(err,"thất bại ")
   
});

app.listen(3000, () => {
    console.log("hi");
});
    