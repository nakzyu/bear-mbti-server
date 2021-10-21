import * as mongoDB from "mongodb";

export const collections: { result?: mongoDB.Collection } = {};

export async function connectToDatabase(): Promise<void> {
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    process.env.DB_CONN_STRING as string
  );

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  const resultCollection: mongoDB.Collection = db.collection(
    process.env.RESULT_COLLECTION_NAME as string
  );

  collections.result = resultCollection;

  console.log(
    `Successfully connected to database: ${db.databaseName} and collection: ${resultCollection.collectionName}`
  );
}
