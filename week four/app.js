// Function that renders HTML content into a DOM element by element ID
function renderToDOM(elementId, htmlContent) {
	document.getElementById(elementId).innerHTML = htmlContent;
}

// Function that converts an array of items to HTML using a template function
function mapToHTML(items, template) {
	// Safely handle undefined or non-array data
	if (!items || !Array.isArray(items)) {
		return "<p>No data available</p>";
	}
	
	let htmlString = "";
	for (let i = 0; i < items.length; i++) {
		htmlString += template(items[i]);
	}
	return htmlString;
}

// Template function for rendering a single user as HTML
function userTemplate(user) {
	let photoHTML = user.photoUrl 
		? `<img src="${user.photoUrl}" alt="${user.firstName}" class="rounded-circle img-thumbnail mb-3" style="width: 100px; height: 100px; object-fit: cover;">` 
		: '<div class="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width: 100px; height: 100px;"><span class="text-muted">No Photo</span></div>';
	
	return `
		<div class="col-md-6 col-lg-4 col-xl-3 mb-4">
			<div class="card h-100">
				<div class="card-header">
					<h5 class="card-title mb-0">${user.firstName} ${user.lastName}</h5>
				</div>
				<div class="card-body text-center">
					${photoHTML}
					<p class="card-text"><strong>${user.role}</strong></p>
				</div>
				<div class="card-footer bg-white">
					<small class="text-muted d-block">📧 ${user.email}</small>
					<small class="text-muted">📱 ${user.phone}</small>
				</div>
			</div>
		</div>
	`;
}

// Template function for rendering a single vehicle as HTML
function vehicleTemplate(vehicle) {
	let imageHTML = vehicle.photoUrl 
		? `<img src="${vehicle.photoUrl}" class="card-img-top" alt="${vehicle.plate}" style="height: 180px; object-fit: cover;">` 
		: '';
	
	let badgeClass = vehicle.status === 'available' ? 'bg-success' : vehicle.status === 'in_service' ? 'bg-warning' : 'bg-info';
	
	return `
		<div class="col-md-6 col-lg-4 col-xl-3 mb-4">
			<div class="card h-100">
				<div class="card-header">
					<h5 class="card-title mb-0">${vehicle.make} ${vehicle.model}</h5>
					<small class="text-white">Plate: ${vehicle.plate}</small>
				</div>
				${imageHTML}
				<div class="card-body">
					<p class="card-text"><small><strong>Year:</strong> ${vehicle.year}</small></p>
					<p class="card-text"><small><strong>Odometer:</strong> ${vehicle.odometer} km</small></p>
					<p class="card-text">
						<span class="badge ${badgeClass}">
							${vehicle.status}
						</span>
					</p>
				</div>
			</div>
		</div>
	`;
}

// Template function for rendering a signout record
function signoutTemplate(signout) {
	let statusBadge = signout.status === 'out' ? 'bg-warning' : 'bg-success';
	
	return `
		<div class="col-md-6 col-lg-4 col-xl-3 mb-4">
			<div class="card h-100">
				<div class="card-header">
					<h5 class="card-title mb-0">#${signout.id}</h5>
				</div>
				<div class="card-body">
					<p class="card-text"><strong>User ID:</strong> <span class="badge bg-primary">${signout.userId}</span></p>
					<p class="card-text"><strong>Vehicle ID:</strong> <span class="badge bg-secondary">${signout.vehicleId}</span></p>
					<p class="card-text"><strong>Purpose:</strong> ${signout.purpose}</p>
					<p class="card-text"><small><strong>Status:</strong> <span class="badge ${statusBadge}">${signout.status}</span></small></p>
				</div>
			</div>
		</div>
	`;
}

// Template function for rendering a battery record
function batteryTemplate(battery) {
	return `
		<div class="col-md-6 col-lg-4 col-xl-3 mb-4">
			<div class="card h-100">
				<div class="card-header">
					<h5 class="card-title mb-0">🔋 ${battery.batteryModel}</h5>
				</div>
				<div class="card-body">
					<p class="card-text"><strong>Vehicle ID:</strong> <span class="badge bg-info">${battery.vehicleId}</span></p>
					<p class="card-text"><strong>Capacity:</strong> ${battery.capacityAh}Ah</p>
					<p class="card-text"><strong>Cost:</strong> <span class="text-success">KES ${battery.cost}</span></p>
					<p class="card-text"><small><strong>Warranty:</strong> ${battery.warrantyMonths} months</small></p>
					<p class="card-text"><small class="text-muted">${battery.notes}</small></p>
				</div>
			</div>
		</div>
	`;
}

// Template function for rendering a tyre service
function tyreTemplate(tyre) {
	let serviceType = tyre.serviceType.charAt(0).toUpperCase() + tyre.serviceType.slice(1);
	
	return `
		<div class="col-md-6 col-lg-4 col-xl-3 mb-4">
			<div class="card h-100">
				<div class="card-header">
					<h5 class="card-title mb-0">🛞 ${serviceType}</h5>
				</div>
				<div class="card-body">
					<p class="card-text"><strong>Vehicle ID:</strong> <span class="badge bg-info">${tyre.vehicleId}</span></p>
					<p class="card-text"><strong>Tyres Changed:</strong> ${tyre.tyresChanged}</p>
					<p class="card-text"><strong>Cost:</strong> <span class="text-success">KES ${tyre.cost}</span></p>
					<p class="card-text"><small class="text-muted">${tyre.notes}</small></p>
					<p class="card-text"><small><strong>Provider:</strong> ${tyre.provider}</small></p>
				</div>
			</div>
		</div>
	`;
}

// Template function for rendering a report
function reportTemplate(report) {
	let detailsList = "";
	for (let i = 0; i < report.details.length; i++) {
		detailsList += `<li>▪ ${report.details[i]}</li>`;
	}
	
	return `
		<div class="col-md-6 col-lg-4 col-xl-3 mb-4">
			<div class="card h-100">
				<div class="card-header">
					<h5 class="card-title mb-0">${report.title}</h5>
				</div>
				<div class="card-body">
					<p class="card-text"><small><strong>Type:</strong> <span class="badge bg-secondary">${report.type}</span></small></p>
					<p class="card-text"><strong>Summary:</strong> ${report.summary}</p>
					<ul class="list-unstyled small">
						${detailsList}
					</ul>
				</div>
			</div>
		</div>
	`;
}

// Template function for rendering a receipt
function receiptTemplate(receipt) {
	let itemsList = "";
	for (let i = 0; i < receipt.items.length; i++) {
		itemsList += `<li>▪ ${receipt.items[i].description}: <span class="text-muted">${receipt.items[i].price}</span></li>`;
	}
	
	return `
		<div class="col-md-6 col-lg-4 col-xl-3 mb-4">
			<div class="card h-100">
				<div class="card-header">
					<h5 class="card-title mb-0">💰 Receipt #${receipt.id}</h5>
				</div>
				<div class="card-body">
					<p class="card-text"><strong>User ID:</strong> <span class="badge bg-primary">${receipt.userId}</span></p>
					<p class="card-text"><strong>Vehicle ID:</strong> <span class="badge bg-secondary">${receipt.vehicleId}</span></p>
					<p class="card-text"><strong>Amount:</strong> <span class="text-success fw-bold">${receipt.currency} ${receipt.amount}</span></p>
					<p class="card-text"><small><strong>Payment:</strong> ${receipt.paymentMethod}</small></p>
					<hr>
					<strong class="small">Items:</strong>
					<ul class="list-unstyled small">
						${itemsList}
					</ul>
				</div>
			</div>
		</div>
	`;
}

// Error handler function
function handleError(error) {
	console.error("Error fetching or processing data:", error);
	document.body.innerHTML = `<h2>Error Loading Data</h2><p>${error.message}</p>`;
}

// Main data processor function
function processData(data) {
	console.log("Processing data:", data);
	
	// Render users if data exists
	if (data.users) {
		let usersHTML = mapToHTML(data.users, userTemplate);
		renderToDOM("users", usersHTML);
		console.log("✓ Users rendered:", data.users);
	}

	// Render vehicles if data exists
	if (data.vehicles) {
		let vehiclesHTML = mapToHTML(data.vehicles, vehicleTemplate);
		renderToDOM("vehicles", vehiclesHTML);
		console.log("✓ Vehicles rendered:", data.vehicles);
	}

	// Render signouts if data exists
	if (data.signouts) {
		let signoutsHTML = mapToHTML(data.signouts, signoutTemplate);
		renderToDOM("signouts", signoutsHTML);
		console.log("✓ Signouts rendered:", data.signouts);
	}

	// Render battery records if data exists
	if (data.batteryRecords) {
		let batteriesHTML = mapToHTML(data.batteryRecords, batteryTemplate);
		renderToDOM("batteryRecords", batteriesHTML);
		console.log("✓ Battery Records rendered:", data.batteryRecords);
	}

	// Render tyre services if data exists
	if (data.tyreServices) {
		let tyresHTML = mapToHTML(data.tyreServices, tyreTemplate);
		renderToDOM("tyreServices", tyresHTML);
		console.log("✓ Tyre Services rendered:", data.tyreServices);
	}

	// Render reports if data exists
	if (data.reports) {
		let reportsHTML = mapToHTML(data.reports, reportTemplate);
		renderToDOM("reports", reportsHTML);
		console.log("✓ Reports rendered:", data.reports);
	}

	// Render receipts if data exists
	if (data.receipts) {
		let receiptsHTML = mapToHTML(data.receipts, receiptTemplate);
		renderToDOM("receipts", receiptsHTML);
		console.log("✓ Receipts rendered:", data.receipts);
	}

	// Log complete data object
	console.log("All data loaded and rendered:", data);
}

// Fetch data and process it
fetch("parkeaseData.json")
	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		try {
			processData(data);
		} catch (error) {
			handleError(error);
		}
	})
	.catch(function(error) {
		handleError(error);
	});