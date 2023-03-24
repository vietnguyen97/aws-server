/* eslint-disable prettier/prettier */
export const params = {
  AttributeDefinitions: [
    {
      AttributeName: 'Season', //ATTRIBUTE_NAME_1
      AttributeType: 'S', //ATTRIBUTE_TYPE
    },
    {
      AttributeName: 'Episode', //ATTRIBUTE_NAME_2
      AttributeType: 'S', //ATTRIBUTE_TYPE
    },
  ],
  KeySchema: [
    {
      AttributeName: 'Season', //ATTRIBUTE_NAME_1
      KeyType: 'HASH',
    },
    {
      AttributeName: 'Episode', //ATTRIBUTE_NAME_2
      KeyType: 'RANGE',
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1,
  },
  TableName: 'TEST_TABLE', //TABLE_NAME
  StreamSpecification: {
    StreamEnabled: false,
  },
};
