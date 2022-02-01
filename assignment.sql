-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 01, 2022 at 11:37 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.4.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `assignment`
--

-- --------------------------------------------------------

--
-- Table structure for table `productimages`
--

CREATE TABLE `productimages` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `productimages`
--

INSERT INTO `productimages` (`id`, `product_id`, `image`, `createdAt`, `updatedAt`) VALUES
(1, 8, 'assets\\image-1643709302446.png', '2022-02-01 09:55:02', '2022-02-01 09:55:02'),
(2, 8, 'assets\\image-1643709302441.png', '2022-02-01 09:55:02', '2022-02-01 09:55:02'),
(3, 8, 'assets\\image-1643709302447.png', '2022-02-01 09:55:02', '2022-02-01 09:55:02'),
(11, 11, 'assets\\image-1643711214316.png', '2022-02-01 10:26:54', '2022-02-01 10:26:54');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `discount` float NOT NULL,
  `view` int(11) NOT NULL,
  `active` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `description`, `brand`, `type`, `price`, `discount`, `view`, `active`, `createdAt`, `updatedAt`) VALUES
(1, 'test', 'test desc', 'brand', 'cat', 10, 10, 4, 1, '2022-01-29 16:07:49', '2022-02-01 06:55:55'),
(2, 'title2', 'desc2 ', 'brand2', 'type2', 20, 5, 1, 1, '2022-01-31 11:48:13', '2022-01-31 11:48:13'),
(3, 'title3', 'desc3', 'brand3', 'type3', 300, 3, 4, 1, '2022-01-31 11:48:13', '2022-01-31 11:48:13'),
(4, 'title5', 'desc5', 'brand5', 'type5', 500, 5, 0, 1, '2022-02-01 09:46:22', '2022-02-01 09:46:22'),
(5, 'title5', 'desc5', 'brand5', 'type5', 500, 5, 0, 1, '2022-02-01 09:47:52', '2022-02-01 09:47:52'),
(6, 'title5', 'desc5', 'brand5', 'type5', 500, 5, 0, 1, '2022-02-01 09:50:17', '2022-02-01 09:50:17'),
(7, 'title5', 'desc5', 'brand5', 'type5', 500, 5, 0, 1, '2022-02-01 09:51:13', '2022-02-01 09:51:13'),
(8, 'title5', 'desc5', 'brand5', 'type5', 500, 5, 0, 1, '2022-02-01 09:52:29', '2022-02-01 09:52:29'),
(9, 'title5', 'desc5', 'brand5', 'type5', 500, 5, 0, 1, '2022-02-01 09:54:50', '2022-02-01 09:54:50'),
(10, 'title5', 'desc5', 'brand5', 'type5', 500, 5, 0, 1, '2022-02-01 09:55:02', '2022-02-01 09:55:02'),
(11, 'title11', 'description11', 'brand11', 'type11', 1100, 12, 0, 1, '2022-02-01 10:01:59', '2022-02-01 10:26:54');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `role` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `role`, `name`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', 'alakh', 'alakh@binmile.com', '$2a$08$pHZXc8hQgRIhSWaQsH9BYe688KVFY9j3wH79Xx3XGOCMrNU0uBoym', '2022-01-28 10:38:49', '2022-01-28 10:38:49'),
(2, 'user', 'amit', 'amit@binmile.com', '$2a$08$cYGrav5mO6SAMhd/Nx83GejkBr8/TsSkzS5vKCn2OetGt2FR/VzQO', '2022-01-28 10:39:15', '2022-01-28 10:39:15'),
(3, 'user', 'sumit', 'sumit@binmile.com', '$2a$08$WmepjFvKkp9kZliwAkuqduMBZo1brh36bvAet8QGfqrXRqQV8QbZ.', '2022-01-28 11:53:13', '2022-01-28 11:53:13'),
(4, 'user', 'rajat', 'rajat@binmile.com', '$2a$08$G0RGRUK9PlweaK1IXybRx.XlZGt.LwoeNGMbYcgYALAAq7HRaAmiC', '2022-02-01 06:43:30', '2022-02-01 06:43:30');

-- --------------------------------------------------------

--
-- Table structure for table `wishlists`
--

CREATE TABLE `wishlists` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `wishlists`
--

INSERT INTO `wishlists` (`id`, `user_id`, `product_id`, `createdAt`, `updatedAt`) VALUES
(4, 2, 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 1, 3, '2022-01-31 05:27:36', '2022-01-31 05:27:36'),
(6, 2, 1, '2022-01-31 05:56:29', '2022-01-31 05:56:29'),
(7, 2, 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 3, 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 2, 1, '2022-02-01 07:05:53', '2022-02-01 07:05:53');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `productimages`
--
ALTER TABLE `productimages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wishlists`
--
ALTER TABLE `wishlists`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `productimages`
--
ALTER TABLE `productimages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `wishlists`
--
ALTER TABLE `wishlists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
