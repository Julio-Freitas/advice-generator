import { animateSkeleton } from "./animateSkeleton.js";
import { getAdvice } from "./api.js";

const elements = {
  button: document.querySelector("button.advice-btn"),
  adviceText: document.querySelector(".wrapper-advice .advice-text"),
  adviceTitle: document.querySelector(".wrapper-advice  .advice-title"),
  spanTitleId: document.querySelector(".wrapper-advice .advice-title-number"),
};

async function adviceInnerText() {
  try {
    animateSkeleton({ add: true, elements });
    const { id, advice } = await getAdvice();
    elements.adviceText.textContent = advice;
    elements.spanTitleId.textContent = `#${id}`;
  } catch (error) {
  } finally {
    animateSkeleton({ add: false, elements });
  }
}

async function _hadnleClickButton() {
  adviceInnerText();
}

function initialize() {
  adviceInnerText();
  elements.button.addEventListener("click", _hadnleClickButton);
}

window.document.addEventListener("DOMContentLoaded", initialize);
