import { config } from 'dotenv';
config();

export default {
    // Express envirement vars
    port: process.env.PORT || 3000,
    ip: process.env.IP || '0.0.0.0',

    internal_auth: {
        jwt: {
            scret_key: process.env.JWT_SECRET_KEY || ""
        }
    },
    mongo: {
        conection: process.env.MONGO_DB || ""
    }
};
  