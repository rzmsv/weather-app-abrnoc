import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { appConfigs } from '../configs';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My Weather APIs',
      version: '1.0.0',
      description: 'API documentation for WEATHER app ',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    servers: [
      {
        url: `${appConfigs.APP_PROTOCOL}://${appConfigs.APP_HOST}:${appConfigs.APP_PORT}/api/v1`,
      },
    ],
  },
  apis: ['./src/routes/api/v1/auth/*.ts', './src/routes/api/v1/weather/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerSpec, swaggerUi };