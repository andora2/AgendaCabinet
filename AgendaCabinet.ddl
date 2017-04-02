DROP TABLE 'User';
CREATE TABLE IF NOT EXISTS User (
  userName VARCHAR(16) PRIMARY KEY,
  email VARCHAR(255) NULL,
  password VARCHAR(32) NOT NULL,
  createTime TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP);

DROP TABLE 'Customer';
CREATE TABLE IF NOT EXISTS Customer (
  idCustomer INT PRIMARY KEY,
  name VARCHAR(45) NULL,
  familyName VARCHAR(45) NULL,
  tel VARCHAR(25) NULL,
  mobil VARCHAR(25) NULL,
  mail VARCHAR(255) NULL,
  CNP CHAR(13) NULL,
  createTime TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP
)

CREATE UNIQUE INDEX IF NOT EXISTS UNIQUE_CUSTOMER_NAME ON Customer  (name ASC, familyName ASC)

Drop table Offer;
CREATE TABLE IF NOT EXISTS Offer (
  idOffer INT PRIMARY KEY,
  amount INT UNSIGNED NOT NULL,
  details TEXT,
  createDate DATE NOT NULL DEFAULT CURRENT_DATE,
  Customer_idCustomer INT UNSIGNED NOT NULL,
  CONSTRAINT fk_Offer_Customer
    FOREIGN KEY (Customer_idCustomer)
    REFERENCES Customer (idCustomer)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)

CREATE INDEX fk_Offer_Customer_idx ON Offer (Customer_idCustomer ASC);


CREATE TABLE IF NOT EXISTS WorkType (
  idWorkType INT PRIMARY KEY,
  name VARCHAR(255) NULL,
  details TEXT NULL,
  defaultPrice INT NULL )

DROP TABLE 'Termin';
CREATE TABLE IF NOT EXISTS Termin (
  plannedTime TIMESTAMP PRIMARY KEY,
  finishTime TIMESTAMP NULL,
  realTime TIMESTAMP NULL,
  payment INT UNSIGNED NULL,
  cancelationType CHAR(12) NULL,
  Customer_idCustomer INT UNSIGNED NOT NULL,
  Offer_idOffer INT NOT NULL,
  WorkType_idWorkType INT NOT NULL,
  CONSTRAINT fk_Termin_Customer
    FOREIGN KEY (Customer_idCustomer)
    REFERENCES Customer (idCustomer)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_Termin_Offer1
    FOREIGN KEY (Offer_idOffer)
    REFERENCES Offer (idOffer)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_Termin_WorkType1
    FOREIGN KEY (WorkType_idWorkType)
    REFERENCES WorkType (idWorkType)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE INDEX fk_Termin_Customer_idx ON Termin (Customer_idCustomer ASC);
CREATE INDEX fk_Termin_Offer1_idx ON Termin (Offer_idOffer ASC);
CREATE INDEX fk_Termin_WorkType1_idx ON Termin (WorkType_idWorkType ASC);
    