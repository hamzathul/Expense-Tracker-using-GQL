import cron from "cron";
import https from "https";

const URL = "https://expense-tracker-using-gql.onrender.com/";

const job = new cron.CronJob("*/14 * * * *", function () {
  https
    .get(URL, (res) => {
      if (res.statusCode === 200) {
        console.log("GET request sent successfully");
      } else {
        console.log("GET request failed", res.statusCode);
      }
    })
    .on("error", (e) => {
      console.log("Error while sending https request", e);
    });
});

export default job;
