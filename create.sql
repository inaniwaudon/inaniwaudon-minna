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

CREATE TABLE tanka_reaction(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  tanka_id INTEGER NOT NULL,
  ip TEXT NOT NULL,
  reaction TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (DATETIME('now', 'localtime')),
  FOREIGN KEY (tanka_id) REFERENCES tanka(id)
);
