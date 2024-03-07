const express = require('express');
const multer = require('multer');
const cors = require('cors');
const { analyzeSmartContract } = require('./services/mockAIAnalysis');

const app = express();
const upload = multer({ dest: 'uploads/' });

// Middleware
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('Smart Contract Auditor Backend is running');
});

// Consolidated /api/audit route for handling file uploads and mock analysis
app.post('/api/audit', upload.single('smartContract'), async (req, res) => {
    console.log(req.file);
    const analysisResult = await analyzeSmartContract(req.file);
    res.json(analysisResult);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
