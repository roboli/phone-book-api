CREATE TABLE contacts (
  id INT AUTO_INCREMENT,
  uid VARCHAR(50) NOT NULL,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone_work VARCHAR(100),
  phone_home VARCHAR(100),
  phone_mobile VARCHAR(100),
  phone_other VARCHAR(100),
  address VARCHAR(500),
  PRIMARY KEY (id),
  UNIQUE KEY (uid)
) ENGINE=INNODB CHARACTER SET=utf8mb4;
