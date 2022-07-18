DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `firstname` VARCHAR(100) NOT NULL,
  `lastname` VARCHAR(100) NULL,
  `password` VARCHAR(50) NOT NULL,
  `email` VARCHAR(255) NULL,
  `phone` VARCHAR(20) NULL
) ENGINE=InnoDB;

LOCK TABLES `users` WRITE;
INSERT INTO `users` (`firstname`, `lastname`,`password`, `email`, `phone`) VALUES
("JohnA", "SmithA", "Iamthebest", "JohnA@company.com", "+33111111111"),
("JohnB", "SmithB", "Iamthebest", "JohnB@company.com", "+33222222222"),
("JohnC", "SmithC", "Iamthebest", "JohnC@company.com", "+33333333333"),
("JohnD", "SmithD", "Iamthebest", "JohnD@company.com", "+33444444444"),
("JohnE", "SmithE", "Iamthebest", "JohnE@company.com", "+33555555555");
UNLOCK TABLES;