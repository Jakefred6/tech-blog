const path = require("path");
const routes = require("./controllers");

const sequelize = require("./config/connection");

const express = require("express");
const session = require("express-session");

const handleBars = require("express-handlebars");
const hbs = handleBars.create();

const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "THIS_IS_JAKES_SECRET_KEY",
  cookie: { maxAge: 300000 }, // 5 minutes
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

const PORT = process.env.PORT || 3001;

const app = express();

app.use(session(sess));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.engine("handlebars", hbs.engine);

app.set("view engine", "handlebars");

app.use(routes);
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
