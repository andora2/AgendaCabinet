CREATE SCHEMA PROD;

--!DROP TABLE 'AGCAB_PROD.User';
CREATE TABLE AGCAB_PROD.User (
  userName VARCHAR(16) NOT NULL PRIMARY KEY,
  email VARCHAR(255) NULL,
  password VARCHAR(32) NOT NULL,
  createTime TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP);

--!DROP TABLE AGCAB_PROD.Customer;
CREATE TABLE AGCAB_PROD.Customer (
  idCustomer INT NOT NULL PRIMARY KEY,
  name VARCHAR(45) NULL,
  familyName VARCHAR(45) NULL,
  tel VARCHAR(25) NULL,
  mobil VARCHAR(25) NULL,
  mail VARCHAR(255) NULL,
  CNP CHAR(13) NULL,
  createTime TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX UNIQUE_CUSTOMER_NAME ON AGCAB_PROD.Customer  (name ASC, familyName ASC);

--!Drop table AGCAB_PROD.Offer;
CREATE TABLE AGCAB_PROD.Offer (
  idOffer INT NOT NULL PRIMARY KEY,
  amount INT NOT NULL,
  details VARCHAR(4096),
  createDate DATE NOT NULL DEFAULT CURRENT_DATE,
  Customer_idCustomer INT NOT NULL,
  CONSTRAINT fk_Offer_Customer
    FOREIGN KEY (Customer_idCustomer)
    REFERENCES AGCAB_PROD.Customer (idCustomer)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

CREATE INDEX fk_Offer_Customer_idx ON AGCAB_PROD.Offer (Customer_idCustomer ASC);


CREATE TABLE AGCAB_PROD.WorkType (
  idWorkType INT NOT NULL PRIMARY KEY,
  name VARCHAR(255) NULL,
  details VARCHAR(4096) NULL,
  defaultPrice INT NULL );

--!DROP TABLE AGCAB_PROD.Termin;
CREATE TABLE AGCAB_PROD.Termin (
  plannedTime TIMESTAMP NOT NULL PRIMARY KEY,
  finishTime TIMESTAMP NULL,
  realTime TIMESTAMP NULL,
  payment INT NULL,
  cancelationType CHAR(12) NULL,
  Customer_idCustomer INT NOT NULL,
  Offer_idOffer INT NOT NULL,
  WorkType_idWorkType INT NOT NULL,
  CONSTRAINT fk_Termin_Customer
    FOREIGN KEY (Customer_idCustomer)
    REFERENCES AGCAB_PROD.Customer (idCustomer)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_Termin_Offer1
    FOREIGN KEY (Offer_idOffer)
    REFERENCES AGCAB_PROD.Offer (idOffer)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_Termin_WorkType1
    FOREIGN KEY (WorkType_idWorkType)
    REFERENCES AGCAB_PROD.WorkType (idWorkType)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE INDEX fk_Termin_Customer_idx ON AGCAB_PROD.Termin (Customer_idCustomer ASC);
CREATE INDEX fk_Termin_Offer1_idx ON AGCAB_PROD.Termin (Offer_idOffer ASC);
CREATE INDEX fk_Termin_WorkType1_idx ON AGCAB_PROD.Termin (WorkType_idWorkType ASC);
    