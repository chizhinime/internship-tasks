document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const successMessage = document.getElementById('successMessage');
    const resetBtn = document.getElementById('resetBtn');

    // Get form fields
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    // Error message elements
    const fullNameError = document.getElementById('fullNameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    // Validation functions
    function validateFullName() {
        const value = fullName.value.trim();
        if (value === '') {
            showError(fullName, fullNameError, 'Full name is required');
            return false;
        } else if (value.length < 2) {
            showError(fullName, fullNameError, 'Name must be at least 2 characters');
            return false;
        } else if (value.length > 50) {
            showError(fullName, fullNameError, 'Name must be less than 50 characters');
            return false;
        } else if (!/^[a-zA-Z\s'-]+$/.test(value)) {
            showError(fullName, fullNameError, 'Name can only contain letters, spaces, hyphens, and apostrophes');
            return false;
        } else {
            showSuccess(fullName, fullNameError);
            return true;
        }
    }

    function validateEmail() {
        const value = email.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (value === '') {
            showError(email, emailError, 'Email address is required');
            return false;
        } else if (!emailRegex.test(value)) {
            showError(email, emailError, 'Please enter a valid email address');
            return false;
        } else if (value.length > 100) {
            showError(email, emailError, 'Email must be less than 100 characters');
            return false;
        } else {
            showSuccess(email, emailError);
            return true;
        }
    }

    function validateMessage() {
        const value = message.value.trim();
        if (value === '') {
            showError(message, messageError, 'Message is required');
            return false;
        } else if (value.length < 10) {
            showError(message, messageError, 'Message must be at least 10 characters');
            return false;
        } else if (value.length > 1000) {
            showError(message, messageError, 'Message must be less than 1000 characters');
            return false;
        } else {
            showSuccess(message, messageError);
            return true;
        }
    }

    // Helper functions for showing errors/success
    function showError(input, errorElement, message) {
        input.classList.add('error');
        input.classList.remove('success');
        errorElement.textContent = message;
    }

    function showSuccess(input, errorElement) {
        input.classList.remove('error');
        input.classList.add('success');
        errorElement.textContent = '';
    }

    // Real-time validation
    fullName.addEventListener('input', validateFullName);
    fullName.addEventListener('blur', validateFullName);

    email.addEventListener('input', validateEmail);
    email.addEventListener('blur', validateEmail);

    message.addEventListener('input', validateMessage);
    message.addEventListener('blur', validateMessage);

    // Optional: Add character counter for message
    const messageCounter = document.createElement('div');
    messageCounter.className = 'char-counter';
    message.parentNode.appendChild(messageCounter);

    message.addEventListener('input', function() {
        const remaining = 1000 - this.value.length;
        messageCounter.textContent = `${remaining} characters remaining`;
        messageCounter.style.color = remaining < 100 ? '#EF4444' : '#64748B';
    });

    // Form submission
    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Validate all fields
        const isFullNameValid = validateFullName();
        const isEmailValid = validateEmail();
        const isMessageValid = validateMessage();

        // Optional: Validate subject (if you want to make it required)
        // const isSubjectValid = validateSubject();

        if (isFullNameValid && isEmailValid && isMessageValid) {
            // Show loading state
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;

            // Simulate form submission (replace with actual API call)
            try {
                await simulateApiCall();
                
                // Hide form, show success message
                form.style.display = 'none';
                successMessage.classList.add('active');
                
                // Log form data (for demo)
                console.log('Form submitted:', {
                    fullName: fullName.value.trim(),
                    email: email.value.trim(),
                    subject: subject.value.trim(),
                    message: message.value.trim()
                });
            } catch (error) {
                alert('Something went wrong. Please try again.');
                console.error('Submission error:', error);
            } finally {
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
            }
        } else {
            // Scroll to first error
            const firstError = document.querySelector('.form-input.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });

    // Simulate API call
    function simulateApiCall() {
        return new Promise((resolve) => {
            setTimeout(resolve, 1500); // Simulate 1.5 second network delay
        });
    }

    // Reset form
    resetBtn.addEventListener('click', function() {
        form.reset();
        form.style.display = 'block';
        successMessage.classList.remove('active');
        
        // Clear all error states
        document.querySelectorAll('.form-input').forEach(input => {
            input.classList.remove('error', 'success');
        });
        
        document.querySelectorAll('.error-message').forEach(error => {
            error.textContent = '';
        });

        // Reset character counter
        if (messageCounter) {
            messageCounter.textContent = '1000 characters remaining';
        }

        // Focus on first field
        fullName.focus();
    });

    // Prevent form submission on enter key (except for textarea)
    form.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault();
        }
    });

    // Add success class styling to CSS
    const style = document.createElement('style');
    style.textContent = `
        .form-input.success {
            border-color: #10B981;
            background-color: #F0FDF4;
        }
        
        .char-counter {
            font-size: 12px;
            color: #64748B;
            margin-top: 4px;
            text-align: right;
        }
    `;
    document.head.appendChild(style);
});
