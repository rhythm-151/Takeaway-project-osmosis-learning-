const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

mongoose.connect(
  "mongodb+srv://rhythmy082:RU3zYWI5eHpR67V8@cluster.wazyi1l.mongodb.net/REAL-TIME?retryWrites=true&w=majority",
   {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
console.log("Database Connected Successfully !!")

const assetSchema = new mongoose.Schema({
  asset_title: { type: String, required: true },
  date: { type: String, required: true },
  file_type: { type: String, required: true },
});

const Asset = mongoose.model('Asset', assetSchema);

app.use(cors());
app.use(express.json());


const insertSampleData = async () => {
  try {
    await Asset.insertMany([
      { asset_title: 'Asset1',  file_type: 'file1.pdf', date: '2023-07-18', },
      { asset_title: 'Asset2', file_type: 'file2.png' , date: '2023-07-17',},
      { asset_title: 'Asset3', file_type: 'file3.docx',date: '2023-07-16' },
    ]);
  } catch (err) {
    console.error('Error inserting sample data:', err);
  }
};

app.get('/assets', async (req, res) => {
  try {
    const assets = await Asset.find();
    res.json(assets);
  } catch (err) {
    console.error('Error retrieving assets:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

insertSampleData();
