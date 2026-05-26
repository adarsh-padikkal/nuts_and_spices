<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight requests
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    exit(0);
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["success" => false, "message" => "Only POST method is allowed"]);
    exit;
}

// Read raw body (handles JSON input from React fetch)
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, TRUE);

// Fallback to $_POST if JSON wasn't parsed
if (empty($input)) {
    $input = $_POST;
}

// Sanitize fields
$firstName = isset($input['firstName']) ? strip_tags(trim($input['firstName'])) : '';
$lastName = isset($input['lastName']) ? strip_tags(trim($input['lastName'])) : '';
$email = isset($input['email']) ? filter_var(trim($input['email']), FILTER_SANITIZE_EMAIL) : '';
$phone = isset($input['phone']) ? strip_tags(trim($input['phone'])) : '';
$message = isset($input['message']) ? strip_tags(trim($input['message'])) : '';

// Validation
if (empty($firstName) || empty($lastName) || empty($email) || empty($message)) {
    echo json_encode(["success" => false, "message" => "Please fill out all required fields."]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["success" => false, "message" => "Invalid email address."]);
    exit;
}

// Prevent header injection
function clean_header($data) {
    return str_replace(array("\r", "\n", "%0a", "%0d", "content-type:", "bcc:", "to:", "cc:"), "", $data);
}

$firstName = clean_header($firstName);
$lastName = clean_header($lastName);
$email = clean_header($email);
$phone = clean_header($phone);

$recipient = "adarshkayanna2001@gmail.com";
$subject = "Kalyan Foods Website Inquiry: $firstName $lastName";

// Construct email content
$email_content = "Dear Kalyan Foods Team,\n\n";
$email_content .= "You have received a new inquiry from your website contact form.\n\n";
$email_content .= "----------------------------------------\n";
$email_content .= "Sender Details:\n";
$email_content .= "Name: $firstName $lastName\n";
$email_content .= "Email: $email\n";
$email_content .= "Phone: " . ($phone ? $phone : "Not Provided") . "\n\n";
$email_content .= "Message Details:\n";
$email_content .= "$message\n";
$email_content .= "----------------------------------------\n\n";
$email_content .= "Best regards,\n";
$email_content .= "$firstName $lastName\n";

// Headers
$email_headers = "From: Kalyan Foods Website <noreply@kalyanfoods.com>\r\n";
$email_headers .= "Reply-To: $email\r\n";
$email_headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$email_headers .= "X-Mailer: PHP/" . phpversion();

// Send
if (mail($recipient, $subject, $email_content, $email_headers)) {
    echo json_encode(["success" => true, "message" => "Your message has been sent successfully."]);
} else {
    echo json_encode(["success" => false, "message" => "Oops! Something went wrong, and we couldn't send your message."]);
}
?>
