let dataBlog = [];

function addData(event) {
  event.preventDefault();

  let gambar = document.getElementById("upload-file").files;
  let judul = document.getElementById("input-project").value;
  let deskripsi = document.getElementById("description").value;
  let node = document.getElementById("input-nodeJs").checked;
  let react = document.getElementById("input-reactJs").checked;
  let vuejs = document.getElementById("input-vuejs").checked;
  let js = document.getElementById("input-TS").checked;
  let startDate = document.getElementById("input-date1").value;
  let endDate = document.getElementById("input-date2").value;

  if (node) {
    node = document.getElementById("input-nodeJs").value;
  } else {
    node = "";
  }

  if (react) {
    react = document.getElementById("input-reactJs").value;
  } else {
    react = "";
  }

  if (vuejs) {
    vuejs = document.getElementById("input-vuejs").value;
  } else {
    vuejs = "";
  }

  if (js) {
    js = document.getElementById("input-TS").value;
  } else {
    js = "";
  }

  gambar = URL.createObjectURL(gambar[0]);

  let blog = {
    gambar,
    judul,
    deskripsi,
    node,
    react,
    vuejs,
    js,
    startDate,
    endDate,
    duration: getDuration(startDate, endDate),
  };

  dataBlog.push(blog);

  document.getElementById("content").innerHTML = "";
  for (let index = 0; index < dataBlog.length; index++) {
    document.getElementById("content").innerHTML += `
    <div class="card">
          <div class="image-content">
            <img src="${dataBlog[index].gambar}" alt="foto" style="width: 100%" />
          </div>
          <div>
            <p style="font-weight: bold">${dataBlog[index].judul}</p>
            <p style="font-size: 13px;">Duration : ${dataBlog[index].duration}</p>
          </div>
          <div class="deskripsi">
            <p>
            ${dataBlog[index].deskripsi}
          </div>
          <div>
            <i class="fa-brands fa-${dataBlog[index].node}"></i>
            <i class="fa-brands fa-${dataBlog[index].react}"></i>
            <i class="fa-brands fa-${dataBlog[index].vuejs}"></i>
            <i class="fa-brands fa-${dataBlog[index].js}"></i>
          </div>
          <a href="#" class="edit-delete">Edit</a>
          <a href="#" class="edit-delete">Delete</a>
        </div>`;
  }
}

function getDuration(startDate, endDate) {
  let timeNow = new Date(endDate);
  let timePost = new Date(startDate);

  let distance = timeNow - timePost;

  let tahun = Math.floor(distance / 1000 / 60 / 60 / 24 / 30 / 12);
  let bulan = Math.floor(distance / 1000 / 60 / 60 / 24 / 30);
  let hari = Math.floor(distance / 1000 / 60 / 60 / 24);
  let jam = Math.floor(distance / 1000 / 60 / 60);
  let menit = Math.floor(distance / 1000 / 60);
  let detik = Math.floor(distance / 1000);

  if (tahun > 0) {
    return `${tahun} year(s)`;
  } else if (bulan > 0) {
    return `${bulan} month(s)`;
  } else if (hari > 0) {
    return `${hari} day(s)`;
  } else if (jam > 0) {
    return `${jam} hour(s)`;
  } else if (menit > 0) {
    return `${menit} minute(s)`;
  } else {
    return `${detik} second(s)`;
  }
}
