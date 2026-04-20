const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");
const navLinks = Array.from(document.querySelectorAll(".main-nav a"));
const revealEls = document.querySelectorAll(".reveal");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.16 }
);

revealEls.forEach((el) => revealObserver.observe(el));

const sectionIds = navLinks
  .map((link) => link.getAttribute("href"))
  .filter((href) => href && href.startsWith("#"))
  .map((id) => document.querySelector(id))
  .filter(Boolean);

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const current = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!current || !current.target.id) {
      return;
    }

    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${current.target.id}`;
      link.style.color = isActive ? "var(--brand-deep)" : "";
      link.style.textDecoration = isActive ? "underline" : "";
      link.style.textUnderlineOffset = isActive ? "0.2rem" : "";
    });
  },
  { rootMargin: "-35% 0px -55% 0px", threshold: [0.25, 0.5, 0.75] }
);

sectionIds.forEach((section) => sectionObserver.observe(section));

const pdfPath = "Eric-Jorgenson_The-Almanack-of-Naval-Ravikant_Final.pdf";
const chapterSelect = document.getElementById("chapterSelect");
const letterViewer = document.getElementById("letterViewer");
const viewerMeta = document.getElementById("viewerMeta");
const openPdfTab = document.getElementById("openPdfTab");
const chapterJumpLinks = Array.from(document.querySelectorAll("[data-chapter-jump]"));
const archiveCards = Array.from(document.querySelectorAll(".archive-card"));

const setActiveArchiveCard = (key) => {
  archiveCards.forEach((card) => {
    const isActive = card.getAttribute("data-chapter") === key;
    card.classList.toggle("is-active", isActive);
  });
};

const setViewerChapter = (label, page, key) => {
  const safePage = Number(page) || 1;
  const safeLabel = label || "Selected chapter";
  const fragment = `#page=${safePage}&view=FitH`;

  if (letterViewer) {
    letterViewer.setAttribute("src", `${pdfPath}${fragment}`);
  }

  if (openPdfTab) {
    openPdfTab.setAttribute("href", `${pdfPath}${fragment}`);
  }

  if (viewerMeta) {
    viewerMeta.textContent = `Showing ${safeLabel} from page ${safePage}.`;
  }

  if (chapterSelect && key) {
    chapterSelect.value = key;
  }

  if (key) {
    setActiveArchiveCard(key);
  }
};

if (chapterSelect && letterViewer) {
  const initialOption = chapterSelect.options[chapterSelect.selectedIndex];
  const initialLabel = initialOption?.textContent?.split("·")[0]?.trim() || "Wealth Creation";
  const initialKey = initialOption?.value || "wealth-creation";
  const initialPage = initialOption?.dataset.page || "30";
  setViewerChapter(initialLabel, initialPage, initialKey);

  chapterSelect.addEventListener("change", (event) => {
    const option = event.target.selectedOptions?.[0];
    if (!option) {
      return;
    }
    const label = option.textContent?.split("·")[0]?.trim() || option.value;
    setViewerChapter(label, option.dataset.page, option.value);
  });

  chapterJumpLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const key = link.getAttribute("data-chapter-jump");
      const page = link.getAttribute("data-page");
      const label = link.getAttribute("data-label") || "Selected chapter";
      if (!key || !page) {
        return;
      }
      setViewerChapter(label, page, key);
    });
  });
}
