import lucia from 'lucia-auth';
import { sveltekit } from 'lucia-auth/middleware';
import postgresAdapter from '@lucia-auth/adapter-postgresql';
import { db } from '../lib/drizzle.config';

export const auth = lucia({
    adapter: postgresAdapter(db), // Connect Lucia to the database
    env: import.meta.env.MODE === 'development' ? 'DEV' : 'PROD',
    middleware: sveltekit(),
    transformDatabaseUser: (userData) => {
        return {
            userId: userData.id,
            username: userData.username
        };
    }
});

export type Auth = typeof auth;
