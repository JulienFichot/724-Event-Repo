import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";
// import { useData } from "../../contexts/DataContext";

describe("When Form is created", () => {
  it("displays a list of fields card", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("displays the success message", async () => {
      render(<Home />);
      fireEvent.click(await screen.findByText("Envoyer"));
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });
});

describe("When a page is created", () => {
  it("displays a list of events", () => {
    // to implement
  });
  it("displays a list of people", () => {
    // to implement
  });
  it("displays a footer", () => {
    // to implement
  });
  it("displays an event card with the last event", () => {
    // const { last } = useData();
    // const eventCard = document.querySelector(".EventCard--small");
    // const title = eventCard.querySelector(".EventCard__title");
    // const date = eventCard.querySelector(".EventCard__month");
    // const image = eventCard.querySelector('[data-testid="card-image-testid"]');
    // expect(title.textContent).toBe(last.title);
    // expect(date.textContent).toBe(last.date);
    // expect(image.src).toBe(last.cover);
    // expect(image.alt).toBe(last.title);
  });
});
