import { test } from "tap";
import { build } from "../helper";

test("pets is loaded", async (t) => {
    const app = await build(t);

    const res = await app.inject({
        url: "/pets",
    });

    t.same(JSON.parse(res.payload), [
        { id: 1, name: "dog", tag: "animal" },
        { id: 2, name: "cat", tag: "animal" },
    ]);
});
