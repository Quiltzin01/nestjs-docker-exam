import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';  // Importar el módulo de configuración
import { UserModule } from './user/user.module'; // Suponiendo que crees un módulo de usuario

@Module({
  imports: [
    ConfigModule.forRoot(),  // Cargar el archivo .env
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [],
      synchronize: true,  // Solo para desarrollo, para producción sería mejor usar migraciones
    }),
    UserModule, // Tu módulo de usuarios
  ],
})
export class AppModule {}
