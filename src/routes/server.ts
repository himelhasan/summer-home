// import http from 'http';
import mongoose from 'mongoose';
import app from '../app';

const port: number = 5000;

//database connection

bootstrap().catch((err) => console.log(err));

async function bootstrap() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/summer-home');
        console.log(`database connected`);
        app.listen(port, () => {
            console.log(`Summer Home Server listening on port ${port}`);
        });
    } catch (error) {
        console.log(`database connection error: ${error}`);
    }
}
