import 'dotenv/config';

const config = {
  mongoURI: process.env.MONGO_URI,
  BACK_PORT: process.env.BACK_PORT,
};

export default config;
