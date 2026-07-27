import { fallbackEmail, fallbackMessage, prospectiveQa } from "../content/prospectiveQa.mjs";

const chinesePattern = /[\u3400-\u9fff]/;

function normalize(value) {
  return value
    .toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/[^a-z0-9\u3400-\u9fff-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function containsTerm(question, term) {
  return question.includes(normalize(term));
}

function signatureScore(question, signature) {
  if (!signature.every((group) => group.some((term) => containsTerm(question, term)))) {
    return 0;
  }

  return signature.reduce((score, group) => {
    const longestMatch = Math.max(
      ...group.filter((term) => containsTerm(question, term)).map((term) => normalize(term).length)
    );
    return score + 10 + Math.min(longestMatch, 12);
  }, 0);
}

function fallback(language, reason = "unsupported") {
  return {
    matched: false,
    language,
    reason,
    message: fallbackMessage,
    email: fallbackEmail
  };
}

export function detectQuestionLanguage(question) {
  return chinesePattern.test(question) ? "zh" : "en";
}

export function answerQuestion(question, knowledgeBase = prospectiveQa) {
  const language = detectQuestionLanguage(question);
  const normalizedQuestion = normalize(question);

  if (!normalizedQuestion) {
    return fallback(language, "empty");
  }

  const requiresConfirmation = knowledgeBase.some((entry) => {
    const blockedTerms = entry.fallbackIfContains?.[language] ?? [];
    return blockedTerms.some((term) => containsTerm(normalizedQuestion, term));
  });
  if (requiresConfirmation) {
    return fallback(language, "confirmation-required");
  }

  const ranked = knowledgeBase
    .map((entry) => {
      const signatures = entry.signatures?.[language] ?? [];
      const score = Math.max(0, ...signatures.map((signature) => signatureScore(normalizedQuestion, signature)));
      return { entry, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);

  if (ranked.length === 0) {
    return fallback(language);
  }

  const [best, second] = ranked;
  if (second && second.score === best.score && second.entry.id !== best.entry.id) {
    return fallback(language, "conflict");
  }

  return {
    matched: true,
    language,
    id: best.entry.id,
    answer: best.entry.answers[language],
    source: best.entry.source
  };
}
