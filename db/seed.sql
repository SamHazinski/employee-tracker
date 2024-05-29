INSERT INTO departments (department_name)
VALUES  ('Sales'),
        ('Finance'),
        ('Engineering'),
        ('Legal');

 INSERT INTO roles (title, salary, department_id)
 VALUES ('Sales Lead', 100000, 1),
        ('Sales Person', 85000, 1),
        ('Lead Engineer', 110000, 3),
        ('Software Engineer', 105000, 3),
        ('Account Manager', 120000, 2),
        ('Accountant', 95000, 2),
        ('Legal Team Lead', 130000, 4),
        ('Lawyer', 120000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Doe', 1, null),
       ('Mike', 'Chan', 2, 1),
       ('Ashley', 'Rodriguez', 3, null),
       ('Kevin', 'Tupik', 4, 3),
       ('Kunal', 'Singh', 5, null),
       ('Malia', 'Brown', 6, 6),
       ('Sarah', 'Lourd', 7, null),
       ('Tom', 'Allen', 8, 7);