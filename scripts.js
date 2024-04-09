var modal = document.getElementById("blogModal");
var closeBtn = document.getElementsByClassName("close")[0];
var blogItems = document.querySelectorAll(".blog-item");

blogItems.forEach(function(item) {
  item.addEventListener("click", function() {
    var blogId = this.getAttribute("data-id");
    var blogDescription = this.querySelector(".description").innerHTML;
    var blogImage = this.querySelector("img").getAttribute("src");

    // Fetch additional content (e.g., from a server) based on the blogId if needed

    // Set the content of the modal
    modal.innerHTML = `
      <span class="close">&times;</span>
      <div class="modal-content">
        <h2>Blog ${blogId} Full Content</h2>
        <img src="${blogImage}" alt="Blog Image">
        <div class="blog-content">
          ${blogDescription}
          <!-- Add full content of the blog here -->
        </div>
      </div>
    `;

    // Display the modal
    modal.style.display = "block";
  });
});

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function filterBlogs(category) {
    const blogItems = document.querySelectorAll('.blog-item');
    blogItems.forEach(item => {
      if (item.dataset.category === category || category === 'all') {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }


