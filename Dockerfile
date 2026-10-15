FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm install
EXPOSE 5173
COPY . .
CMD ["npm","run","dev","--","--host","0.0.0.0"]


//run create a react job application form that validates user inputs before
submission.the form must include:name,email,resume,preferred role , checkbox
