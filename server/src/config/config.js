export const config = {
  dbConfig: {
    host: "mongodb://ds261567.mlab.com:61567/prepsnutrition",
  },
  reddis: {
    url: process.env.REDIS_STORE_URI,
    secret: process.env.REDIS_STORE_SECRET
  }
};

