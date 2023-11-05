
export const config = {
    HOST: "localhost",
    USER: "thfgolden",
    PASSWORD: "thfgolden",
    DB: "buildings",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};
  
export const dialect = "postgres";