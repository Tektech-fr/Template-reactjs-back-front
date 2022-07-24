DROP TABLE IF EXISTS `users`;
DROP TABLE IF EXISTS `roles`;

-- ------------------------------------------------------------------------- --
--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL
) ENGINE=InnoDB;

--
-- Content for table `roles`
--

LOCK TABLES `roles` WRITE;
INSERT INTO `roles` (`name`) VALUES
("registered"),
("admin");
UNLOCK TABLES;

-- ------------------------------------------------------------------------- --
--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `firstname` VARCHAR(100) NOT NULL,
  `lastname` VARCHAR(100) NULL,
  `nickname` VARCHAR(100) NULL,
  `password` VARCHAR(50) NOT NULL,
  `email` VARCHAR(255) NULL,
  `phone` VARCHAR(20) NULL,
  `role_id` INT NULL,

  FOREIGN KEY (role_id) REFERENCES roles(id)
) ENGINE=InnoDB;

--
-- Content for table `users`
--

LOCK TABLES `users` WRITE;
INSERT INTO `users` (`firstname`, `lastname`, `nickname`, `password`, `email`, `phone`, `role_id`) VALUES
("JohnA", "SmithA", "Bob", "Iamthebest", "JohnA@company.com", "+33111111111", 2),
("JohnB", "SmithB", "Bob", "Iamthebest", "JohnB@company.com", "+33222222222", 1),
("JohnC", "SmithC", "Bob", "Iamthebest", "JohnC@company.com", "+33333333333", NULL),
("JohnD", "SmithD", "Bob", "Iamthebest", "JohnD@company.com", "+33444444444", NULL),
("JohnE", "SmithE", "Bob", "Iamthebest", "JohnE@company.com", "+33555555555", NULL);
UNLOCK TABLES;