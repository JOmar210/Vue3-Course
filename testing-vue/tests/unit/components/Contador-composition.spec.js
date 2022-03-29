import { mount } from "@vue/test-utils";
import Contador from "@/components/Contador-composition.vue";

describe("pruebas al Composition API", () => {
  it("renderiza el contador en 0", () => {
    const wrapper = mount(Contador);

    expect(wrapper.find("h1").text()).toBe("Counter: 0");
  });

  it("Aumenta el contador en 1", async () => {
    const wrapper = mount(Contador);

    await wrapper.find("button#add-compo").trigger("click");

    expect(wrapper.find("h1").text()).toBe("Counter: 1");
  });

  it("Disminuye el contador en 1", async () => {
    const wrapper = mount(Contador);

    await wrapper.find("button#dis-compo").trigger("click");

    expect(wrapper.find("h1").text()).toBe("Counter: 0");
  });

  it("Aumenta y disminuye como una porsona lo haria en el contador", async () => {
    const wrapper = mount(Contador);

    await wrapper.find("button#add-compo").trigger("click");
    expect(wrapper.find("h1").text()).toBe("Counter: 1");

    await wrapper.find("button#dis-compo").trigger("click");
    expect(wrapper.find("h1").text()).toBe("Counter: 0");

    await wrapper.find("button#add-compo").trigger("click");
    await wrapper.find("button#add-compo").trigger("click");
    await wrapper.find("button#add-compo").trigger("click");
    await wrapper.find("button#add-compo").trigger("click");
    expect(wrapper.find("h1").text()).toBe("Counter: 4");

    await wrapper.find("button#dis-compo").trigger("click");
    await wrapper.find("button#dis-compo").trigger("click");
    await wrapper.find("button#dis-compo").trigger("click");
    await wrapper.find("button#dis-compo").trigger("click");
    await wrapper.find("button#dis-compo").trigger("click");
    await wrapper.find("button#dis-compo").trigger("click");
    expect(wrapper.find("h1").text()).toBe("Counter: -2");
  });
});
