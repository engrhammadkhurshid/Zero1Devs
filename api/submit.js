export default function handler(req, res) {
  if (req.method === "POST") {
    // In a real scenario, you would use nodemailer or a service here.
    // For now, we return success to simulate the behavior.
    res.status(200).send("Form submitted successfully! (Note: Email sending requires backend configuration)");
  } else {
    res.status(405).send("Method Not Allowed");
  }
}
