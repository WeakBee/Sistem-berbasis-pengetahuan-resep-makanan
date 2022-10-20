$.getJSON('./API/umami.json', function (data){
    // Membuat Kartu
    $.each(data, function(i,data){
        $('.all-resep').append(`
        <div class="col-4">
            <div class="list-resep">
                <div class="d-flex align-items-center">
                    <img class="foto-makanan" src="./assets/Sayur Asem.jpg">
                    <div> 
                        <p class="fw-bold">`+ data.nama +`</p>
                        <p>Umami</p>
                    </div>
                </div>
                <div class="my-3">
                    <p class="mb-3 fw-bold">Bahan Masakan :</p>
                    <ul class="semua-bahan resep-`+ i +`">
                        <li>Air</li>
                    </ul>
                </div>
                <div class="d-flex align-items-center">
                    <button class="mulai-masak">
                        Mulai Masak
                        <img src="./assets/icon/fire.svg">
                    </button>
                    <img src="./assets/icon/Time.svg">
                    <span>15 Menit</span>
                </div>
            </div>
        </div>
        `);
    });
    // Membuat Kartu

    // Jumlah data
    var jumlah = data.length;
    // Jumlah data
    
    // Masukin data bahan
    for (let a = 0; a < jumlah; a++) {
        var datas = data[a];
        $.each(datas.semua_bahan, function(i,data){
            $('.resep-'+a).append(`
                <li>`+ data.bahan +`</li>
            `);
        });
        // $.each(datas.cara, function(i,data){
        //     $('.cara-'+a).append(`
        //         <li>`+ data.resep +`</li>
        //     `);
        // });
    }
    // Masukin data bahan
});