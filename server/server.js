import app from './app.js';

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Server running on port ${PORT}`));