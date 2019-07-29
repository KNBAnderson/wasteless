import uuid from "uuid";
import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {
  const data = JSON.parse(event.body);

  const params = {
    TableName: "ingredients",
    Item: {
      userId: event.requestContext.identity.cognitoIdentityId,
      ingredientId: uuid.v4(),
      ingredientName: data.ingredientName,
      createdAt: Date.now()
    }
  };

  try {
    await dynamoDbLib.call("put", params);
    return success(params.Item);
  } catch (e) {
    console.log(e);
    return failure({ status: false });
  }
}