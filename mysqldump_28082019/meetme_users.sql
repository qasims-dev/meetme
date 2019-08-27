-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: localhost    Database: meetme
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(32) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `lastName` varchar(32) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `password` varchar(60) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `image` varchar(45) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Ahmad','Qasim','aqasim81@gmail.com','meriyaad','public/aqasim81@gmail.com.png',0,'2017-06-15 09:34:21'),(3,'Tahirsss','Ahmadsss','teersss@gmail.com','mymomsss',NULL,0,'2013-07-17 17:18:55'),(4,'ahirsss','hmadsss','ersss@gmail.com','omsss',NULL,0,'2019-07-17 17:18:55'),(5,'sanaa','hashmi','san@gmail.com','nas',NULL,0,'2020-07-17 17:18:55'),(6,NULL,NULL,'san@gmail.com','nas',NULL,0,NULL),(7,'test','sectest','test@gmail.com','test',NULL,0,'2013-07-17 17:18:55'),(8,'test','sectest','test@gmail.com','test',NULL,0,'2013-07-17 17:18:55'),(9,'test','sectest','test@gmail.com','test',NULL,0,'2013-07-17 17:18:55'),(10,'sadaf','jamil','sad@jamil.com','merisis',NULL,0,NULL),(12,'Ahmadqasim','Qasimahmad','sb@gmail.com','meri','public/sb@gmail.com.png',0,'2019-08-20 23:26:08'),(13,'Ahmad','Qasim','sb1@gmail.com','meri',NULL,0,'2019-08-20 23:28:32'),(16,'Ahmad','Qasim','sb2@gmail.com','meri','[object Object]',0,'2019-08-22 22:56:49'),(17,'Ahmad','Qasim','sb2@gmail.com','m',NULL,0,'2019-08-22 23:05:54'),(18,'Ahmad','Qasim','sad@jamil.com','a','[object Object]',0,'2019-08-22 23:31:24'),(19,'Ahmad','Qasim','sb@gmail.com','a','[object Object]',0,'2019-08-22 23:49:06'),(20,'Ahmad','Qasim','sb@gmail.com','a','[object Object]',0,'2019-08-22 23:49:47'),(21,'Ahmad','Qasim','as@gmail.com','asdf','C:\\fakepath\\download.jpeg',0,'2019-08-23 00:01:57'),(22,'Ahmad','Qasim','aa@gmail.com','a','admin.png',0,'2019-08-23 00:04:43'),(43,'Ahmad','Qasim','sb44@gmail.com','a',NULL,0,'2019-08-26 23:54:28'),(44,'Ahmad','Qasim','sb55@gmail.com','a','C:\\fakepath\\download.jpeg',0,'2019-08-27 00:03:22'),(45,'Ahmad','Qasim','sb55@gmail.com','a','C:\\fakepath\\download.jpeg',0,'2019-08-27 00:05:12'),(46,'Ahmad','Qasim','sb55@gmail.com','a','C:\\fakepath\\download.jpeg',0,'2019-08-27 00:13:02'),(47,'Ahmad','Qasim','sb55@gmail.com','a','C:\\fakepath\\download.jpeg',0,'2019-08-27 00:16:39'),(48,'Ahmad','Qasim','sb55@gmail.com','a','my.jpg',0,'2019-08-27 00:17:04'),(49,'Ahmad','Qasim','sb55@gmail.com','a','my.jpg',0,'2019-08-27 00:18:26'),(50,'Ahmad','Qasim','sb55@gmail.com','a','sb55@gmail.com.',0,'2019-08-27 00:19:12'),(51,'Ahmad','Qasim','sb55@gmail.com','a','sb55@gmail.com.',0,'2019-08-27 00:21:30'),(56,'Ahmad','Qasimss','sb92@gmail.com','a','sb92@gmail.com.jpg',0,'2019-08-27 01:50:45'),(57,'Ahmad','Qasim','sb92@gmail.com','a','sb92@gmail.com.jpg',0,'2019-08-27 01:50:54');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-28  1:03:59
