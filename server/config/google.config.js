import googleOAuth from "passport-google-oauth20";

import { UserModel } from "../database/allModels";

const GoogleStrategy = googleOAuth.Strategy;

export default (passport) => {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRETE,
        callbackURL:"http://localhost:4000/auth/google/callback",
    },
     async(accessToken, refreshToken, profile, done) => {
         const nemUser = {
             fullname: profile.displayName,
             email: profile.emails[0].value,
             profilePic: profile.photos[0].value,
         };
         try{
             const user = await UserModel.findOne({email:newUser.email})

            const token = user.generateJwtToken();
            if(user){
                done(null, {user, token});
            }else{
                const user = await UserModel.create(newUser);
                done(null, {user, token});
            }
         }catch (error) {
             done(error, null);
         }
     }
      )
   );

passport.serializeUser((userData, done)=> done(null, {...userData}));
passport.deserializeUser((id, done)=> done(null, id));     
};
