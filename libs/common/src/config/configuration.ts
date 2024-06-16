export const configuration = () => {
  return {
    database: {
      port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
      host: process.env.DATABASE_HOST || 'localhost',
      username: process.env.DATABASE_ROOT || 'root',
      password: process.env.DATABASE_PASSWORD || 'password',
      database: process.env.DATABASE_NAME || 'flancer-db',
    },
    authService: {
      http_port: parseInt(process.env.HTTP_AUTH_PORT, 10) || 3000,
      tcp_port: parseInt(process.env.TCP_AUTH_PORT, 10) || 3002,
    },
    userService: {
      http_port: parseInt(process.env.HTTP_USER_PORT, 10) || 3001,
      tcp_port: parseInt(process.env.TCP_USER_PORT, 10) || 3003,
    },
    jwt: {
      secret: process.env.JWT_SECRET,
    },
  };
};
