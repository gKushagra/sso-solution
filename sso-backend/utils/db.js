require('dotenv').config();
const { MongoClient } = require("mongodb");
const User = require('../models/user');

class Database {

    currentDb = "sso";
    uri = process.env.MONGO_URI;
    client = null;
    static dbInstance = new Database();

    constructor() {
        this.client = new MongoClient(this.uri);
    }

    static getInstance() { return this.dbInstance; }

    async findOne(collection, query, options = {}) {
        try {
            await this.client.connect();
            var database = this.client.db(this.currentDb);
            var collection = database.collection(collection);
            var doc = await collection.findOne(query, options);
        } catch (error) {
            throw new Error(error);
        } finally {
            await this.client.close();
            return doc;
        }
    }

    async insertOne(collection, doc) {
        try {
            await this.client.connect();
            var database = this.client.db(this.currentDb);
            var collection = database.collection(collection);
            await collection.insertOne(doc);
        } catch (error) {
            throw new Error(error);
        } finally {
            await this.client.close();
            return true;
        }
    }

    async updateOne() { }

    async deleteOne() { }

    async getUser(collection, query, options) {
        try {
            var doc = await this.findOne(collection, query, options);
            console.log(doc);
            if (doc) return new User(doc.userId, doc.fullName, doc.email, doc.password, doc.securityQuestion, doc.securityQuestionAnswer);
            else return null;
        } catch (error) {
            throw new Error(error);
        }
    }

    async checkExists(collection, query, options) {
        try {
            var doc = await this.findOne(collection, query, options);
            if (doc) return true;
            else return false;
        } catch (error) {
            throw new Error(error);
        }
    }

}

module.exports = Database;