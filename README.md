# Nest.js

- **Nest JS modules**:
 <img width="793" alt="Screenshot 2022-03-19 at 11 39 09 AM" src="https://user-images.githubusercontent.com/33754197/159112227-93e442c5-b470-4b88-9669-9399272d552e.png">
- Nest JS sub parts:
  <img width="1005" alt="Screenshot 2022-03-19 at 11 48 41 AM" src="https://user-images.githubusercontent.com/33754197/159112249-05da454c-a188-4e22-a609-3aec4566affe.png">
  <img width="869" alt="Screenshot 2022-03-19 at 11 48 21 AM" src="https://user-images.githubusercontent.com/33754197/159112251-a2e429ef-a5d1-4633-a6ba-2f1d36bf68c2.png">
  
  - **Command to run file**: npx ts-node-dev src/main.ts 
  - **Nest JS CLI**: 
    - Install nest CLI: npm install -g @nestjs/cli
    - Create new project named messages: nest new messages
  - **Nest Rest Decorators**:[Refer this](https://github.com/eshita19/Nest.js/tree/main/eshrepo/nestjs/nestcli/messages)
    - @Controller - Front controller for an API endpoint
    - @GET, @POST - Handle different HTTP verbs.
    - @Query - Access query params
    - @Param  - Access path params
    - @Headers - Address headers
    - @Body - Response body
    - **Validation** - Add global validator to pipe: 
       ``` 
        app.useGlobalPipes(
        new ValidationPipe()
      );
      ```
      - "class-validator" npm package can be used for adding decorators for bean validation.


  
 
