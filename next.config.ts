import type { NextConfig } from "next";
import dotenv from "dotenv";
dotenv.config();

const nextConfig: NextConfig = {
  env: {
    NEON_AUTH_BASE_URL: process.env.NEON_AUTH_BASE_URL,
  },
};

export default nextConfig;
