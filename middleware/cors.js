import cors from "cors";

export const corsMiddleware = () =>
  cors({
    origin: (origin, cb) => {
      const ACCEPTED_ORIGINS = [
        "http://localhost:5173",
        "https://portafolio-rd.vercel.app",
      ];
      if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
        return cb(null, true);
      }
      return cb(new Error("Not Allowed by CORS"));
    },
  });
