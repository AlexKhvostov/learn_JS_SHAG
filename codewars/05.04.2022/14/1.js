function createSecretHolder(secret) {
 return {
     get getSecret() {
         // геттер, срабатывает при чтении obj.propName
         return this.value;
     },

     set setSecret(value) {
         this.value = value;
         // сеттер, срабатывает при записи obj.propName = value
     }
 };
}