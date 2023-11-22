CREATE TABLE tanka(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  tanka TEXT NOT NULL,
  name TEXT NOT NULL,
  ip TEXT NOT NULL,
  comment TEXT,
  supplement TEXT,
  deleted_at TEXT,
  created_at TEXT NOT NULL DEFAULT (DATETIME('now', 'localtime'))
);
