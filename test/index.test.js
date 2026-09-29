import test from "node:test";
import assert from "node:assert/strict";
import { lookupMime, extensionForMime } from "../src/index.js";
test("lookup",()=>assert.equal(lookupMime("image.png"),"image/png"));
test("fallback",()=>assert.equal(lookupMime("file.unknown"),"application/octet-stream"));
test("reverse",()=>assert.equal(extensionForMime("application/json"),".json"));
