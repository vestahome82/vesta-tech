export async function signup(email: string, password: string) {
    try {
        const response = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        if (!response.ok) {
            throw new Error('Signup failed');
        }
        return { success: true, message: 'Account created successfully. Please log in.' };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Failed to create account. Please try again.' };
    }
}

export async function login(email: string, password: string) {
    try {
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        if (!response.ok) {
            throw new Error('Login failed');
        }
        return { success: true, message: 'Login successful!' };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Failed to log in. Please try again.' };
    }
}

