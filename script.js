function openEnvelope() {
  const flap = document.getElementById("flap");
  const card = document.getElementById("card");
  const envelope = document.querySelector(".envelope-container");
  flap.classList.add("open");

  setTimeout(() => {
    card.classList.add("peek");
  }, 400);

  setTimeout(() => {
    card.classList.remove("peek");
    card.classList.add("slide-out");
  }, 1000);

  setTimeout(() => {
    envelope.classList.remove("bounce"); 
    card.classList.add("fullscreen");
  }, 1800);
}
function getInviteDataById(id) {
  // Danh sách dữ liệu: mỗi id có ảnh + tên khách
  const data = {
    1: { image: './img/img1.jpg', guest: 'Gia Vy Nguyễn' },
    2: { image: './img/img2.jpg', guest: 'Lê Phi Hùng Phong' },
    3: { image: './img/img3.jpg', guest: 'Lê Văn C' }
  };
  return data[id] || { image: './img/default.jpg', guest: 'Quý khách' };
}
window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  const inviteData = getInviteDataById(id);

  const imgElement = document.getElementById('invite-image');
  imgElement.src = inviteData.image;

  const guestNameElement = document.getElementById('guest-name');
  guestNameElement.textContent = inviteData.guest;
});
