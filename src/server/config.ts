
export interface IConfig {
    port: number;
}

const config = {
    port: process.env.NODE_PORT || 3000,
};

export { config };
