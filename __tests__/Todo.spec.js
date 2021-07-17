import { mount } from "@cypress/vue";
import Todo from "../src/components/Todo.vue";

describe("Todo component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Todo, {
      props: {
        todo: {
          id: 0,
          text: "Test with Cypress",
        },
      },
    });
  });

  it(`renders a todo with the text props.todo.text`, () => {
    cy.findByRole("listitem").contains("Test with Cypress");
  });
});
