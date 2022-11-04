export function animateSkeleton({ add = false, elements }) {
  if (add) {
    elements.adviceText.classList.add("skeleton");
    elements.adviceTitle.classList.add("skeleton");
    return;
  }
  elements.adviceText.classList.remove("skeleton");
  elements.adviceTitle.classList.remove("skeleton");
}
