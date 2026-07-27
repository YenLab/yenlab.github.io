import assert from "node:assert/strict";
import test from "node:test";

import { answerQuestion } from "../src/utils/qaMatcher.mjs";

test("answers a supported Chinese question", () => {
  const result = answerQuestion("没有编程经验能不能加入实验室？");
  assert.equal(result.matched, true);
  assert.equal(result.id, "prior-experience");
  assert.match(result.answer, /不需要已有经验/);
});

test("answers a supported English paraphrase in English", () => {
  const result = answerQuestion("What tools do students need to learn?");
  assert.equal(result.matched, true);
  assert.equal(result.id, "software");
  assert.equal(result.language, "en");
  assert.match(result.answer, /EndNote or Zotero/);
  assert.match(result.answer, /DeepSeek or Kimi/);
});

test("answers the CET-6 graduation requirement without inventing admission criteria", () => {
  const result = answerQuestion("英语六级需要通过吗？");
  assert.equal(result.matched, true);
  assert.equal(result.id, "joining-prerequisites");
  assert.match(result.answer, /毕业要求需要通过英语六级/);
});

test("falls back for an unsupported question", () => {
  const result = answerQuestion("实验室附近的房租是多少？");
  assert.equal(result.matched, false);
  assert.equal(result.reason, "unsupported");
  assert.equal(result.email, "kuangyuyen@ihcams.ac.cn");
});

test("falls back when current collaboration status is requested", () => {
  const result = answerQuestion("目前有哪些国外合作对象？");
  assert.equal(result.matched, false);
  assert.equal(result.reason, "confirmation-required");
});

test("falls back when formal admissions policy is requested", () => {
  const result = answerQuestion("学校正式招生政策是什么？");
  assert.equal(result.matched, false);
  assert.equal(result.reason, "confirmation-required");
});

test("falls back when two knowledge-base entries conflict at the same score", () => {
  const conflictingKnowledgeBase = [
    {
      id: "one",
      answers: { en: "One", zh: "一" },
      source: "Fixture one",
      signatures: { en: [[["shared"], ["question"]]], zh: [] }
    },
    {
      id: "two",
      answers: { en: "Two", zh: "二" },
      source: "Fixture two",
      signatures: { en: [[["shared"], ["question"]]], zh: [] }
    }
  ];

  const result = answerQuestion("A shared question", conflictingKnowledgeBase);
  assert.equal(result.matched, false);
  assert.equal(result.reason, "conflict");
});

test("fallback preserves the required message and confirmed email address", () => {
  const result = answerQuestion("Do you provide housing?");
  assert.equal(
    result.message,
    "这个问题暂时没有明确的预设答案，欢迎通过电子邮件联系我："
  );
  assert.equal(result.email, "kuangyuyen@ihcams.ac.cn");
});
