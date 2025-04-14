
// Main JavaScript for Question Maker

// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
      } else {
        mobileMenu.classList.add('hidden');
      }
    });
  }
});

// Function to handle form submissions with validation
function validateForm(formId, validationRules) {
  const form = document.getElementById(formId);
  if (!form) return false;
  
  let isValid = true;
  
  // Check each field against rules
  for (const fieldId in validationRules) {
    const field = document.getElementById(fieldId);
    const rules = validationRules[fieldId];
    
    if (!field) continue;
    
    // Required check
    if (rules.required && field.value.trim() === '') {
      isValid = false;
      // Add error styling
      field.classList.add('border-red-500');
      
      // Create or update error message
      let errorMsg = field.parentNode.querySelector('.error-message');
      if (!errorMsg) {
        errorMsg = document.createElement('div');
        errorMsg.className = 'error-message text-red-500 text-sm mt-1';
        field.parentNode.appendChild(errorMsg);
      }
      errorMsg.textContent = rules.errorMessage || 'This field is required';
    } else {
      // Remove error styling
      field.classList.remove('border-red-500');
      const errorMsg = field.parentNode.querySelector('.error-message');
      if (errorMsg) errorMsg.remove();
    }
  }
  
  return isValid;
}

// Smooth scroll functionality
document.addEventListener('DOMContentLoaded', function() {
  // Get all links that have hash (#) references
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // If it's just a # or it's referring to a different page, do nothing
      if (href === '#' || href.indexOf('#') !== 0) {
        return;
      }
      
      e.preventDefault();
      
      // Get the target element
      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Calculate scroll position (accounting for fixed header)
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        // Smooth scroll to target
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
