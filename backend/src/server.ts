import app from "./app.js";

const PORT = 3001;

app.listen(PORT, () => {
  console.log(
    `🚀 Atlas backend running at http://localhost:${PORT}`
  );
});