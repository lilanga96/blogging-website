var modal = document.getElementById("blogModal");
var closeBtn = document.getElementsByClassName("close")[0];
var blogItems = document.querySelectorAll(".blog-item");

blogItems.forEach(function(item) {
  item.addEventListener("click", function() {
    var blogId = this.getAttribute("data-id");
    var blogDescription = this.querySelector(".description").innerHTML;
    var blogImage = this.querySelector("img").getAttribute("src");

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

    
    modal.style.display = "block";
  });
});

closeBtn.onclick = function() {
  modal.style.display = "none";
};

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
    document.getElementById('about').style.display = 'none';
    document.querySelector('.categories').style.display = 'none'
  }

  
  const showFormButton = document.getElementById('showFormButton');
  const addBlogForm = document.querySelector('.add-blog-form');
  const blogList = document.querySelector('.blog-list');
  
  showFormButton.addEventListener('click', function() {
    addBlogForm.style.display = 'block';
  });

  const form = document.getElementById('newBlogForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    
    const formData = new FormData(form);

    const newBlogItem = document.createElement('div');
    newBlogItem.classList.add('blog-item');
    newBlogItem.dataset.id = formData.get('id'); 


    formData.forEach((value, key) => {
      newBlogItem.setAttribute(`data-${key}`, value);
    });

    const image = document.createElement('img');
    image.src = URL.createObjectURL(formData.get('image'));
    image.alt = formData.get('title');
    newBlogItem.appendChild(image);

    
    const description = document.createElement('div');
    description.classList.add('description');
    const title = document.createElement('h4');
    title.textContent = formData.get('title');
    const author = document.createElement('small');
    author.textContent = `author: ${formData.get('author')}`;
    const date = document.createElement('small');
    date.textContent = `date: ${formData.get('date')}`;
    description.appendChild(title);
    description.appendChild(author);
    description.appendChild(date);
    newBlogItem.appendChild(description);

    
    blogList.appendChild(newBlogItem);

    newBlogItem.addEventListener("click", function() {
      var blogId = this.getAttribute("data-id");
      var blogDescription = this.querySelector(".description").innerHTML;
      var blogImage = this.querySelector("img").getAttribute("src");

      modal.innerHTML = `
        <span class="close">&times;</span>
        <div class="modal-content">
          <h2>Blog ${blogId} Full Content</h2>
          <img src="${blogImage}" alt="Blog Image">
          <div class="blog-content">
            ${blogDescription}
      
          </div>
        </div>
      `;
      
      modal.style.display = "block";
    });

    
    addBlogForm.style.display = 'none';
  });

  
  closeBtn.addEventListener('click', function() {
    modal.style.display = "none";
  });

  
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
