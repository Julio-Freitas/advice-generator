// Logic variables
const BASE_API = "https://api.adviceslip.com";

export async function getAdvice() {
  try {
    const optionsAPi = { method: "GET", mode: "cors", cache: "no-cache" };
    const resppnse = await fetch(`${BASE_API}/advice`, optionsAPi);
    if (!resppnse.ok) throw new Error();
    const { slip } = await resppnse.json();
    return slip;
  } catch (error) {
    return "Unexpected Error";
  }
}
