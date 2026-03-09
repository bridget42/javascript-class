const form = document.getElementById('registrationForm');
const msg = document.getElementById('message');

function setError(input, text) {
  const row = input.closest('.row') || input.parentElement;
  const err = row.querySelector('.error');
  if (err) err.textContent = text || '';
  if (text) input.classList.add('invalid'); else input.classList.remove('invalid');
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
  if (!phone) return true;
  const cleaned = phone.replace(/[\s\-()]/g, '');
  return /^(?:\+256|256|0)7\d{8}$/.test(cleaned);
}

function clearMessages() {
  msg.textContent = '';
  msg.className = 'message';
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  clearMessages();
  let valid = true;

  const firstName = form.firstName;
  const lastName = form.lastName;
  const email = form.email;
  const password = form.password;
  const confirmPassword = form.confirmPassword;
  const phone = form.phone;
  const terms = form.terms;

  if (!firstName.value.trim()) {
    setError(firstName, 'First name is required'); valid = false
  } else setError(firstName, '');
  if (!lastName.value.trim()) { setError(lastName, 'Last name is required'); valid = false } else setError(lastName, '');

  if (!email.value.trim()) { setError(email, 'Email is required'); valid = false }
  else if (!validateEmail(email.value.trim())) { setError(email, 'Enter a valid email'); valid = false }
  else setError(email, '');

  if (!password.value) { setError(password, 'Password is required'); valid = false }
  else if (password.value.length < 6) { setError(password, 'Password must be at least 6 characters'); valid = false }
  else setError(password, '');

  if (!confirmPassword.value) { setError(confirmPassword, 'Please confirm password'); valid = false }
  else if (confirmPassword.value !== password.value) { setError(confirmPassword, 'Passwords do not match'); valid = false }
  else setError(confirmPassword, '');

  if (!validatePhone(phone.value.trim())) { setError(phone, 'Enter a valid phone number'); valid = false } else setError(phone, '');

  if (!terms.checked) {
    const row = terms.closest('.row') || terms.parentElement;
    const err = row.querySelector('.error');
    if (err) err.textContent = 'You must accept the terms';
    valid = false;
  } else {
    const row = terms.closest('.row') || terms.parentElement;
    const err = row.querySelector('.error'); if (err) err.textContent = '';
  }

  if (!valid) {
    msg.textContent = 'Please fix the highlighted errors and try again.';
    msg.classList.add('error');
    return;
  }

  const data = {
    firstName: firstName.value.trim(),
    lastName: lastName.value.trim(),
    email: email.value.trim(),
    phone: phone.value.trim(),
    dob: form.dob.value,
    gender: form.gender.value || ''
  };

  try {
    const key = 'registrations';
    const existing = JSON.parse(localStorage.getItem(key) || '[]');
    existing.push(data);
    localStorage.setItem(key, JSON.stringify(existing));

    msg.textContent = 'Registration successful!';
    msg.classList.add('success');
    form.reset();
  } catch (err) {
    msg.textContent = 'Unable to save registration locally.';
    msg.classList.add('error');
  }
});