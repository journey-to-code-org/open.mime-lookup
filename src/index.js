import path from "node:path";

const TYPES = Object.freeze({
  ".html":"text/html",".htm":"text/html",".css":"text/css",".js":"text/javascript",
  ".mjs":"text/javascript",".json":"application/json",".xml":"application/xml",
  ".txt":"text/plain",".md":"text/markdown",".csv":"text/csv",".svg":"image/svg+xml",
  ".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg",".gif":"image/gif",
  ".webp":"image/webp",".ico":"image/x-icon",".pdf":"application/pdf",
  ".zip":"application/zip",".gz":"application/gzip",".wasm":"application/wasm",
  ".mp3":"audio/mpeg",".wav":"audio/wav",".mp4":"video/mp4",".webm":"video/webm"
});

export function lookupMime(value, fallback = "application/octet-stream") {
  if (typeof value !== "string") throw new TypeError("Expected value to be a string");
  const extension = value.startsWith(".") ? value.toLowerCase() : path.extname(value).toLowerCase();
  return TYPES[extension] ?? fallback;
}

export function extensionForMime(mime) {
  if (typeof mime !== "string") throw new TypeError("Expected mime to be a string");
  const entry = Object.entries(TYPES).find(([,value])=>value===mime.toLowerCase());
  return entry?.[0] ?? null;
}

export const mimeTypes = TYPES;
