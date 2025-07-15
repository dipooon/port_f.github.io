// Scroll animations or interactivity can be added here
console.log("Portfolio loaded successfully!");
    <script>
        document.getElementById('sendMessageBtn').addEventListener('click', function() {
            // Show confirmation message
            const confirmation = document.getElementById('confirmation');
            confirmation.style.display = 'flex';
            
            // Hide after 3 seconds
            setTimeout(() => {
                confirmation.style.display = 'none';
            }, 3000);
            
            // Here you would normally submit the form
            // For demo purposes, we're just showing the confirmation
        });
    </script>