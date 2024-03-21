CREATE TABLE code_snippets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    code_language VARCHAR(50) NOT NULL,
    stdin TEXT NOT NULL,
    source_code TEXT NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
