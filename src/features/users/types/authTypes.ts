export interface LoginDataType {
    email: string;
    password: string;
}

export interface SigninDataType {
    username: string;
    email: string;
    password: string;
}

export interface AuthContextType {
    isConnected: boolean;
    setIsConnected: (args: any) => void;
}