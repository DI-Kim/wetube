import passport from "passport";
import User from "./models/User";

passport.use(User.createsStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
