import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const bootstrap = async () => {
  try {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);
    await app.listen(PORT, () =>
      console.log(`Server started ont PORT ${PORT}`),
    );
  } catch (error) {
    console.error(error);
  }
};

bootstrap();
