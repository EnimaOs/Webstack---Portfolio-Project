-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : mar. 22 oct. 2024 à 00:42
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.0.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `pfe`
--

-- --------------------------------------------------------

--
-- Structure de la table `etape_construction`
--

CREATE TABLE `etape_construction` (
  `id_etape_construction` int(11) NOT NULL,
  `designation_ar` varchar(255) DEFAULT NULL,
  `designation_fr` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `etape_construction`
--

INSERT INTO `etape_construction` (`id_etape_construction`, `designation_ar`, `designation_fr`) VALUES
(1, 'chira2', 'Acquisition'),
(2, 'dirasa', 'Etude'),
(3, 'bina2', 'Construction');

-- --------------------------------------------------------

--
-- Structure de la table `etape_extension`
--

CREATE TABLE `etape_extension` (
  `id_etape_Extension` int(11) NOT NULL,
  `designation_ar` varchar(255) DEFAULT NULL,
  `designation_fr` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `etape_extension`
--

INSERT INTO `etape_extension` (`id_etape_Extension`, `designation_ar`, `designation_fr`) VALUES
(1, 'dirasa', 'Etude'),
(2, 'bina2', 'Construction');

-- --------------------------------------------------------

--
-- Structure de la table `etape_projet_construction`
--

CREATE TABLE `etape_projet_construction` (
  `id_etape_projet_constr` int(11) NOT NULL,
  `id_projet_constr` int(11) DEFAULT NULL,
  `id_etape_construction` int(11) DEFAULT NULL,
  `Annee_budgetaire` year(4) DEFAULT NULL,
  `id_plan` int(11) DEFAULT NULL,
  `montant_estime` float DEFAULT NULL,
  `partenariats` text DEFAULT NULL,
  `budget_partenaire` float DEFAULT NULL,
  `Date_creation` date DEFAULT curdate(),
  `Date_modification` date DEFAULT NULL,
  `Remarques` text DEFAULT NULL,
  `utilisateur_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `etape_projet_construction`
--

INSERT INTO `etape_projet_construction` (`id_etape_projet_constr`, `id_projet_constr`, `id_etape_construction`, `Annee_budgetaire`, `id_plan`, `montant_estime`, `partenariats`, `budget_partenaire`, `Date_creation`, `Date_modification`, `Remarques`, `utilisateur_id`) VALUES
(18, 8, 1, 2024, 2, 10000, '10', 1000, '0000-00-00', NULL, '', 1),
(19, 12, 2, 2024, 2, 20000, '2000', 20000, '0000-00-00', NULL, '', 3),
(20, 3, 2, 2028, 13, 2500, '200', 2000, '0000-00-00', NULL, '', 1),
(21, 13, 2, 2030, 14, 200000, '1000', 100000, '0000-00-00', NULL, '', 1),
(22, 14, 2, 2031, 15, 2000, '200000', 200000, '0000-00-00', NULL, '', 3),
(23, 16, 1, 2033, 16, 50000, '1000', 0, '0000-00-00', NULL, '', 1),
(24, 14, 2, 2033, 16, 10000, '1000', 10000, '0000-00-00', NULL, '', 3),
(25, 14, 2, 2034, 17, 1000000, '', 0, '0000-00-00', NULL, '', 3);

-- --------------------------------------------------------

--
-- Structure de la table `etape_projet_extension`
--

CREATE TABLE `etape_projet_extension` (
  `id_etape_projet_Extension` int(11) NOT NULL,
  `id_projet_Extension` int(11) DEFAULT NULL,
  `id_etape_Extension` int(11) DEFAULT NULL,
  `id_plan` int(11) DEFAULT NULL,
  `Annee_budgetaire` year(4) DEFAULT NULL,
  `Date_creation` date DEFAULT NULL,
  `Date_modification` date DEFAULT NULL,
  `Remarques` text DEFAULT NULL,
  `utilisateur_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `etape_projet_extension`
--

INSERT INTO `etape_projet_extension` (`id_etape_projet_Extension`, `id_projet_Extension`, `id_etape_Extension`, `id_plan`, `Annee_budgetaire`, `Date_creation`, `Date_modification`, `Remarques`, `utilisateur_id`) VALUES
(9, 4, 1, 14, 2029, NULL, NULL, '', 1),
(10, 4, 1, 14, 2030, NULL, NULL, '', 1),
(11, 9, 2, 15, 2031, NULL, NULL, '', 3),
(12, 8, 2, 16, 2034, NULL, NULL, '', 1),
(13, 9, 2, 17, 2036, NULL, NULL, '', 3),
(14, 9, 2, 17, 2034, NULL, NULL, '', 3);

-- --------------------------------------------------------

--
-- Structure de la table `etat`
--

CREATE TABLE `etat` (
  `id_etat` int(11) NOT NULL,
  `designation_ar` varchar(255) DEFAULT NULL,
  `designation_fr` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `etat`
--

INSERT INTO `etat` (`id_etat`, `designation_ar`, `designation_fr`) VALUES
(1, 'mo9tara7', 'Proposé'),
(2, 'mokhatat', 'Planifié'),
(3, 'mobarmaj', 'Programmé'),
(4, 'momawal', 'Budgetisé'),
(5, 'mosalam', 'Livré');

-- --------------------------------------------------------

--
-- Structure de la table `etat_etape_projet_construction`
--

CREATE TABLE `etat_etape_projet_construction` (
  `id_etat_etape_projet_constr` int(11) NOT NULL,
  `id_etape_projet_constr` int(11) DEFAULT NULL,
  `id_etat` int(11) DEFAULT NULL,
  `Date_creation` date DEFAULT current_timestamp(),
  `Date_modification` date DEFAULT NULL,
  `Remarques` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `etat_etape_projet_construction`
--

INSERT INTO `etat_etape_projet_construction` (`id_etat_etape_projet_constr`, `id_etape_projet_constr`, `id_etat`, `Date_creation`, `Date_modification`, `Remarques`) VALUES
(15, 21, 4, '2024-06-12', NULL, ''),
(16, 22, 3, '2024-06-12', NULL, ''),
(17, 23, 4, '2024-07-01', NULL, ''),
(18, 24, 4, '2024-07-01', NULL, ''),
(19, 25, 1, '2024-07-01', NULL, '');

-- --------------------------------------------------------

--
-- Structure de la table `etat_etape_projet_extension`
--

CREATE TABLE `etat_etape_projet_extension` (
  `id_etat_etape_projet_Extension` int(11) NOT NULL,
  `id_etape_projet_Extension` int(11) DEFAULT NULL,
  `id_etat` int(11) DEFAULT NULL,
  `Date_creation` date DEFAULT NULL,
  `Date_modification` date DEFAULT NULL,
  `Remarques` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `etat_etape_projet_extension`
--

INSERT INTO `etat_etape_projet_extension` (`id_etat_etape_projet_Extension`, `id_etape_projet_Extension`, `id_etat`, `Date_creation`, `Date_modification`, `Remarques`) VALUES
(8, 10, 4, NULL, NULL, ''),
(9, 11, 5, NULL, NULL, ''),
(10, 12, 1, NULL, NULL, ''),
(11, 13, 1, NULL, NULL, ''),
(12, 14, 1, NULL, NULL, '');

-- --------------------------------------------------------

--
-- Structure de la table `historique_construction`
--

CREATE TABLE `historique_construction` (
  `id_historique` int(11) NOT NULL,
  `etat_precedent` varchar(255) DEFAULT NULL,
  `etat_actuel` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `id_etape` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `historique_construction`
--

INSERT INTO `historique_construction` (`id_historique`, `etat_precedent`, `etat_actuel`, `date`, `id_etape`) VALUES
(19, '1', '2', '2024-06-12', 21),
(20, '1', '2', '2024-06-12', 22),
(21, '2', '3', '2024-06-12', 21),
(22, '2', '3', '2024-06-12', 22),
(23, '3', '4', '2024-06-12', 21),
(24, '1', '2', '2024-07-01', 23),
(25, '1', '2', '2024-07-01', 24),
(26, '2', '3', '2024-07-01', 24),
(27, '2', '3', '2024-07-01', 23),
(28, '3', '4', '2024-07-01', 23),
(29, '3', '4', '2024-07-01', 24);

-- --------------------------------------------------------

--
-- Structure de la table `historique_extension`
--

CREATE TABLE `historique_extension` (
  `id_historique` int(11) NOT NULL,
  `etat_precedent` varchar(255) DEFAULT NULL,
  `etat_actuel` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `id_etape` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `historique_extension`
--

INSERT INTO `historique_extension` (`id_historique`, `etat_precedent`, `etat_actuel`, `date`, `id_etape`) VALUES
(6, '1', '2', '2024-06-12', 9),
(7, '2', '3', '2024-06-12', 9),
(8, '3', '4', '2024-06-12', 9),
(9, '4', '5', '2024-06-12', 9),
(10, '1', '2', '2024-06-12', 10),
(11, '1', '2', '2024-06-12', 11),
(12, '2', '3', '2024-06-12', 11),
(13, '3', '4', '2024-06-12', 11),
(14, '4', '5', '2024-06-12', 11),
(15, '2', '3', '2024-07-01', 10),
(16, '3', '4', '2024-07-01', 10);

-- --------------------------------------------------------

--
-- Structure de la table `plan`
--

CREATE TABLE `plan` (
  `id_plan` int(11) NOT NULL,
  `Date_initiale` date DEFAULT NULL,
  `Date_finale` date DEFAULT NULL,
  `Designation` varchar(255) DEFAULT NULL,
  `Active` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `plan`
--

INSERT INTO `plan` (`id_plan`, `Date_initiale`, `Date_finale`, `Designation`, `Active`) VALUES
(2, '2024-05-15', '2026-05-15', 'randox', 1),
(13, '2028-05-14', '2030-05-14', 'random', NULL),
(14, '2030-06-12', '2032-06-12', 'random', NULL),
(15, '2031-10-14', '2033-10-14', 'random', NULL),
(16, '2033-02-15', '2035-02-15', 'random', NULL),
(17, '2036-02-20', '2038-02-22', 'random', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `projet_construction`
--

CREATE TABLE `projet_construction` (
  `id_projet_constr` int(11) NOT NULL,
  `Nom_Projet` varchar(255) DEFAULT NULL,
  `cd_cycle` int(11) DEFAULT NULL,
  `netab` varchar(50) DEFAULT NULL,
  `cd_com` varchar(50) DEFAULT NULL,
  `Longitude` float DEFAULT NULL,
  `Latitude` float DEFAULT NULL,
  `nbre_salle` int(11) DEFAULT NULL,
  `stade_sport` int(11) DEFAULT NULL,
  `entrepots` int(11) DEFAULT NULL,
  `salles_ateliers` int(11) DEFAULT NULL,
  `restaurant` int(11) DEFAULT NULL,
  `internat` int(11) DEFAULT NULL,
  `taux_salle` float DEFAULT NULL,
  `encombrement` float DEFAULT NULL,
  `motif` text DEFAULT NULL,
  `Date_creation` date DEFAULT current_timestamp(),
  `Date_modification` date DEFAULT current_timestamp(),
  `utilisateur_id` int(11) DEFAULT NULL,
  `etat` varchar(50) NOT NULL DEFAULT 'proposé'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `projet_construction`
--

INSERT INTO `projet_construction` (`id_projet_constr`, `Nom_Projet`, `cd_cycle`, `netab`, `cd_com`, `Longitude`, `Latitude`, `nbre_salle`, `stade_sport`, `entrepots`, `salles_ateliers`, `restaurant`, `internat`, `taux_salle`, `encombrement`, `motif`, `Date_creation`, `Date_modification`, `utilisateur_id`, `etat`) VALUES
(3, 'projet1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-06-07', '2024-06-07', 1, 'comptabilisé'),
(6, 'projet5', NULL, 'cd_netab_1', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '2', '2024-06-07', '2024-06-07', 1, 'comptabilisé'),
(8, 'randoxx', 1, 'cd_netab_1', '1', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '2024-06-08', '2024-06-08', 1, 'comptabilisé'),
(9, 'neirto', 1, 'cd_netab_1', '1', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '2024-06-08', '2024-06-08', 1, 'comptabilisé'),
(10, 'teest', 1, 'cd_netab_1', '1', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '2024-06-08', '2024-06-08', 1, 'proposé'),
(11, 'lpee', 1, 'cd_netab_1', '1', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '2024-06-08', '2024-06-08', 1, 'proposé'),
(12, 'projet10', 1, 'cd_netab_1', '1', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '2024-06-12', '2024-06-12', 3, 'comptabilisé'),
(13, 'projet200', 1, 'cd_netab_1', '1', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '2024-06-12', '2024-06-12', 1, 'comptabilisé'),
(14, 'projet26666', 1, 'cd_netab_1', '1', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '2024-06-12', '2024-06-12', 3, 'comptabilisé'),
(15, 'projet3222', 1, 'cd_netab_1', '1', 10, 154, 5, 1, 2, 3, 1, 2, 33, 50, '', '2024-07-01', '2024-07-01', 1, 'comptabilisé'),
(16, 'projet254885', 1, 'cd_netab_1', '1', 455, 154, 3, 2, 5, 2, 1, 2, 3, 50, '', '2024-07-01', '2024-07-01', 1, 'comptabilisé'),
(17, 'projet30050', NULL, 'cd_netab_1', NULL, 1, 154, 10, 1, 2, 3, 1, 2, 45, 20, '', '2024-07-01', '2024-07-01', 3, 'proposé');

-- --------------------------------------------------------

--
-- Structure de la table `projet_extension`
--

CREATE TABLE `projet_extension` (
  `id_projet_Extension` int(11) NOT NULL,
  `cd_etab` varchar(50) DEFAULT NULL,
  `nombre_salle` int(11) DEFAULT NULL,
  `Taux_salle` float DEFAULT NULL,
  `encombrement` float DEFAULT NULL,
  `motif` text DEFAULT NULL,
  `Date_creation` date DEFAULT current_timestamp(),
  `Date_modification` date DEFAULT current_timestamp(),
  `utilisateur_id` int(11) DEFAULT NULL,
  `etat` varchar(50) NOT NULL DEFAULT 'proposé'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `projet_extension`
--

INSERT INTO `projet_extension` (`id_projet_Extension`, `cd_etab`, `nombre_salle`, `Taux_salle`, `encombrement`, `motif`, `Date_creation`, `Date_modification`, `utilisateur_id`, `etat`) VALUES
(3, NULL, NULL, NULL, 2, NULL, '2024-06-07', '2024-06-07', 1, 'comptabilisé'),
(4, '1', NULL, NULL, NULL, NULL, '2024-06-07', '2024-06-07', 1, 'comptabilisé'),
(5, '', 0, 0, 0, '', '2024-06-08', '2024-06-08', 1, 'proposé'),
(6, '', 0, 0, 0, 'rien', '2024-06-08', '2024-06-08', 1, 'proposé'),
(7, '', 0, 0, 0, '', '2024-06-12', '2024-06-12', 1, 'comptabilisé'),
(8, '', 0, 0, 0, '', '2024-06-12', '2024-06-12', 1, 'comptabilisé'),
(9, '', 0, 0, 0, '', '2024-06-12', '2024-06-12', 3, 'comptabilisé'),
(10, '', 0, 0, 0, '', '2024-07-01', '2024-07-01', 1, 'proposé'),
(11, NULL, NULL, NULL, 25, '', '2024-07-01', '2024-07-01', 1, 'proposé'),
(12, '', 0, 0, 0, '', '2024-07-01', '2024-07-01', 3, 'proposé');

-- --------------------------------------------------------

--
-- Structure de la table `r_cycle`
--

CREATE TABLE `r_cycle` (
  `id_cycle` int(11) NOT NULL,
  `cycle` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `r_cycle`
--

INSERT INTO `r_cycle` (`id_cycle`, `cycle`) VALUES
(1, 'Cycle 1'),
(2, 'Cycle 2');

-- --------------------------------------------------------

--
-- Structure de la table `r_netab`
--

CREATE TABLE `r_netab` (
  `cd_netab` varchar(50) NOT NULL,
  `netab` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `r_netab`
--

INSERT INTO `r_netab` (`cd_netab`, `netab`) VALUES
('cd_netab_1', 'Netab 1'),
('cd_netab_2', 'Netab 2');

-- --------------------------------------------------------

--
-- Structure de la table `total_salle`
--

CREATE TABLE `total_salle` (
  `id_annee` int(11) NOT NULL,
  `cd_etab` varchar(50) NOT NULL,
  `TotalSalle` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `id` int(11) NOT NULL,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `role` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`id`, `username`, `password`, `role`) VALUES
(1, 'hay hassani', 'Ww12345/', 'user'),
(2, 'admin', 'Wl12345/', 'admin'),
(3, 'sidi othmane', 'Wy123456/', 'user');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `etape_construction`
--
ALTER TABLE `etape_construction`
  ADD PRIMARY KEY (`id_etape_construction`);

--
-- Index pour la table `etape_extension`
--
ALTER TABLE `etape_extension`
  ADD PRIMARY KEY (`id_etape_Extension`);

--
-- Index pour la table `etape_projet_construction`
--
ALTER TABLE `etape_projet_construction`
  ADD PRIMARY KEY (`id_etape_projet_constr`),
  ADD KEY `id_projet_constr` (`id_projet_constr`),
  ADD KEY `etape_projet_construction_ibfk_2` (`id_etape_construction`),
  ADD KEY `etape_projet_construction_ibfk_3` (`id_plan`);

--
-- Index pour la table `etape_projet_extension`
--
ALTER TABLE `etape_projet_extension`
  ADD PRIMARY KEY (`id_etape_projet_Extension`),
  ADD KEY `id_projet_Extension` (`id_projet_Extension`),
  ADD KEY `id_etape_Extension` (`id_etape_Extension`),
  ADD KEY `id_plan` (`id_plan`);

--
-- Index pour la table `etat`
--
ALTER TABLE `etat`
  ADD PRIMARY KEY (`id_etat`);

--
-- Index pour la table `etat_etape_projet_construction`
--
ALTER TABLE `etat_etape_projet_construction`
  ADD PRIMARY KEY (`id_etat_etape_projet_constr`),
  ADD KEY `etat_etape_projet_construction_ibfk_1` (`id_etape_projet_constr`),
  ADD KEY `etat_etape_projet_construction_ibfk_2` (`id_etat`);

--
-- Index pour la table `etat_etape_projet_extension`
--
ALTER TABLE `etat_etape_projet_extension`
  ADD PRIMARY KEY (`id_etat_etape_projet_Extension`),
  ADD KEY `etat_etape_projet_extension_ibfk_1` (`id_etape_projet_Extension`),
  ADD KEY `etat_etape_projet_extension_ibfk_2` (`id_etat`);

--
-- Index pour la table `historique_construction`
--
ALTER TABLE `historique_construction`
  ADD PRIMARY KEY (`id_historique`),
  ADD KEY `id_etape` (`id_etape`);

--
-- Index pour la table `historique_extension`
--
ALTER TABLE `historique_extension`
  ADD PRIMARY KEY (`id_historique`),
  ADD KEY `id_etape` (`id_etape`);

--
-- Index pour la table `plan`
--
ALTER TABLE `plan`
  ADD PRIMARY KEY (`id_plan`);

--
-- Index pour la table `projet_construction`
--
ALTER TABLE `projet_construction`
  ADD PRIMARY KEY (`id_projet_constr`),
  ADD KEY `fk_cd_cycle` (`cd_cycle`),
  ADD KEY `fk_netab` (`netab`);

--
-- Index pour la table `projet_extension`
--
ALTER TABLE `projet_extension`
  ADD PRIMARY KEY (`id_projet_Extension`),
  ADD KEY `fk_user` (`utilisateur_id`);

--
-- Index pour la table `r_cycle`
--
ALTER TABLE `r_cycle`
  ADD PRIMARY KEY (`id_cycle`);

--
-- Index pour la table `r_netab`
--
ALTER TABLE `r_netab`
  ADD PRIMARY KEY (`cd_netab`);

--
-- Index pour la table `total_salle`
--
ALTER TABLE `total_salle`
  ADD PRIMARY KEY (`id_annee`,`cd_etab`);

--
-- Index pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `etape_projet_construction`
--
ALTER TABLE `etape_projet_construction`
  MODIFY `id_etape_projet_constr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT pour la table `etape_projet_extension`
--
ALTER TABLE `etape_projet_extension`
  MODIFY `id_etape_projet_Extension` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `etat_etape_projet_construction`
--
ALTER TABLE `etat_etape_projet_construction`
  MODIFY `id_etat_etape_projet_constr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT pour la table `etat_etape_projet_extension`
--
ALTER TABLE `etat_etape_projet_extension`
  MODIFY `id_etat_etape_projet_Extension` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT pour la table `historique_construction`
--
ALTER TABLE `historique_construction`
  MODIFY `id_historique` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT pour la table `historique_extension`
--
ALTER TABLE `historique_extension`
  MODIFY `id_historique` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT pour la table `plan`
--
ALTER TABLE `plan`
  MODIFY `id_plan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT pour la table `projet_construction`
--
ALTER TABLE `projet_construction`
  MODIFY `id_projet_constr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT pour la table `projet_extension`
--
ALTER TABLE `projet_extension`
  MODIFY `id_projet_Extension` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `etape_projet_construction`
--
ALTER TABLE `etape_projet_construction`
  ADD CONSTRAINT `etape_projet_construction_ibfk_1` FOREIGN KEY (`id_projet_constr`) REFERENCES `projet_construction` (`id_projet_constr`),
  ADD CONSTRAINT `etape_projet_construction_ibfk_2` FOREIGN KEY (`id_etape_construction`) REFERENCES `etape_construction` (`id_etape_construction`) ON UPDATE CASCADE,
  ADD CONSTRAINT `etape_projet_construction_ibfk_3` FOREIGN KEY (`id_plan`) REFERENCES `plan` (`id_plan`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `etape_projet_extension`
--
ALTER TABLE `etape_projet_extension`
  ADD CONSTRAINT `etape_projet_extension_ibfk_1` FOREIGN KEY (`id_projet_Extension`) REFERENCES `projet_extension` (`id_projet_Extension`),
  ADD CONSTRAINT `etape_projet_extension_ibfk_2` FOREIGN KEY (`id_etape_Extension`) REFERENCES `etape_extension` (`id_etape_Extension`),
  ADD CONSTRAINT `etape_projet_extension_ibfk_3` FOREIGN KEY (`id_plan`) REFERENCES `plan` (`id_plan`);

--
-- Contraintes pour la table `etat_etape_projet_construction`
--
ALTER TABLE `etat_etape_projet_construction`
  ADD CONSTRAINT `etat_etape_projet_construction_ibfk_1` FOREIGN KEY (`id_etape_projet_constr`) REFERENCES `etape_projet_construction` (`id_etape_projet_constr`) ON UPDATE CASCADE,
  ADD CONSTRAINT `etat_etape_projet_construction_ibfk_2` FOREIGN KEY (`id_etat`) REFERENCES `etat` (`id_etat`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `etat_etape_projet_extension`
--
ALTER TABLE `etat_etape_projet_extension`
  ADD CONSTRAINT `etat_etape_projet_extension_ibfk_1` FOREIGN KEY (`id_etape_projet_Extension`) REFERENCES `etape_projet_extension` (`id_etape_projet_Extension`) ON UPDATE CASCADE,
  ADD CONSTRAINT `etat_etape_projet_extension_ibfk_2` FOREIGN KEY (`id_etat`) REFERENCES `etat` (`id_etat`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `historique_construction`
--
ALTER TABLE `historique_construction`
  ADD CONSTRAINT `historique_construction_ibfk_1` FOREIGN KEY (`id_etape`) REFERENCES `etape_projet_construction` (`id_etape_projet_constr`);

--
-- Contraintes pour la table `historique_extension`
--
ALTER TABLE `historique_extension`
  ADD CONSTRAINT `historique_extension_ibfk_1` FOREIGN KEY (`id_etape`) REFERENCES `etape_projet_extension` (`id_etape_projet_Extension`);

--
-- Contraintes pour la table `projet_construction`
--
ALTER TABLE `projet_construction`
  ADD CONSTRAINT `fk_cd_cycle` FOREIGN KEY (`cd_cycle`) REFERENCES `r_cycle` (`id_cycle`),
  ADD CONSTRAINT `fk_netab` FOREIGN KEY (`netab`) REFERENCES `r_netab` (`cd_netab`);

--
-- Contraintes pour la table `projet_extension`
--
ALTER TABLE `projet_extension`
  ADD CONSTRAINT `fk_user` FOREIGN KEY (`utilisateur_id`) REFERENCES `utilisateur` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
