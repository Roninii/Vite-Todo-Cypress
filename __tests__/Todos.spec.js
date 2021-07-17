import { mount } from "@cypress/vue";
import Todos from "../src/components/Todos.vue";
import Todo from "../src/components/Todo.vue";

describe("Todos component", () => {
  it("renders a list of Todos", () => {
    mount(Todos, {
      props: {
        todos: [
          { id: 0, text: "Test with Cypress" },
          { id: 1, text: "Be awesome" },
        ],
      },
    });

    cy.findAllByRole("listitem").should("have.length", 2);
  });
});
