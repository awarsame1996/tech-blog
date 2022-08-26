const loginForm = $('#login-form');
const errorText = $('#error-text');

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

loginForm.submit(handleLogin);
