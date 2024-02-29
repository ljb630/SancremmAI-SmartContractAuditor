const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Smart Contract Auditor Backend is running');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
const auditRoutes = require('./src/routes/auditRoutes');

app.use('/api', auditRoutes);
const cors = require('cors');
app.use(cors());
