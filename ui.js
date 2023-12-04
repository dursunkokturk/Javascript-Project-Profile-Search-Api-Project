class UI{
    constructor(){
        this.profileContainer = document.querySelector('#profileContainer');
        this.alert = document.querySelector('#alert');
    }

    // Profil Bilgilerini Yazdiriyoruz
    showProfile(profile){
        this.profileContainer.innerHTML = 
        `
            <div class="card card-body">
                <div class="row">
                    <div class="col-md-3">
                         <a href="https://placeholder.com"><img src="https://via.placeholder.com/350x150" class="img-thumbnail"></a>
                    </div>
                    <div class="col-md-9">
                        <h4>Contact</h4>
                        <ul class="list-group">
                             <li class="list-group-item">
                                name : ${profile.name}
                             </li>
                             <li class="list-group-item">
                                username : ${profile.username}
                             </li>
                             <li class="list-group-item">
                                email : ${profile.email}
                             </li>

                             <li class="list-group-item">
                               address : ${profile.address.street}
                               ${profile.address.city}
                               ${profile.address.zipcode}
                               ${profile.address.suite}
                             </li>
                             <li class="list-group-item">
                             phone : ${profile.phone}
                              </li>
                              <li class="list-group-item">
                                  website : ${profile.website}
                             </li>
                             <li class="list-group-item">
                             company : ${profile.company.name}
                            </li>
                        </ul>
                        <h4 class="mt-4">Todo list</h4>
                        <ul id="todo" class="list-group">

                        <ul>
                    </div>
                </div>
            </div>
        `;
    }

    // Aranan Profil Bulunamazsa Kullaniciya Verilecek Uyari Mesaji
    showAlert(text){
        this.alert.innerHTML =`${text} is not found.`;
    }

    // Profil Bilgisinin Detaylarinda Yer Alan Bilgileri Gosteriyoruz
    showTodo(todo){
        let html="";

        // todo Degiskeni Icindeki Tum Datalar Icinde Tarama Yapiyoruz
        todo.forEach(item => {

            // Api Icinde Completed Ozelligi Olan
            // Object leri Aliyoruz Ve 
            // Background Color Yesil Renkte Olacak
            if(item.completed){
                html+=`
                    <li class="list-group-item bg-success">
                        ${item.title}
                    </li>    
                `;
            }else{

                // Gelen Data lar Icinde Completed Ozelliginde false Olanlar Var Ise
                // Background Color Gri Renkte Olacak
                html+=`
                <li class="list-group-item bg-secondary">
                    ${item.title}
                </li>    
            `;
            }
        });
        this.profileContainer.querySelector('#todo').innerHTML = html;
    }

    // Profil Arama Isleminden Sonra Yazilan Bilgileri Siliyoruz
    clear(){
        this.profileContainer.innerHTML="";
        this.alert.innerHTML="";
    }
}