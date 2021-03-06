const express = require("express");
const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys")

const app = express();


app.get("/", (req, res) => {
  res.send({ res: "response was succesful" });
});

passport.use(new GoogleStrategy( { 
  clientID: keys.GoogleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
 }, (accessToken) => {
   console.log(accessToken)
 } ))

 //GoogleStrategy, has an internel identifire know as 'google'
 // So passport, will take the 'google' and find the strategy --> GoogleStrategy
 // scopr, we're asking google to give us an access to user's 'profile; and 'email;
 app.get('/auth/google', passport.authenticate())

const PORT = process.env.PORT || 5000;
app.listen(PORT);






//https://console.developers.google.com/projectselector/apis/dashboard?pli=1&supportedpurview=project

