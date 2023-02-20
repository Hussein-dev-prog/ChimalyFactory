-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 11, 2023 at 07:10 PM
-- Server version: 8.0.27
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chimalyfact`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'Doors'),
(2, 'shelves'),
(3, 'Windows'),
(4, 'Tables'),
(5, 'Tent');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` varchar(250) NOT NULL,
  `cid` int NOT NULL,
  `image` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cid` (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `description`, `cid`, `image`) VALUES
(12, 'Door1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae aliquet orci. Nam urna nisi, pulvinar vitae leo eu, imperdiet vulputate elit. Vivamus quam justo, commodo nec erat et, scelerisque condimentum purus. Praesent ultricies arcu quis', 1, 'door2.jpg'),
(13, 'Table2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae aliquet orci. Nam urna nisi, pulvinar vitae leo eu, imperdiet vulputate elit. Vivamus quam justo, commodo nec erat et, scelerisque condimentum purus. Praesent ultricies arcu quis', 2, 'table2.jpg'),
(14, 'Window1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae aliquet orci. Nam urna nisi, pulvinar vitae leo eu, imperdiet vulputate elit. Vivamus quam justo, commodo nec erat et, scelerisque condimentum purus. Praesent ultricies arcu quis', 3, 'window1.jpg');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`cid`) REFERENCES `category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
