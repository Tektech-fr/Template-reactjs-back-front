DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(100) NULL,
  `password` VARCHAR(50) NOT NULL,
  `mail` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(20) NULL
) ENGINE=InnoDB;

LOCK TABLES `user` WRITE;
INSERT INTO `user` (`name`, `password`, `mail`, `phone`) VALUES
("JohnA", "Iamthebest", "JohnA@company.com", "+33111111111"),
("JohnB", "Iamthebest", "JohnB@company.com", "+33222222222"),
("JohnC", "Iamthebest", "JohnC@company.com", "+33333333333"),
("JohnD", "Iamthebest", "JohnD@company.com", "+33444444444"),
("JohnE", "Iamthebest", "JohnE@company.com", "+33555555555");
UNLOCK TABLES;