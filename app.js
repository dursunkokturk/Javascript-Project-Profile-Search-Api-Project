const profile = new Profile();
const ui = new UI();

// Klavyedeki Tusa Bastiktan Sonra Tusu Birakirken Yapilacak Islemler
const searchProfile = document.querySelector('#searchProfile');

searchProfile.addEventListener('keyup',(event)=>{

    // Yeni Bir Profil Arama Islemi Yapilirken Daha Onceden Girilmis Bilgi Var Ise
    // Girilen Bilgileri Siliyoruz
    ui.clear();

    let text =  event.target.value;

    // Input Alanina Deger Girilmis Ise
    if(text!==''){

        // Girilen Degeri profile.js Dosyasindaki 
        // Profile Objesine Gonderiyoruz
        profile.getProfile(text)
        .then(response => {

                // Profil Arama Islemi Bitene Kadar Hafizada Yer Kaplama Yapilmayacak
                if(response.profile.length === 0){

                    // Aranan Profil Bilgileri Bulunamadiginda
                    // Kullaniciya Uyari Mesaji Veriyoruz
                    ui.showAlert(text);
                }else{                  
                    
                    // Profil Arama Islemi Bittiginde Gelen Data yi Yazdirma Islemi Icin
                    // ui.js Dosyasindaki UI Class a Gonderiyoruz
                    ui.showProfile(response.profile[0]);

                    // Profil Bilgisinin Detaylarinda Yer Alan Bilgileri Gosteriyoruz
                    ui.showTodo(response.todo);
                }  
            }) 
        .catch(err=>{
            ui.showAlert(text);
        })  
}
});