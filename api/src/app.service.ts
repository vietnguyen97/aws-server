import { Injectable } from "@nestjs/common";
import { CreateTableCommand } from "@aws-sdk/client-dynamodb";
import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { ddbClient } from "./config";
import { ddbDocClient } from "./config/write-dynamodb";
import { params } from "./constants";

@Injectable()
export class AppService {
  async createDynamoDb(): Promise<any> {
    try {
      const data = await ddbClient.send(new CreateTableCommand(params));
      console.log("Table Created new", data);
      return data;
    } catch (err) {
      console.log("Error", err);
    }
  }

  async writeDynamoDb(): Promise<any> {
    const params = {
      TableName: "http-crud-tutorial-items",
      Item: {
        id: "34",
        name: "Episode1",
        price: "465",
      },
    };
    try {
      const data = await ddbDocClient.send(new PutCommand(params));
      console.log("Success - item added or updated", data);
    } catch (err) {
      console.log("Error", err.stack);
    }
  }
}
