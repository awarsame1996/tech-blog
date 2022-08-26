const loginForm = $('#login-form');
const errorText = $('#error-text');
const signupForm = $('#signup-form');

const handleLogin = async () => {
	console.log('form connected');
	event.preventDefault();

	const email = $('#emailInput').val();
	const password = $('#passwordInput').val();
	if (email && password) {
		try {
			const payload = {
				email,
				password,
			};
			errorText.empty();
			console.log(payload);

			const response = await fetch('auth/login', {
				method: 'POST',
				body: JSON.stringify(payload),
				headers: {
					'Content-Type': 'application/JSON',
				},
			});
			const data = await response.json();
			if (data.success) {
				window.location.assign('/dashboard');
			} else {
				errorText.append(`<div class="alert alert-danger" role="alert">
        failed to login!
      </div>`);
			}
		} catch (error) {
			errorText.append(`<div class="alert alert-danger" role="alert">
          failed to login!
        </div>`);
		}
	}
};

const handleSignup = async () => {
	event.preventDefault();
	const first_name = $('#firstNameInput').val();
	const last_name = $('#lastNameInput').val();
	const email = $('#emailInput').val();
	const password = $('#passwordInput').val();
	const confirmPassword = $('#confirmPasswordInput').val();

	errorText.empty();

	if (first_name && last_name && email && password === confirmPassword) {
		try {
			const payload = {
				first_name,
				last_name,
				email,
				password,
				confirmPassword,
			};
			const response = await fetch('/auth/signup', {
				method: 'POST',
				body: JSON.stringify(payload),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			const data = await response.json();

			if (data.success) {
				window.location.assign('/login');
			} else {
				errorText.append(
					`<p class="text-danger">Failed to create account</p>`
				);
			}
		} catch (error) {
			errorText.append(
				`<p class="text-danger">Failed to create account</p>`
			);
		}
	} else {
		errorText.append(
			`<p class="text-danger">Error signing up, please try again!</p>`
		);
	}
};

loginForm.submit(handleLogin);
signupForm.submit(handleSignup);
