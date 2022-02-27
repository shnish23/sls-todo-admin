USE analysis;

CREATE TABLE Todo (
  id varchar(36) NOT NULL PRIMARY KEY,
  text varchar(1000) NOT NULL,
  checked char(1) NOT NULL,
  createdAt varchar(13) NOT NULL,
  updatedAt varchar(13) NOT NULL
)