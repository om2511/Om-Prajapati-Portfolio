const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const requestLog = new Map();

function getClientKey(request) {
  const forwardedFor = request.headers["x-forwarded-for"];

  if (typeof forwardedFor === "string" && forwardedFor.trim()) {
    return forwardedFor.split(",")[0].trim();
  }

  return request.ip || request.socket.remoteAddress || "unknown";
}

export function contactRateLimit(request, response, next) {
  const now = Date.now();
  const clientKey = getClientKey(request);
  const windowStart = now - WINDOW_MS;
  const recentRequests = (requestLog.get(clientKey) || []).filter(
    (timestamp) => timestamp > windowStart
  );

  if (recentRequests.length >= MAX_REQUESTS) {
    return response.status(429).json({
      message: "Too many contact requests. Try again later."
    });
  }

  recentRequests.push(now);
  requestLog.set(clientKey, recentRequests);
  next();
}
