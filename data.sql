CREATE TABLE algos (
  "_id" serial PRIMARY KEY,
  "name" varchar NOT NULL,
  "difficulty" varchar NOT NULL,
  "prompt" text NOT NULL, 
  "solution" text NOT NULL,
  "pattern" text NOT NULL
) WITH (
  OIDS=FALSE
);

INSERT INTO "public"."public.algo"  VALUES ('1', 'Max Consecutive Ones III', 'Medium', 'Given an array A of 0s and 1s, we may change up to K values from 0 to 1. Return the length of the longest (contiguous) subarray that contains only 1s.', 'Solution to Max Consecutive Ones III', 'Sliding Window');
