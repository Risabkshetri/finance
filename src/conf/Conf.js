const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteCotactCollectionId: String(import.meta.env.VITE_APPWRITE_Contact_Collection_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    geminiApiEndPoint: String(import.meta.env.VITE_GEMINI_API_END_POINT),
    geminiApiKey: String(import.meta.env.VITE_GEMINI_API_KEY)
    
};

export default conf;