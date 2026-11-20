import express, { type Express } from "express";
import request from "supertest";
import router from "./routes";

describe("routes", () => {
  let app: Express;

  beforeEach(() => {
    app = express();
    app.use(express.json());

    const routes = router;
    app.use(routes);
  });

  it("returns a shortened url", async () => {
    const url = "https://test.com";
    const res = await request(app).post("/shorten-url").send({ url });

    expect(res.statusCode).toBe(201);
    expect(res.body.url).not.toBe(url);
    expect(res.body.url.trim().length).toBeGreaterThan(5);
  });

  it("returns two different shortened urls", async () => {
    const url1 = "https://test1.com";
    const url2 = "https://test2.com";

    const res1 = await request(app).post("/shorten-url").send({ url: url1 });
    console.log(res1);
    const res2 = await request(app).post("/shorten-url").send({ url: url2 });

    expect(res1.statusCode).toBe(201);
    expect(res1.body.url).not.toBe(url1);
    expect(res1.body.url.trim().length).toBeGreaterThan(5);

    expect(res2.statusCode).toBe(201);
    expect(res2.body.url).not.toBe(url1);
    expect(res2.body.url.trim().length).toBeGreaterThan(5);

    expect(res1.body.url).not.toBe(res2.body.url);
  });
});
