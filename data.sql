CREATE TABLE public.algo-questions (
  "_id" serial PRIMARY KEY,
  "name" varchar NOT NULL,
  "difficulty" varchar NOT NULL,
  "prompt" text NOT NULL, 
  "solution" text NOT NULL,
  "pattern" text NOT NULL
) WITH (
  OIDS=FALSE
);

INSERT INTO "public"."public.algo-questions"  VALUES ('Max Consecutive Ones III', 'medium', 'Given an array A of 0s and 1s, we may change up to K values from 0 to 1. \nReturn the length of the longest (contiguous) subarray that contains only 1s.', 'Solution to Max Consecutive Ones III', 'Sliding Window');
INSERT INTO "public"."public.algo-questions" VALUES ('2','Diet Plan Performance', 'easy', 'A dieter consumes calories[i] calories on the i-th day. For every consecutive sequence of k days, they look at T, the total calories consumed during that sequence of k days:\nIf T < lower, they performed poorly on their diet and lose 1 point;\nIf T > upper, they performed well on their diet and gain 1 point;\nOtherwise, they performed normally and there is no change in points.\nReturn the total number of points the dieter has after all calories.length days.\n\nNote that: The total points could be negative.', 'Solution to Diet Plan Performance', 'Sliding Window');
INSERT INTO "public"."public.algo-questions" VALUES ('3','Move Zeros', 'easy', 'Given an array nums, write a function to move all 0’s to the end of it while maintaining the relative order of the non-zero elements.', 'Solution to Move Zeros', 'Two Pointers')
INSERT INTO "public"."public.algo-questions"  VALUES ('4','Sort Colors', 'medium', 'Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.\n\nWe will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.\n\nYou must solve this problem without using the librarys sort function.', 'Solution to Sort Colors', 'Two Pointers');



-- INSERT INTO public.algo-questions (name, difficulty, prompt, solution, pattern) VALUES ('Max Consecutive Ones III', 'medium', 'Given an array A of 0s and 1s, we may change up to K values from 0 to 1. \nReturn the length of the longest (contiguous) subarray that contains only 1s.', 'Solution to Max Consecutive Ones III', 'Sliding Window');
-- INSERT INTO public.algo-questions (name, difficulty, prompt, solution, pattern) VALUES ('Diet Plan Performance', 'easy', 'A dieter consumes calories[i] calories on the i-th day. For every consecutive sequence of k days, they look at T, the total calories consumed during that sequence of k days:\nIf T < lower, they performed poorly on their diet and lose 1 point;\nIf T > upper, they performed well on their diet and gain 1 point;\nOtherwise, they performed normally and there is no change in points.\nReturn the total number of points the dieter has after all calories.length days.\n\nNote that: The total points could be negative.', 'Solution to Diet Plan Performance', 'Sliding Window');
-- INSERT INTO public.algo-questions (name, difficulty, prompt, solution, pattern) VALUES ('Move Zeros', 'easy', 'Given an array nums, write a function to move all 0’s to the end of it while maintaining the relative order of the non-zero elements.', 'Solution to Move Zeros', 'Two Pointers')
-- INSERT INTO public.algo-questions (name, difficulty, prompt, solution, pattern) VALUES ('Sort Colors', 'medium', 'Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.\n\nWe will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.\n\nYou must solve this problem without using the librarys sort function.', 'Solution to Sort Colors', 'Two Pointers');