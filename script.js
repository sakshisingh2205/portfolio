const revealItems = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => observer.observe(item));

const projects = {
  smugglers: {
    label: "01 / Product alignment",
    title: "Smugglers — Alcohol Delivery Platform",
    summary: "A web and mobile alcohol delivery concept shaped from customer needs and competitive research.",
    contribution: "Acted as the business development and product-alignment partner: defined feature scope, translated requirements and connected the commercial opportunity to a feasible digital solution.",
    tags: ["Competitive analysis", "Feature scope", "Client requirements"]
  },
  vivid: {
    label: "02 / GTM & product planning",
    title: "Vivid Customs — Custom T-Shirt Commerce",
    summary: "A web and app platform for custom t-shirt design, supported by a practical plan for growth and delivery.",
    contribution: "Led B2B outreach and helped shape the feature plan around payment workflows, inventory management and market launch programs.",
    tags: ["B2B outreach", "Payments", "Inventory", "Launch planning"]
  },
  evarde: {
    label: "03 / Growth & feature definition",
    title: "eVarde — Product-Swapping Platform",
    summary: "A marketplace-style experience for people to discover products and create swap opportunities.",
    contribution: "Supported business strategy and documented the product features needed for real-time messaging and a clear swapping journey.",
    tags: ["Business strategy", "Real-time messaging", "Requirements"]
  },
  wardrobe: {
    label: "04 / Product roadmap",
    title: "Virtual Wardrobe — AR Fashion Try-On",
    summary: "An Android concept that lets people explore virtual try-ons and manage their wardrobe digitally.",
    contribution: "Drove outreach and requirements gathering for AR try-ons and wardrobe-management features, helping turn the idea into a product roadmap.",
    tags: ["AR product", "Android", "Roadmapping", "Requirements"]
  }
};

const dialog = document.querySelector("#project-dialog");
const openProject = (card) => {
  const project = projects[card.dataset.project];
  if (!project) return;
  document.querySelector("#dialog-label").textContent = project.label;
  document.querySelector("#dialog-title").textContent = project.title;
  document.querySelector("#dialog-summary").textContent = project.summary;
  document.querySelector("#dialog-contribution").textContent = project.contribution;
  document.querySelector("#dialog-tags").innerHTML = project.tags.map((tag) => `<span>${tag}</span>`).join("");
  dialog.showModal();
};

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", (event) => {
    if (event.target.closest("button") || event.currentTarget === event.target) openProject(card);
  });
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProject(card);
    }
  });
});
document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
