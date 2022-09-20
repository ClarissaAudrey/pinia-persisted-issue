import { shallowMount } from "@vue/test-utils";
import WelcomeFriz from "@/components/WelcomeFriz.vue";

describe("WelcomeFriz.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(WelcomeFriz, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
