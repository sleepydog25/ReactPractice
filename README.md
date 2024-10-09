# Project: React Practice
This is a project for practicing react

## DataBase Schema
https://dbdiagram.io/d

```
Table MainForm {
  id varchar [primary key] 
  user_id integer 
  orders_id integer
}

Table user {
  user_id integer [primary key]
  first_name varchar
  last_name varchar
  gender integer
  address varchar
  is_homeless boolean
  job varchar 
  note varchar
}

Table orders{
  orders_id integer [primary key]
  apple_count integer
  banana_condiments varchar
}

Ref: MainForm.user_id> user.user_id
Ref: MainForm.orders_id> orders.orders_id
```

![image](https://github.com/user-attachments/assets/bb1b56db-4c22-44b1-9de5-14b957c7a0ab)

ver 2
```
Table MainForm {
  id integer [primary key] 
  mainFormId varchar
  first_name varchar
  last_name varchar
  gender integer
  address varchar
  is_homeless boolean
  job varchar 
  note varchar
  apple_count integer
  banana_condiments varchar
}
```
![image](https://github.com/user-attachments/assets/67007514-9dbf-4d45-a8e7-aed45f05727a)

