drop table if exists warehouse_info;
drop table if exists wishlist;
drop table if exists product_info;
drop table if exists customer_service;
drop table if exists login;
drop table if exists order_history;
drop table if exists catalogue;
drop table if exists register_user;
drop table if exists customer_service;
drop table if exists user_address;
drop table if exists cart;
drop table if exists delivery;
drop table if exists order_;
create table warehouse_info (productid int, productname varchar(50),product_category varchar(30), selling_price int, cost_price int, profit float);

create table wishlist (productid int,productname varchar(50),price int,stock tinyint(1));

create table product_info(productid int,product_category varchar(30),productname varchar(50),
product_description varchar(300),price int );


create table customer_service(custid int,name varchar(20),issue varchar(100),resolved tinyint(1));

create table login(username varchar(40),password varchar(40), email varchar(40));

create table order_history(custid int, productid int,dateoforder date);

create table catalogue(productid int,productname varchar(50),price int,stock tinyint);

create table register_user(name varchar(20),email varchar(30),phone int,password varchar(20),
confirm_password varchar(20),custid int primary key auto_increment);


create table user_address (custid int, address varchar(70));

create table cart (productid int,productname varchar(50),price int) ;


create table delivery (agentname varchar(20), name varchar(20), orderid int, address varchar(70),phone int, dateofdelivery date);

create table order_ (orderid int, custid int, totalprice int, dateoforder date);