const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeString(value) {
  return typeof value === "string" ? value.trim() : "";
}

export function validateContactPayload(payload) {
  const name = normalizeString(payload?.name);
  const email = normalizeString(payload?.email).toLowerCase();
  const subject = normalizeString(payload?.subject);
  const message = normalizeString(payload?.message);

  if (!name || !email || !subject || !message) {
    return {
      ok: false,
      status: 400,
      message: "All contact fields are required."
    };
  }

  if (!EMAIL_PATTERN.test(email)) {
    return {
      ok: false,
      status: 400,
      message: "A valid email address is required."
    };
  }

  if (name.length > 120 || subject.length > 200 || message.length > 5000) {
    return {
      ok: false,
      status: 400,
      message: "Contact form input exceeds allowed length."
    };
  }

  return {
    ok: true,
    value: {
      name,
      email,
      subject,
      message
    }
  };
}
