import { ORIGIN } from "./constants";

const MATCHES: RegExp[] = [
  /deep-real-[0-9]+--sovereign-nature.vercel.app/,
  /real.sovereignnature.com/,
  /localhost:5173/,
];

export const allowedOrigin = (origin: string): string | undefined | null => {
  const match = MATCHES.find((r) => r.test(origin));
  if (match) {
    return origin;
  }
  return ORIGIN;
};
