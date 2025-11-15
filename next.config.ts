import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  typedRoutes: true, // This allows you to only use existing routes, e.g.: <Link href="/">
  experimental: {
    typedEnv: true, // This allows you to use process.env.MY_ENV_VAR with type safety
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
