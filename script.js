let currentPage = 2;

        function updatePagination() {
            const circles = document.querySelectorAll('.page-circle');
            circles.forEach(circle => {
                circle.classList.remove('active');
            });
            circles[currentPage - 1].classList.add('active');

            document.getElementById('prevBtn').disabled = currentPage === 1;
            document.getElementById('nextBtn').disabled = currentPage === circles.length;
        }

        function prevPage() {
            if (currentPage > 1) {
                currentPage--;
                updatePagination();
            }
        }

        function nextPage() {
            const circles = document.querySelectorAll('.page-circle');
            if (currentPage < circles.length) {
                currentPage++;
                updatePagination();
            }
        }

        function goToPage(page) {
            currentPage = page;
            updatePagination();
        }
  