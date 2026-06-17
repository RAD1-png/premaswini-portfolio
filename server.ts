import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join } from "node:path";

const port = Number(process.env.PORT || 4173);
const root = "dist";

const types: Record<string, string> = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".svg": "image/svg+xml",
  ".json": "application/json",
};

createServer(async (req, res) => {
  const url = req.url === "/" ? "/index.html" : req.url || "/index.html";
  const filePath = join(root, url.split("?")[0]);

  try {
    const file = await readFile(filePath);
    res.writeHead(200, { "Content-Type": types[extname(filePath)] || "text/plain" });
    res.end(file);
  } catch {
    const fallback = await readFile(join(root, "index.html"));
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(fallback);
  }
}).listen(port, () => {
  console.log(`Portfolio server running on http://localhost:${port}`);
});
