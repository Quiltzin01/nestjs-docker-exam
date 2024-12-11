# Usar la imagen base de Node.js
FROM node:18

# Crear y establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar el package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar todo el código de la aplicación
COPY . .

# Compilar el proyecto
RUN npm run build

# Exponer el puerto en el que corre la app
EXPOSE 3000

# Ejecutar la app
CMD ["npm", "run", "start:prod"]
