SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;



CREATE TABLE public.algo-questions (
  "_id" serial PRIMARY KEY,
  "name" varchar NOT NULL,
  "picture" varchar NOT NULL, 
  "funfacts" varchar NOT NULL,
) WITH (
  OIDS=FALSE
);



