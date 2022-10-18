$.getJSON('./API/umami.json', function (data){
    // Membuat Kartu
    $.each(data, function(i,data){
        $('.daftar-menu').append(`
        <div class="col-4">
            <div class="card" style="width: 18rem;">
                <img src="`+ data.gambar +`" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">`+ data.nama +`</h5>
                    <ul class="card-text resep-`+ i +`"></ul>
                    <p>Cara Masak:</p>
                    <ol class="card-text cara-`+ i +`"></ol>
                    <a href="#" class="btn btn-primary">Masak</a>
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
                <li>`+ data.bahan + ` ` + data.jumlah + ` ` + data.satuan +` ` + data.cat +`</li>
            `);
        });
        $.each(datas.cara, function(i,data){
            $('.cara-'+a).append(`
                <li>`+ data.resep +`</li>
            `);
        });
    }
    // Masukin data bahan
});