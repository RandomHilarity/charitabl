export default {
  API_PATH: {
    //development: "http://localhost:8080",
    development: "https://charitabl-api.herokuapp.com",
    production: "https://charitabl-api.herokuapp.com"
  }[process.env.NODE_ENV || "development"]
};
