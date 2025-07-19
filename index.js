const express = require("express");
const cors = require("cors");
const faq = require("./faq.json");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/chat", (req, res) => {
  const { message } = req.body;

  const reply = faq[message.toLowerCase()] || "Sorry, I didn't understand that. Please contact support.";
  res.json({ reply });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Chat assistant running on port ${PORT}`);
});
