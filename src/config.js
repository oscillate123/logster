const env = process.env;

const config = {
  db: { 
    /* don't expose password or any sensitive info, store these vars in logster/.env/.app.env */
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
  },
  microservices: {
    test: {
      token: "abcd1234",
      tableSuffix: "test"
    }
  }
};

export default config;