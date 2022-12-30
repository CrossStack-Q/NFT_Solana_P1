/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_CANDY_MACHINE_ID:
      "DZUH4iZnZRn8zVcbQ4vBJWVycW4a1S7krL6ur29rb8Wk",
    NEXT_PUBLIC_SOLANA_NETWORK: "devnet",
    NEXT_PUBLIC_SOLANA_RPC_HOST: "https://devnet.genesysgo.net/",
  },
};

module.exports = nextConfig;
