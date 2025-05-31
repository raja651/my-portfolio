const rateLimitMap = new WeakMap();

const MAX_REQUESTS_PER_WINDOW = 10;
const WINDOW_SIZE_IN_SECONDS = 60;

export const rateLimiter = (req, res, next) => {
  try {
    const ip = req?.ip || req?.connection?.remoteAddress;

    if (!ip) {
      return res.status(400).json({ error: "Invalid ip address", ip });
    }

    if (!rateLimitMap.has(ip)) {
      rateLimitMap.set(ip, []);
    }

    const requests = rateLimitMap.get(ip);

    const currentTime = Date.now();
    const windowStart = currentTime - WINDOW_SIZE_IN_SECONDS * 1000;
    const validRequests = requests.filter((request) => request > windowStart);

    if (validRequests.length >= MAX_REQUESTS_PER_WINDOW) {
      return res.status(429).json({
        error: "Too Many requests",
        remanining: 0,
        nextValidRequestTime: new Date(
          validRequests[0] + WINDOW_SIZE_IN_SECONDS * 1000
        ),
      });
    }

    requests.push(currentTime);
    rateLimitMap.set(ip, validRequests);

    next();
  } catch (err) {
    next(err);
  }
};
