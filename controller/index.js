const functions = require("../database/functions");

const collectionName = (collectionUri)=>{
  return collectionUri.split('/')[1]
}

const controller = {
  async listAllByCollection(request, response) {
    try {
      const collections = await functions.getAll(collectionName(request.originalUrl));

      return response.status(200).json(collections);
    } catch (error) {
      return response.status(400).json(error);
    }
  },
  async getOneByCollecionAndKey(request, response) {
    try {
      const collection = await functions.getOne(
        collectionName(request.originalUrl),
        request.params.key
      );

      return response.status(200).json(collection);
    } catch (error) {
      return response.status(400).json(error);
    }
  },
  async saveCollectionByKey(request, response) {
    try {
      const collection = 
        await functions.set(
          collectionName(request.originalUrl), 
          request.params.key, 
          request.body);

      return response.status(201).json(collection);
    } catch (error) {
      return response.status(400).json(error);
    }
  },
  async deleteByCollectinoAndKey(request, response) {
    try {
      await functions.delete(collectionName(request.originalUrl), request.params.key);

      return response.status(204);
    } catch (error) {
      return response.status(400).json(error);
    }
  },


  async listCollectionWithOpportunities(request, response) {
    try {
    } catch (error) {
      return response.status(400).json(error);
    }
  },
};

module.exports = controller;
