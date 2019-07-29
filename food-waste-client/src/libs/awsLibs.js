import { Storage } from "aws-amplify";

export async function s3Upload(ingredient) {
  const ingredientname = `${Date.now()}-${ingredient}`;
  const stored = await Storage.vault.put(ingredientname, ingredient);
  console.log(stored)
  return stored.key;
}