class Profile{
    constructor(){

        // Alinacak Olan Data nin id Bilgisine Gore Alinmasi Gerekiyor
        this.clientid = '',
        this.clientSecret =''
    }

    // Profil Bilgisini Aliyoruz
    async getProfile(username){

        // Profil Bilgisinin Alincagi Api yi Giriyoruz
        // Api Icinden Alinacak Data yi Belirtiyoruz
        // await Anahtar Kelimesini Kullanarak Data nin Gelmesini Bekliyoruz
        const profileResponse = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`);

        // Gelen Data yi Object Tipine Ceviriyoruz
        const profile = await profileResponse.json();

        // Gelen Profil Bilgisinin Detaylarini id Bilgisine Gore Aliyoruz
        const todoResponse = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${profile[0].id}`)

        const todo = await todoResponse.json();

        return {
            profile,
            todo
        }
    }
}