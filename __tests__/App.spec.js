import { mount } from "@cypress/vue";
import App from "../src/App.vue";

describe("App", () => {
  it(`renders a message of 'Todo'`, () => {
    mount(App);

    cy.get("h1").contains("Todo");
  });

  it(`renders an input component`, () => {
    mount(App);

    cy.findByRole("textbox");
  });

  it(`adds a todo when the user types one and hits 'enter'`, () => {
    mount(App);
    cy.findByRole("textbox").type("Test with Cypress {enter}");
    cy.findAllByRole("listitem").first().contains("Test with Cypress");
  });

  it(`removes a todo when one is clicked`, () => {
    mount(App);
    cy.findAllByRole("listitem").should("have.length", 2);
    cy.findAllByRole("listitem").last().click();
    cy.findAllByRole("listitem").should("have.length", 1);
  });

  it(`should display the message 'That's all for today!' when there are no todos left`, () => {
    mount(App);
    cy.findAllByRole("listitem").each((todo) => todo.click());
    cy.findByText(`That's all for today!`);
  });
});
