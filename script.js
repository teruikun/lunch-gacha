const lunchOptions = [
  "カレーライス",
  "うどん",
  "牛丼",
  "ラーメン",
  "パスタ",
  "唐揚げ定食",
  "ハンバーガー",
  "サンドイッチ",
  "オムライス",
  "冷やし中華"
];

document.getElementById("gacha-button").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * lunchOptions.length);
  const result = lunchOptions[randomIndex];
  document.getElementById("result").textContent = `今日の昼ごはんは… ${result}！`;
});
