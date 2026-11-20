import express from "express";

const router = express.Router();

const urlMap = new Map<string, { id: number; shortened: string }>();

router.post("/shorten-url", (req, res) => {
  const id = urlMap.size + 1;
  const shortened = generateShortenedUrl(id);
  urlMap.set(req.body.url, { id, shortened });

  res.statusCode = 201;
  res.json({ url: shortened });
});

router.get("", (req, res) => {});

const CHAR_0 = "0".charCodeAt(0); // 48
const CHAR_A_UPPER = "A".charCodeAt(0); // 65
const CHAR_A_LOWER = "a".charCodeAt(0); // 97

const BASE = 62n;
const MIN_LEN = 5;
const MAX_LEN = 10;
const MAX_ID = BASE ** BigInt(MAX_LEN) - 1n;

const digitToCharBase62 = (digit: number): string => {
  if (digit < 10) return String.fromCharCode(CHAR_0 + digit);
  if (digit < 36) return String.fromCharCode(CHAR_A_UPPER + (digit - 10));

  return String.fromCharCode(CHAR_A_LOWER + (digit - 36));
};

const generateShortenedUrl = (id: number): string => {
  if (!Number.isInteger(id) || id < 0)
    throw new RangeError("ID must be greater than 0.");

  let value = BigInt(id);

  if (value < 0n || value > MAX_ID)
    throw new RangeError(`ID out of range (0 - ${MAX_ID}).`);

  let code = "";

  do {
    const remainder = Number(value % BASE);
    code = digitToCharBase62(remainder) + code;
    value /= BASE;
  } while (value > 0n);

  return `http://localhost:3000/${code.padStart(MIN_LEN, "0")}`;
};

export default router;
