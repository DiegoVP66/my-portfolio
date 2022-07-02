INSERT INTO tb_project (title, image, content, link, repository) VALUES ('DsSales', 'https://user-images.githubusercontent.com/84286836/154867839-6c5b7642-38e4-4506-a8ec-d76a3e400ec7.png', 'Projeto dsSales', 'https://github.com/DiegoVP66/sales-dashboard', 'https://dio-git-challenge.netlify.app/');
INSERT INTO tb_project (title, image, content, link, repository) VALUES ('DIO-CSS-CHALLENGE', 'https://user-images.githubusercontent.com/84286836/169931301-9f8a3cb2-f89b-4a34-ba28-965b11e92a08.png', 'Projeto dsSales', 'https://github.com/DiegoVP66/sales-dashboard', 'https://dio-git-challenge.netlify.app/');
INSERT INTO tb_project (title, image, content, link, repository) VALUES ('Movie', 'https://user-images.githubusercontent.com/84286836/154871353-be07e788-dfd8-4fe4-981f-4a4b88e5d857.png', 'Projeto dsSales', 'https://github.com/DiegoVP66/sales-dashboard', 'https://dio-git-challenge.netlify.app/');

INSERT INTO tb_about (content, image) VALUES ('Atualmente estou cursando Análise e Desenvolvimento de Sistemas pelo Centro Universitário Internacional Uninter. Tenho conhecimentos em Java , Spring Boot , React , Javascript, Typescript, HTML, CSS, Postgres, Docker, AWS, testes unitários e de integração, seguindo o modelo TDD.', 'https://user-images.githubusercontent.com/84286836/176979267-fadfd324-881a-466b-a73f-d2d20f1b40af.svg');

INSERT INTO tb_user (name,  email,  password) VALUES ('Diego',  'vp.diego28@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_ADMIN');
INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);