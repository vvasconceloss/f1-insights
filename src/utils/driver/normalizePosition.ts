export const normalizePosition = (position: number | string) => {
  if (position == "NC") return { type: "dnf", value: null };
  if (typeof position === "number") return { type: "number", value: position };

  return { type: "unknown", value: null };
}