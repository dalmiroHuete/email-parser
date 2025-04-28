// TODO: This is just for terms of the exercise that currently validates if the JSON link in the body of the email comes from the jsonplaceholder website.
// in a real-world scenario, we should validate that the link explicitly ends with ".json".
export const JSON_LINK_REGEX =
  /https:\/\/jsonplaceholder\.typicode\.com\/[^\s]+/;

export const LINK_TO_WEBSITE = /https?:\/\/[^\s]+/;
