import { counterStore } from "@/store/counterStore";

describe("prebar la store de forma aislada", () => {
  afterEach(() => {
    counterStore.handleReset();
  });

  it("aumentar store en 1", () => {
    counterStore.handleAdd();
    expect(counterStore.count).toBe(1);
  });

  it("disminuir store en 1", () => {
    counterStore.handleDis();
    expect(counterStore.count).toBe(-1);
  });
});
