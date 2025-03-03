// Function to print/export the CV to PDF
function printCV() {
    window.print()
  }
  
  // Function to make links more noticeable on hover
  document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a")
  
    links.forEach((link) => {
      // Store the original text
      const originalText = link.textContent
  
      // Add responsive navigation for mobile
      const mediaQuery = window.matchMedia("(max-width: 768px)")
  
      function handleScreenChange(e) {
        if (e.matches) {
          // Mobile view adjustments
          document.querySelector(".print-button").style.position = "static"
          document.querySelector(".print-button").style.marginBottom = "20px"
          document.querySelector(".print-button").style.textAlign = "right"
        } else {
          // Desktop view
          document.querySelector(".print-button").style.position = "fixed"
          document.querySelector(".print-button").style.marginBottom = "0"
          document.querySelector(".print-button").style.textAlign = "left"
        }
      }
  
      // Initial check
      handleScreenChange(mediaQuery)
  
      // Add listener for changes
      mediaQuery.addEventListener("change", handleScreenChange)
    })
  })
  
  