create table usern(
   id_usern integer not null auto_increment, 
   user_usn varchar(100) not null,
   password_user varchar(100) not null,
   primary key (id_usern);
);

create table proyect(
    id_proyect integer not null auto_increment,
    name_proyect varchar(255) not null,
    primary key (id_proyect);
);

create table user_story(
    id_user_story integer not null auto_increment, 
    title varchar(255) not null, 
    yo_como varchar(255) not null,
    requiero varchar(255) not null,
    tal_que varchar(255) not null,
    criterio_aceptacion varchar(255) not null,
    importancia integer not null,
    complejidad integer not null, 
    primary key (id_user_story)
);

create table comment(
    id_comment integer not null auto_increment,
    id_user_story integer not null,
    id_usern integer not null,
    comment varchar(500) not null,
    primary key (id_comment)
);