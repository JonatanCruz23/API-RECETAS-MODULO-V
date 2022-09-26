import { config } from 'dotenv';
config();

export default {
    // Express envirement vars
    port: process.env.PORT || 3000,
    ip: process.env.IP || '0.0.0.0',

    internal_auth: {
        jwt: {
            scret_key: process.env.JWT_SECRET_KEY || "",
            expires_time: process.env.JWT_EXPIRES_TIME || "5m"
        }
    },
    mongo: {
        conection: process.env.MONGO_DB || ""
    },
    google: {
        credentials: process.env.APP_GOOGLE_CREDENTIALS || '{}',
        cloud_storage: {
            buckets: {
                portadas_recetas: process.env.GCP_BUCKET_NAME || ""
            }
        }
    }
};
  