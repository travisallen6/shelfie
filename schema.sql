create table products
(
    productId SERIAL PRIMARY KEY,
    productName varchar(40),
    price float,
    imageUrl varchar(80)
);

insert into products
(productName, price, imageUrl)
values ('Shoes', 800.56, 'http://via.placeholder.com/150x150'),('Jacket', 42.25, 'http://via.placeholder.com/150x150'),('Pants', 36.28, 'http://via.placeholder.com/150x150')