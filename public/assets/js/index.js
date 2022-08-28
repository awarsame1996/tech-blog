const loginForm = $('#login-form');
const errorText = $('#error-text');
const signupForm = $('#signup-form');
const signOut = $('#sign-out');
const removeLink = $('.link-grey');
const createComment = $('.comment-btn');
const blogForm = $('#blog-form');
const blogButtons = $('.btn-container');

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

const handleSignOut = async () => {
	event.preventDefault();
	let response;
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		redirect: 'follow',
	};

	response = await fetch('/auth/logout', options);
	if (response.status !== 204) {
		console.error('Logout failed');
	} else {
		window.location.replace('/');
	}
};
const handleCommentDelete = async (event) => {
	const target = event.target;

	const id = $(target).attr('data-value');
	response = await fetch(`/api/comments/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	});
	console.log('working');

	if (response.status !== 200) {
		console.error('Delete failed');
	} else {
		location.reload();
		console.error('Delete Success');
	}
};
const createCommentById = async (event) => {
	event.preventDefault();
	const target = event.target;
	const blog_id = $(target).attr('data-value-blog');
	const text = $(`#addComment${blog_id}`).val();

	const payload = {
		text,
		blog_id,
	};
	console.log(payload);

	const options = {
		method: 'POST',
		body: JSON.stringify(payload),
		headers: {
			'content-Type': 'application/json',
		},
	};

	const response = await fetch('/api/comments', options);
	const data = await response.json();

	console.log(data);
	if (data.success) {
		window.location.reload();
	} else {
		errorText.append('Failed to create a new comment1. Please try again.');
	}
};
const createBlog = async () => {
	console.log('clicked');
	const title = $('#title').val();
	const contents = $('#text').val();

	const payload = {
		title,
		contents,
	};
	const options = {
		method: 'POST',
		body: JSON.stringify(payload),
		headers: {
			'content-Type': 'application/json',
		},
	};

	const response = await fetch('/api/blogs', options);
	const data = await response.json();

	console.log(data);
	if (data.success) {
		window.location.reload();
	} else {
		errorText.append('Failed to create a new comment1. Please try again.');
	}
};

const handleBlogChanges = async (event) => {
	event.preventDefault;
	const target = event.target;
	const id = $(target).attr('data-attribute');
	console.log(id);
	if (id === 'edit-btn') {
		const blogId = $(target).attr('data-value');
		console.log(blogId);
	} else if (id === 'delete-btn') {
		const blogId = $(target).attr('data-value');
		console.log(blogId);
		const confirmed = confirm(
			'Are you sur you want to delete this comment? This cannot be undone.'
		);
		if (confirmed) {
			const options = {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
				redirect: 'follow',
			};

			response = await fetch(`/api/blogs/${blogId}`, options);

			if (response.status !== 200) {
				console.error('Delete failed');
			} else {
				location.reload();
				console.error('Delete completed');
			}
		}
	}
};

loginForm.submit(handleLogin);
signupForm.submit(handleSignup);
signOut.click(handleSignOut);
removeLink.click(handleCommentDelete);
createComment.click(createCommentById);
blogForm.submit(createBlog);
blogButtons.click(handleBlogChanges);
