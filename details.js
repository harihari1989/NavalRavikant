const detailPdfPath = "Eric-Jorgenson_The-Almanack-of-Naval-Ravikant_Final.pdf";

const topicDetails = [
  {
    id: "wealth-creation",
    track: "wealth",
    label: "Wealth",
    title: "Wealth Creation",
    page: 30,
    core: "Wealth comes from creating something valuable, knowing where to apply effort, and building a skill set that can travel with you.",
    leverage: "It shifts the goal from working harder to understanding where ownership, timing, and relationships produce asymmetric returns.",
    practice: "Audit your current work for value creation, ownership, and market pull. Move toward problems where your decisions matter more than your hours.",
    trap: "Confusing long hours with wealth creation keeps you busy but leaves you with no compounding asset."
  },
  {
    id: "specific-knowledge",
    track: "wealth",
    label: "Wealth",
    title: "Specific Knowledge",
    page: 40,
    core: "The most durable edge usually sits at the intersection of curiosity, obsession, and capabilities that cannot be standardized easily.",
    leverage: "When a skill is both rare and authentic to you, competition thins out and pricing power increases.",
    practice: "Notice what feels natural, what people repeatedly ask you for, and what you would still study without external pressure.",
    trap: "Borrowed ambition creates generic skills. You look credentialed, but you are still replaceable."
  },
  {
    id: "long-term-games",
    track: "wealth",
    label: "Wealth",
    title: "Long-Term Games",
    page: 46,
    core: "Compounding only works if you stay in the game long enough and keep working with people who think in similarly long arcs.",
    leverage: "Trust, reputation, and repeated collaboration create opportunities that no single transaction can unlock.",
    practice: "Choose projects and partnerships you would still be happy owning ten years from now, then behave accordingly.",
    trap: "Short-term players create hidden taxes: broken trust, low-quality deals, and constant reset costs."
  },
  {
    id: "accountability",
    track: "wealth",
    label: "Wealth",
    title: "Accountability",
    page: 50,
    core: "Taking responsibility under your own name increases both risk and upside, which is exactly why it matters.",
    leverage: "Credibility becomes an asset. People extend trust, capital, and responsibility toward someone who consistently delivers.",
    practice: "Make fewer promises, state them clearly, and finish what you start in visible ways that can be remembered.",
    trap: "Hiding behind committees or ambiguity avoids downside, but it also blocks upside and reputation growth."
  },
  {
    id: "equity",
    track: "wealth",
    label: "Wealth",
    title: "Ownership and Equity",
    page: 53,
    core: "Income keeps you moving; ownership is what lets results continue after your direct effort stops.",
    leverage: "Equity converts contribution into participation in future upside, which is how real wealth compounds.",
    practice: "Bias toward roles, products, businesses, or investments where your upside is tied to the system you are building.",
    trap: "Mistaking salary growth for wealth can leave you highly paid but structurally dependent on constant effort."
  },
  {
    id: "leverage",
    track: "wealth",
    label: "Wealth",
    title: "Leverage",
    page: 55,
    core: "Modern leverage comes from tools that scale: code, media, products, capital, and teams aligned behind a strong thesis.",
    leverage: "A good decision can now affect thousands or millions of people without linear labor growth.",
    practice: "Build once, distribute widely, and choose mediums where the next increment of work can reach far beyond one client or one meeting.",
    trap: "Leverage magnifies mistakes too. Bad judgment at scale is just faster failure."
  },
  {
    id: "judgment",
    track: "judgment",
    label: "Judgment",
    title: "Judgment",
    page: 67,
    core: "Once leverage exists, the quality of decisions matters more than raw effort or speed.",
    leverage: "The market pays disproportionately for people who can repeatedly choose the right direction under uncertainty.",
    practice: "Study consequences, avoid catastrophic loss, and treat judgment as a trainable asset rather than a personality trait.",
    trap: "Overconfidence turns leverage into fragility. One reckless bet can wipe out years of patient work."
  },
  {
    id: "focus-play",
    track: "judgment",
    label: "Judgment",
    title: "Focus and Play",
    page: 69,
    core: "Deep focus and a sense of play keep you in hard work long enough to become exceptional.",
    leverage: "Attention is scarce. People who can concentrate on the right thing for the right duration generate nonlinear output.",
    practice: "Reduce obligations, defend uninterrupted time, and choose problem spaces where your curiosity makes repetition sustainable.",
    trap: "Busywork creates the feeling of motion while quietly replacing depth with noise."
  },
  {
    id: "clear-thinking",
    track: "judgment",
    label: "Judgment",
    title: "Clear Thinking",
    page: 95,
    core: "Clarity comes from building ideas from first principles and testing them instead of memorizing other people's conclusions.",
    leverage: "Better thinking improves direction before effort is applied, which is why it compounds across every domain.",
    practice: "Read broadly, write your reasoning down, and challenge fuzzy beliefs until they either sharpen or collapse.",
    trap: "Borrowed language can mimic intelligence while hiding that you have not actually done the thinking."
  },
  {
    id: "happiness",
    track: "happiness",
    label: "Happiness",
    title: "Happiness as a Skill",
    page: 128,
    core: "Happiness is not only luck or temperament. It can be trained deliberately through habits, awareness, and better defaults.",
    leverage: "A calmer baseline improves relationships, health, and decision quality without requiring external wins every week.",
    practice: "Treat peace like fitness: something to practice regularly instead of something to expect from future success.",
    trap: "Outsourcing happiness to money, status, or future milestones creates endless dependency on changing conditions."
  },
  {
    id: "presence",
    track: "happiness",
    label: "Happiness",
    title: "Presence and Desire",
    page: 134,
    core: "Peace becomes more available when attention returns to the present and desire stops multiplying faster than life can satisfy it.",
    leverage: "Less comparison and less craving free up energy that can be invested into better work, cleaner relationships, and steadier judgment.",
    practice: "Reduce vice loops, notice comparison triggers, and question whether each new want is worth the internal cost.",
    trap: "If every desire becomes a contract for future satisfaction, success only expands the list of things that can disturb you."
  },
  {
    id: "save-yourself",
    track: "self",
    label: "Self",
    title: "Save Yourself",
    page: 157,
    core: "No outside system can do the inner work for you. Health, self-respect, and discipline are personal responsibilities.",
    leverage: "Self-authorship removes learned helplessness and builds a stronger operating system for every other ambition.",
    practice: "Own your routines, boundaries, body, and standards before searching for a new guru, framework, or optimization trick.",
    trap: "Waiting for the perfect mentor or environment often becomes a polite form of avoidance."
  },
  {
    id: "mental-strength",
    track: "self",
    label: "Self",
    title: "Mental Strength and Growth",
    page: 168,
    core: "Meditation, reading, math, persuasion, and environment design all strengthen the mind's ability to act intentionally.",
    leverage: "A better baseline mind makes better decisions automatically, which is more powerful than relying on motivation spikes.",
    practice: "Train attention, choose environments that reward the person you want to become, and revisit timeless material until it changes behavior.",
    trap: "Relying on willpower alone ignores how heavily your surroundings and habits program your future choices."
  },
  {
    id: "philosophy",
    track: "philosophy",
    label: "Philosophy",
    title: "Philosophy of Time",
    page: 194,
    core: "Questions about meaning, mortality, truth, and the present moment are not decorative. They decide how you allocate a life.",
    leverage: "Remembering that time is finite makes it easier to reject shallow status games and choose deeper commitments.",
    practice: "Use mortality as a sorting function: ask what still matters when applause, urgency, and comparison are removed.",
    trap: "Borrowed meaning leads to drift. If your priorities were inherited blindly, your calendar will eventually expose it."
  }
];

const detailGrid = document.getElementById("detailGrid");
const yearPills = document.getElementById("yearPills");
const detailSearch = document.getElementById("detailSearch");
const focusArea = document.getElementById("focusArea");
const sortOrder = document.getElementById("sortOrder");

const state = {
  query: "",
  track: "all",
  sort: "asc"
};

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const searchableText = (item) =>
  [item.label, item.title, item.core, item.leverage, item.practice, item.trap].join(" ").toLowerCase();

const getFilteredItems = () => {
  const query = state.query.trim().toLowerCase();

  return [...topicDetails]
    .filter((item) => (state.track === "all" ? true : item.track === state.track))
    .filter((item) => (query ? searchableText(item).includes(query) : true))
    .sort((a, b) => (state.sort === "desc" ? b.page - a.page : a.page - b.page));
};

const renderYearPills = () => {
  if (!yearPills) {
    return;
  }

  yearPills.innerHTML = [...topicDetails]
    .sort((a, b) => a.page - b.page)
    .map(
      (item) => `
        <button class="year-pill" type="button" data-pill-id="${item.id}">
          ${escapeHtml(item.title)}
        </button>
      `
    )
    .join("");
};

const renderCards = () => {
  if (!detailGrid) {
    return;
  }

  const items = getFilteredItems();

  if (!items.length) {
    detailGrid.innerHTML = `
      <article class="detail-card">
        <div class="detail-head">
          <div class="detail-year-wrap">
            <p class="year">No matches</p>
            <h3 class="detail-year">Try a different search term or track</h3>
          </div>
        </div>
      </article>
    `;
    return;
  }

  detailGrid.innerHTML = items
    .map(
      (item) => `
        <article class="detail-card" id="topic-${item.id}">
          <div class="detail-head">
            <div class="detail-year-wrap">
              <p class="year">${escapeHtml(item.label)}</p>
              <h3 class="detail-year">${escapeHtml(item.title)}</h3>
              <p class="detail-page">PDF start page: ${item.page}</p>
            </div>
            <a
              class="detail-link"
              href="${detailPdfPath}#page=${item.page}&view=FitH"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open PDF
            </a>
          </div>
          <div class="detail-sections">
            <section class="section-block">
              <h3>Core Idea</h3>
              <p>${escapeHtml(item.core)}</p>
            </section>
            <section class="section-block">
              <h3>Compounding Edge</h3>
              <p>${escapeHtml(item.leverage)}</p>
            </section>
            <section class="section-block">
              <h3>Put It To Work</h3>
              <p>${escapeHtml(item.practice)}</p>
            </section>
            <section class="section-block">
              <h3>Common Trap</h3>
              <p>${escapeHtml(item.trap)}</p>
            </section>
          </div>
        </article>
      `
    )
    .join("");
};

if (detailGrid) {
  renderYearPills();
  renderCards();

  detailSearch?.addEventListener("input", (event) => {
    state.query = event.target.value || "";
    renderCards();
  });

  focusArea?.addEventListener("change", (event) => {
    state.track = event.target.value || "all";
    renderCards();
  });

  sortOrder?.addEventListener("change", (event) => {
    state.sort = event.target.value === "desc" ? "desc" : "asc";
    renderCards();
  });

  yearPills?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-pill-id]");
    if (!button) {
      return;
    }

    const id = button.getAttribute("data-pill-id");
    const item = topicDetails.find((entry) => entry.id === id);
    if (!item) {
      return;
    }

    state.query = item.title;
    state.track = item.track;
    if (detailSearch) {
      detailSearch.value = item.title;
    }
    if (focusArea) {
      focusArea.value = item.track;
    }
    renderCards();
    document.getElementById(`topic-${item.id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}
