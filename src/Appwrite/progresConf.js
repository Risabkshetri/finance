
import { Client, Databases, Query, ID } from "appwrite";
import conf from '../conf/Conf';

class AppwriteService {
    client = new Client();
    databases;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
    }

    async updateProgress(userId, date, progressData) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteProgressCollectionId,
                ID.unique(),
                {
                    userId,
                    date,
                    ...progressData
                }
            );
        } catch (error) {
            console.error("AppwriteService :: updateProgress :: error", error);
            throw error;
        }
    }

    async getProgress(userId) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteProgressCollectionId,
                [
                    Query.equal('userId', userId)
                ]
            );
        } catch (error) {
            console.error("AppwriteService :: getProgress :: error", error);
            throw error;
        }
    }

    subscribeToProgress(userId, callback) {
        return this.client.subscribe(`databases.${conf.appwriteDatabaseId}.collections.${conf.appwriteProgressCollectionId}.documents`, callback);
    }
}

const appwriteService = new AppwriteService();
export default appwriteService;