// ContactService.js
import conf from '../conf/Conf';
import { Client, Databases, ID } from "appwrite";

export class ContactService {
    client = new Client();
    databases;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
    }

    async submitContactForm({name, email, message}) {
        console.log("Database ID:", conf.appwriteDatabaseId);
        console.log("Collection ID:", conf.appwriteCotactCollectionId);
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCotactCollectionId,
                ID.unique(),
                {
                    name,
                    email,
                    message,
                }
            );
        } catch (error) {
            console.log("ContactService :: submitContactForm :: error", error);
            throw error;
        }
    }
}

const contactService = new ContactService();

export default contactService;


