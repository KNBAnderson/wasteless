import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {
  const data = JSON.parse(event.body);
  const params = {
    TableName: "ingredients",
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      ingredientId: event.pathParameters.id
    },
    UpdateExpression: "SET ingredientName = :ingredientName",
    ExpressionAttributeValues: {
      ":ingredientName": data.ingredientName || null
    },
    ReturnValues: "ALL_NEW"
  };

  try {
    await dynamoDbLib.call("update", params);
    return success({ status: true });
  } catch (e) {
    console.log(e);
    return failure({ status: false });
  }
}