import express, { type Express } from "express";
import request from "supertest";
import router from "./routes";

describe("routes", () => {
  let app: Express;

  beforeAll(() => {
    app = express();
    app.use(express.json());

    const routes = router;
    app.use(routes);
  });

  it("returns a shortened url", async () => {
    const url = "https://test.com";
    const res = await request(app).post("/shorten-url").send({ url });

    expect(res.statusCode).toBe(201);
    expect(res.body.shorten).not.toBe(url);
  });
});
