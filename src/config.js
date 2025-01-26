import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 3001;
export const MONGOBD_URI = process.env.MONGOBD_URI;
export const SECRET = process.env.SECRET;