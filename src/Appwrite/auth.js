import conf from '../conf/Conf';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client); 
    }

    

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {
          console.log("AppwriteService :: createAccount :: error", error);
        }
    }
    async login({email, password}) {
        try {
            const session = await this.account.createEmailPasswordSession(email, password);
            return session;
        } catch (error) {
            console.log("AppwriteService :: login :: error", error);
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("AppwriteService :: getCurrentUser :: error", error);
            return null;
        }
    }
    

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("AppwriteService :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService
