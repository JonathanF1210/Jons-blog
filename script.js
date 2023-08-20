document.getElementById("postForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent default form submission

            // Create a new FormData object to collect form data
            var formData = new FormData(this);

            // Send a POST request to the server with the form data
            fetch("http://localhost:8080/api/v1/newPost", {
                method: "POST",
                body: formData
            })
            .then(function(response) {
                if (response.ok) {
                    alert("Blog post created successfully"); // Show success message
                    // Clear form fields after successful submission
                    document.getElementById("postForm").reset();
                } else {
                    alert("Failed to create bird"); // Show error message
                }
            })
            .catch(function(error) {
                alert("An error occurred"); // Show error message
                console.error(error);
            });
        });